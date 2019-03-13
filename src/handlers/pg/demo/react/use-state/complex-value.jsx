import React from 'react';

function Example() {
  let [value, setValue] = React.useState({a: 'value A', b: 'value B'});
  return (
    <div>
      Update "a": <input value={value.a} onChange={e => setValue({...value, a: e.target.value})}/>
      <br />
      Update "b": <input value={value.b} onChange={e => setValue({...value, b: e.target.value})}/>
      <br />
      Value is: {JSON.stringify(value)}
    </div>
  );
}

export default Example;
