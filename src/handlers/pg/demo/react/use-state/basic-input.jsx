import React from 'react';

function Example() {
  let [value, setValue] = React.useState('');
  return (
    <div>
      Basic input:
      <input value={value} onChange={e => setValue(e.target.value)} />
    </div>
  );
}

export default Example;
