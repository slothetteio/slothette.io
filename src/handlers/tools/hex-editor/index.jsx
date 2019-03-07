import React, { useState, useRef } from 'react';
import HexEditorWidget from "../../../widgets/hex-editor";
import Button from "../../../elements/button";

import css from './style.css';

function handleDrop(e, setBuffer, setFileDetails) {
  e.preventDefault();
  console.log(e);

  // TODO: only handle files
  // TODO: handle multiple file

  let file = e.dataTransfer.files[0];

  // need a reader to get to the contents;
  let reader = new FileReader();

  reader.onload = function (e) {
    let buffer = reader.result;
    setBuffer(buffer);
    setFileDetails({filename: 'dropped.file'})
  };
  reader.readAsArrayBuffer(file);
}

function handleSample(setBuffer, setFileDetails) {
  let data = new Uint8Array(201);
  data[0] = 1;
  data[1] = 2;
  data[2] = 9;
  data[3] = 17;
  data[4] = 255;
  data[18] = 255;
  setBuffer(data.buffer);
  setFileDetails({filename: 'sample'});
}

function download(buffer, fileDetails) {

  // TODO: should remember the type and filename
  console.log('BUFF', buffer);
  let blob = new Blob([buffer], { type: 'application/octet-stream' });
  let url = URL.createObjectURL(blob);

  let a = document.createElement('a');
  a.download = fileDetails.filename;
  a.href = url;
  a.click();
  URL.revokeObjectURL(url);
}

function fromDialog(e, setBuffer, setFileDetails) {
  // need a reader to get to the contents;
  e.persist();
  console.log('--', e);
  let filename = e.target.files[0].name
  let reader = new FileReader();

  reader.onload = function (e) {
    let buffer = reader.result;
    setBuffer(buffer);
    setFileDetails({filename});
  };
  reader.readAsArrayBuffer(e.target.files[0]);
}

let initialBuffer = null;


function HexEditor() {
  let [buffer, setBuffer] = useState(initialBuffer);
  let [fileDetails, setFileDetails] = useState({filename: null});
  let [activeCell, setActiveCell] = useState({row: null, column: null, value: null});

  function clearState() {
    setBuffer(null);
    setFileDetails({filename: null});
    setActiveCell({row: null, column: null, value: null});
  }

  let uploadElement = useRef(null);
  return (
    <div>
      <h2>Hex editor</h2>
      <Button
        disabled={buffer === null}
        onClick={(e) => download(buffer, fileDetails)}
      >
        Download
      </Button> {' '}
      <Button onClick={clearState}>Delete</Button> {' '}
      <Button onClick={e => handleSample(setBuffer, setFileDetails)}>Sample</Button>

      <div className={css.contentWrapper}>
        {buffer ?
          <HexEditorWidget
            fileDetails={fileDetails}
            buffer={buffer}
            activeCell={activeCell}
            setActiveValue={(v) => {
              let data = new Uint8Array(buffer);
              let idx = 16 * activeCell.row + activeCell.column;
              data[idx] = v;
              setActiveCell({...activeCell, value: v});
              setBuffer(data.buffer);
            }}
            onCellClick={(row, column, value) => {
              if (row === activeCell.row && column === activeCell.column) {
                return;
              }
              setActiveCell({row, column, value});
            }}
          /> :
          <div
            className={css.emptyNotification}
            onDragOver={e => e.preventDefault()}
            onDrop={e => handleDrop(e, setBuffer, setFileDetails)}
            onClick={e => uploadElement.current.click()}
          >
            <input
              type="file"
              id="input"
              onChange={e => fromDialog(e, setBuffer, setFileDetails)} ref={uploadElement}
              style={{display: 'none'}}
            />
            Drop a file here or click to upload a new file
          </div>
        }
      </div>
    </div>
  );
}


export default HexEditor;
