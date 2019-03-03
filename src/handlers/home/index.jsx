import React from 'react';
import Link from "../../wrappers/link/index.js";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <h3><Link to="/tools">Tools</Link></h3>
      <h4>
        <Link to="/tools/uri-component-encode-decode">
          URI component encode decode
        </Link>
      </h4>

      <h4>
        <Link to="/tools/hex-editor">
          Hex editor
        </Link>
      </h4>

      <h3><Link to="/tables">Tables</Link></h3>

      <h4>
        <Link to="/tables/x-base">
          XBase
        </Link>
      </h4>
    </div>
  );

}

export default Home;
