import React from 'react';


import Basic from './basic.jsx';
import BasicCode from '!!raw-loader!./basic.jsx';


import CodeBlock from "../../../../../elements/code-block";

function ReactMemo() {
  return (
    <div>
      <h2>React memo</h2>
      <h3>Basic </h3>
      <Basic />
      <CodeBlock space="vertical" label="Code for basic">
        {BasicCode}
      </CodeBlock>
    </div>
  );
}

export default ReactMemo;
