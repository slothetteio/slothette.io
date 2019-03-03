import React, { Component } from 'react';

class ImportFunctionExp extends Component {
  render() {
    return (
      <div>
        <h3>ImportFunctionExp</h3>
        <button
          onClick={() => {
            import(/* webpackChunkName: "asd" */ './a.js').then((r) => {
              r.default();
              console.log('LOADED', r);
            })
          }}
        >
          Load a.js</button>
      </div>
    );
  }
}

export default ImportFunctionExp;
