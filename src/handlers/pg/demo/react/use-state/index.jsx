import React from 'react';


import BasicCounter from './basic-counter.jsx';
import BasicCounterCode from '!!raw-loader!./basic-counter.jsx';

import MultiValues from './multi-values.jsx';
import MultiValuesCode from '!!raw-loader!./multi-values.jsx';

import ComplexValue from './complex-value.jsx';
import ComplexValueCode from '!!raw-loader!./complex-value.jsx';


import Code from "../../../../../elements/code";

function ReactUseState() {
  return (
    <div>
      <h2>React use state</h2>
      <h3>Basic counter</h3>
      <BasicCounter />
      <Code space="vertical" label="Code for basic counter">
        {BasicCounterCode}
      </Code>

      <h3>Multiple values</h3>
      <MultiValues />
      <Code space="vertical" label="Code for multiple values">
        {MultiValuesCode}
      </Code>

      <h3>Complex value</h3>
      <ComplexValue />
      <Code space="vertical" label="Code for complex value">
        {ComplexValueCode}
      </Code>
    </div>
  );
}

export default ReactUseState;
