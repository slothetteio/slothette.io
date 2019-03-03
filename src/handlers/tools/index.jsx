import React, { Component } from 'react';
import Link from "../../wrappers/link/index.js";

function Tools() {
  return (
    <div>
      <h2>Tools</h2>
      <h3>
        <Link to="/tools/uri-component-encode-decode">
          URI component encode decode
        </Link>
      </h3>
      <h3>
        <Link to="/tools/hex-editor">
          Hex editor
        </Link>
      </h3>
    </div>
  );
}

export default Tools;
