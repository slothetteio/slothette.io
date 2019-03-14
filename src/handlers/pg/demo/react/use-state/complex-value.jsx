import React from 'react';
import Button from "../../../../../elements/button";

function Example() {
  let [value, setValue] = React.useState({
    add: 1,
    multiply: 2,
    result: 1
  });
  return (
    <div>
      Take: {value.result}
      <br />
      Add: <input value={value.add}
                  type="number"
                  onChange={e => setValue({...value, add: e.target.value})}/>
      <br />
      Multiply:
      <input value={value.multiply}
             type="number"
             onChange={e => setValue({...value, multiply: e.target.value})}/>
      <br />

      <Button onClick={e => setValue(
        ({add, multiply, result}) => ({
          add,
          multiply,
          result: (result + add) * multiply,
        })
      )} >
        Calculate
      </Button>
    </div>
  );
}

export default Example;
