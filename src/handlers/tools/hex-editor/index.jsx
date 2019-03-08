import React from 'react';
import loadable from "@loadable/component";





let Editor = loadable(() => {
  return import('./editor.jsx');
});

function HexEditor(props) {
  return (
    <div>
      <h2>Hex editor</h2>
      <Editor />
    </div>
  );
}

export default HexEditor;
