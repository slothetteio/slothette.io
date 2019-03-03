import { bindP } from 'workers/worker-helpers.js';
import { makeAsyncP } from "helpers/fn";

// maps event names to actual work
let conf = {
  uriEncode: makeAsyncP(encodeURI),
  uriDecode: makeAsyncP(decodeURI),
  uriComponentEncode: makeAsyncP(encodeURIComponent),
  uriComponentDecode: makeAsyncP(decodeURIComponent),
};

bindP(conf);
