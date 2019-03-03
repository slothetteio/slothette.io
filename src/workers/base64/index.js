import base64Worker from './base64.worker.js';

let worker = null;
function getWorker() {
  if (worker === null) {
    LOG_PERF && console.time('[time] Worker:');
    worker = base64Worker();
    LOG_PERF && console.timeEnd('[time] Worker:');
  }
  return worker;
}

let i = 1;

// encode usually does not fail
export function base64EncodeP(str) {
  let w = getWorker();
  let j = i++;
  LOG_PERF && console.time(`[time] Full Promise encode for '${str}'`);

  return new Promise((y) => {
    function handle(event){
      if(j === event.data.j) {
        w.removeEventListener('message', handle);
        LOG_PERF && console.timeEnd(`[time] Full Promise encode for '${str}'`);
        y(event.data.result);
      }
    }
    w.addEventListener('message', handle);
    w.postMessage({
      j,
      type: 'encode',
      str,
    });
  })
}

// Decode might fail
export function base64DecodeP(str) {
  let w = getWorker();
  let j = i++;
  LOG_PERF && console.time(`[time] Full Promise decode for '${str}'`);

  return new Promise((y, n) => {
    function handle(event){
      if(j === event.data.j) {
        w.removeEventListener('message', handle);
        LOG_PERF && console.timeEnd(`[time] Full Promise decode for '${str}'`);
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
      type: 'decode',
      str,
    });
  })
}

// this was just for test, comparing perf between cb and promise
// encode does not fail
export function base64EncodeCb(str, cb) {
  let w = getWorker();
  let j = i++;
  LOG_PERF && console.time(`[time] Full Cb encode for '${str}'`);

  function handle(event) {
    if(j === event.data.j) {
      w.removeEventListener('message', handle);
      LOG_PERF && console.timeEnd(`[time] Full Cb encode for '${str}'`);
      cb(null, event.data.result);
    }
  }

  w.addEventListener('message', handle);
  w.postMessage({
    j,
    type: 'encode',
    str,
  });
}
