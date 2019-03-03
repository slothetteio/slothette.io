import React, { Component } from 'react';

/**
 * https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsBinaryString
 * https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#Example_Using_object_URLs_to_display_images
 */


function handleDrop(e) {
  e.persist();
  e.preventDefault();
  e.stopPropagation();
  console.log(e);
  debugger;
}

function handleOnDragOver(e) {
  e.preventDefault();
}

class FileExp extends Component {
  render() {
    return (
      <div>
        <h1>File exp</h1>

        <h2>DROP</h2>

        <div style={{border: "1px solid red"}} onDrop={handleDrop} onDragOver={handleOnDragOver}>
          <br />
          DROP HERE
          <br />
        </div>

      </div>
    );
  }
}

export default FileExp;
