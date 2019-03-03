
// puts the text in the clipboard
// https://github.com/zenorocha/clipboard.js/blob/a55c9ac513da6e6d01dfd6ceed9a930c596cf7e4/src/clipboard-action.js
// https://github.com/zenorocha/select/blob/b8576e518ad1a04ef71ef922ca3ebc8793a2598c/src/select.js
export default function(text) {
  let fakeElem = window.document.createElement('textarea');
  // Prevent zooming on iOS
  fakeElem.style.fontSize = '12pt';
  // Reset box model
  fakeElem.style.border = '0';
  fakeElem.style.padding = '0';
  fakeElem.style.margin = '0';
  // Move element out of screen horizontally
  fakeElem.style.position = 'absolute';
  // fakeElem.style.left = '-9999px';
  // Move element to the same position vertically
  let yPosition = window.pageYOffset || window.document.documentElement.scrollTop;
  fakeElem.style.top = `${yPosition}px`;

  fakeElem.setAttribute('readonly', '');
  fakeElem.value = text;

  window.document.body.appendChild(fakeElem);

  fakeElem.select();
  fakeElem.setSelectionRange(0, fakeElem.value.length);

  window.document.execCommand('copy');
  window.document.body.removeChild(fakeElem);
}
