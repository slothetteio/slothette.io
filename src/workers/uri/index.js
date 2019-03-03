import { runP } from 'workers/worker-helpers.js';
import uriWorker from 'workers/uri/uri.worker.js';

export default runP(uriWorker, ['uriEncode', 'uriDecode', 'uriComponentEncode', 'uriComponentDecode']);
