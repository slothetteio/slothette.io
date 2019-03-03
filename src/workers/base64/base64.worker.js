import {Base64} from 'js-base64';

self.addEventListener('message', (event) => {
  if(event.data.type === 'encode') {
    LOG_PERF && console.time(`[time] Just encode for '${event.data.str}'`);
    const r = Base64.encode(event.data.str);
    LOG_PERF && console.timeEnd(`[time] Just encode for '${event.data.str}'`);
    postMessage({
      ...event.data,
      result: r,
    });
  }

  if (event.data.type === 'decode') {
    LOG_PERF && console.time(`[time] Just decode for '${event.data.str}'`);
    const r = {result: null, error: null};
    try {
      r.result = Base64.decode(event.data.str);
    } catch (e) {
      r.error = e.toString();
    }
    LOG_PERF && console.timeEnd(`[time] Just decode for '${event.data.str}'`);
    postMessage({
      ...event.data,
      ...r,
    });
  }
});
