import React from 'react';


import BasicInput from './basic-input.jsx';
import BasicInputCode from '!!raw-loader!./basic-input.jsx';

import BasicCounter from './basic-counter.jsx';
import BasicCounterCode from '!!raw-loader!./basic-counter.jsx';

import MultiValues from './multi-values.jsx';
import MultiValuesCode from '!!raw-loader!./multi-values.jsx';

import ComplexValue from './complex-value.jsx';
import ComplexValueCode from '!!raw-loader!./complex-value.jsx';


import CodeBlock from "../../../../../elements/code-block";

function ReactUseState() {
  return (
    <div>
      <h2>React use state</h2>
      <h3>Basic input</h3>
      <BasicInput />
      <CodeBlock space="vertical" label="Code for basic input">
        {BasicInputCode}
      </CodeBlock>

      <h3>Basic counter</h3>
      <BasicCounter />
      <CodeBlock space="vertical" label="Code for basic counter">
        {BasicCounterCode}
      </CodeBlock>

      <h3>Multiple values</h3>
      <MultiValues />
      <CodeBlock space="vertical" label="Code for multiple values">
        {MultiValuesCode}
      </CodeBlock>

      <h3>Complex value</h3>
      <ComplexValue />
      <CodeBlock space="vertical" label="Code for complex value">
        {ComplexValueCode}
      </CodeBlock>
    </div>
  );
}

export default ReactUseState;
