// for use from within the worker
export function bindCb(conf) {
  self.addEventListener('message', (event) => {
    let eventType = event.data.type;
    if (conf.hasOwnProperty(eventType)) {
      let f = conf[eventType];
      let args = event.data.args;
      f((error, result) => {
        postMessage({
          ...event.data,
          result,
          error,
        });
      }, ...args);
    }
  });
}

// for use from within the worker
export function bindP(conf) {
  self.addEventListener('message', (event) => {
    let eventType = event.data.type;
    if (conf.hasOwnProperty(eventType)) {
      let f = conf[eventType];
      let args = event.data.args;
      f(...args).then((result) => {
        postMessage({
          ...event.data,
          result,
          error: null,
        });
      }, (error) => {
        postMessage({
          ...event.data,
          result: null,
          error: error.toString(),
        });
      });
    }
  });
}

// TODO make a cb version of this

// for use from outside the worker
export function runP(Worker, tasks) {
  let worker = null;
  let getW = () => {
    if (worker === null) {
      worker = Worker();
    }
    return worker;
  };

  let i = 1;

  return function runner(task, args) {
    if (tasks.indexOf(task) === -1) {
      return Promise.reject(new Error(`[dev] task: ${task}, was not found`))
    }
    let j = i++;
    let w = getW();
    return new Promise((y, n) => {
      function handle(event){
        if(j === event.data.j) {
          w.removeEventListener('message', handle);
          if (event.data.result !== null) {
            y(event.data.result);
          } else {
            n(event.data.error);
          }
        }
      }
      w.addEventListener('message', handle);
      w.postMessage({
        j,
        type: task,
        args
      });
    })
  }
}
