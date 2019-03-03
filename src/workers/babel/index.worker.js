console.log('babel worker');

self.addEventListener('message', (event) => {
  console.log('babel message receieved', event);
});
