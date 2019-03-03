import React, { Component } from 'react';

/**
 *
 * ## encoding and unicode
 * https://mathiasbynens.be/notes/javascript-encoding
 * https://mathiasbynens.be/notes/javascript-escapes
 *
 * https://github.com/mathiasbynens/jsesc
 * https://github.com/mathiasbynens/utf8.js
 * https://github.com/Daplie/unibabel-js
 *
 *
 * https://github.com/mathiasbynens/mothereff.in
 * https://mothereff.in/
 * https://mothereff.in/js-escapes#1%F0%9D%8C%86
 * https://mothereff.in/utf-8
 * https://github.com/mathiasbynens/mothereff.in/blob/master/ampersands/eff.js
 *
 * https://github.com/bestiejs/punycode.js
 *
 *
 * https://www.unicode.org/Public/emoji/11.0/emoji-test.txt
 * http://unicode.org/reports/tr51/
 *
 * https://en.wikipedia.org/wiki/UTF-16
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#Appendix.3A_Decode_a_Base64_string_to_Uint8Array_or_ArrayBuffer
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt#Polyfill
 * https://github.com/dankogai/js-base64/blob/master/base64.js
 * https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder
 *
 * ## binary
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder
 *
 * https://hacks.mozilla.org/2011/12/faster-canvas-pixel-manipulation-with-typed-arrays
 * http://www.html5rocks.com/en/tutorials/webgl/typed_arrays
 *
 *
 * https://stackoverflow.com/questions/4547609/how-do-you-get-a-string-to-a-character-array-in-javascript/34717402#34717402
 *
 * ## Stuff
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
 *
 *
 */

// var canvas = document.createElement('canvas');
// var height = 200;
// var width  = 200;
//
// canvas.width  = width;
// canvas.height = height;
//
// var ctx = canvas.getContext('2d');
//
// ctx.strokeStyle = '#090';
// ctx.beginPath();
// ctx.arc(width/2, height/2, width/2 - width/10, 0, Math.PI*2);
// ctx.stroke();
//
// canvas.toBlob(function (blob) {
//   var reader = new FileReader();
//
//   reader.onload = function () {
//     console.log(reader.result[1]);
//   }
//
//   reader.readAsBinaryString(blob);
// });


let c1 = '弾'; // one code units
let c2 = '😺'; // two code units
let c3 = '😀'; //three code units
let c4 = '🧛🏻' ; // four code units
let c5 = '👨‍🦱' ; // five code units
let c7 = '🧜🏻‍♂️'; // seven code units
let c72 = '🧜🏽‍♀️️'; // seven code units

// https://en.wikipedia.org/wiki/UTF-16
let cb1 = '$';
let cb2 = '€';
let cb3 = '𐐷';
let cb4 = '𤭢';

function arrayB() {
  // ArrayBuffer experiments
  let ab = new ArrayBuffer(10);
  console.log('My new ArrayBuffer ab has byte length: ', ab.byteLength);
  // nothing much I can do with the array buffer directly
}

function dataV() {
  // first, let's create a buffer
  let b = new ArrayBuffer(5);
  // on that buffer, create a view
  let v3 = new DataView(b);

  // what is there if no data is put?
  console.log('uninitiated value at index 1 (unsigned)', v3.getUint8(0));
  console.log('uninitiated value at index 1 (signed)', v3.getInt8(0));

  // let set an unsigned Int8 and read a signed Int8
  v3.setUint8(0,128);
  console.log('set uint250, read uint', v3.getUint8(0));
  console.log('set uint250, read int', v3.getInt8(0));

  // let set a bigger number

  v3.setInt16(0, -1);
  console.log(v3.getInt8(0), v3.getInt8(1));
  console.log(v3.getUint8(0), v3.getUint8(1));

}

function blob() {
  var debug = {hello: "world"};
  var b = new Blob([JSON.stringify(debug, null, 2)], {type : 'application/json'});
  console.log(b);

  new Response(blob).arrayBuffer().then((ab) => {
    console.log('ab', ab);
  })

}



class BinaryExp extends Component {
  render() {



    return (
      <div>
        Binary
        <hr/>
        <table border="1">
          <thead>
            <tr>
              <th>c</th>
              <th>length</th>
              <th>charAt</th>
              <th>charCodeAt</th>
              <th>codePointAt</th>
              <th>HTML</th>
              <th>encoded</th>
            </tr>
          </thead>
          <tbody>
        {[c1, c2, c3, c4, c5, c7, c72, cb1, cb2, cb3, cb4].map((c, idx) => {
          return (<tr key={idx}>
            <td>{c}</td>
            <td>{c.length}</td>
            <td>{c.charAt(0)} - {c.charAt(1)} - {c.charAt(2)} - {c.charAt(3)}</td>
            <td>{c.charCodeAt(0)} - {c.charCodeAt(1)} - {c.charCodeAt(2)} - {c.charCodeAt(3)}</td>
            <td>{c.codePointAt(0)} - {c.codePointAt(1)} - {c.codePointAt(2)} - {c.codePointAt(3)}</td>
            <td>---</td>
            <td>{encodeURIComponent(c)}</td>
          </tr>);
        })}
          </tbody>
        </table>

        <h3>ArrayBuffer</h3>
        {arrayB()} See console
        <h3>DataView</h3>
        {dataV()} See console
        <h3>Blob</h3>
        {blob()} See console

      </div>

    );
  }
}

export default BinaryExp;
