/**
 *
 * @param job
 * @param cb(error, result)
 * @returns {{add: add, die: die}}
 */
export function queueP(job, cb = () => {}) {
  let lastArgs;
  let lastCb;
  let running = false;
  let died = false;
  function run() {
    if (running) {
      return;
    }
    running = true;
    job(lastArgs).then((r) => {
      if (died) {
        return;
      }
      running = false;
      cb(null, r);
      lastCb(null, r);
    }, (err) => {
      if (died) {
        return;
      }
      running = false;
      cb(err, null);
      lastCb(err, null);
    });
  }
  return {
    add: function(args, cb = () => {}) {
      lastArgs = args;
      lastCb = cb;
      setTimeout(run, 0);
    },
    die: () => { died = true;}
  };
}
