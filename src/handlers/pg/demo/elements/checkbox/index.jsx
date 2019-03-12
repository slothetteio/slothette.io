import React from 'react';
import Checkbox from '../../../../../elements/checkbox/index.jsx';

function CheckboxElementDemo() {
  let [checked, setChecked] = React.useState(false);
  return (
    <div>
      <h2>
        CheckboxElementDemo
      </h2>
      <h3>No label</h3>
      <Checkbox />

      <h3>With Label</h3>
      <Checkbox>Some label here</Checkbox>

      <h3>checked</h3>
      <Checkbox checked>pre checked</Checkbox>

      <h3>Disabled</h3>
      <Checkbox disabled>this is disabled</Checkbox>
      <br />
      <Checkbox disabled checked>pre checked</Checkbox>

      <h3>Interactive</h3>
      <Checkbox
        checked={checked}
        onChange={v => setChecked(!checked)}
      >
        You can click this one
      </Checkbox>

    </div>
  );
}

export default CheckboxElementDemo;
