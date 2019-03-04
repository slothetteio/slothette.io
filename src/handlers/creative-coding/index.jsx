import React from 'react';
import Link from "../../wrappers/link/index.js";

function CreativeCoding() {
  return (
    <>
      <h2>Creative Coding</h2>
      <h3>
        <Link to="/creative-coding/css-sine-experiment">
          CSS sine experiment
        </Link>
      </h3>
      <h3>
        <Link to="/creative-coding/css-animation-demo-1">
          CSS animation demo 1
        </Link>
      </h3>
    </>

  );
}

export default CreativeCoding;
