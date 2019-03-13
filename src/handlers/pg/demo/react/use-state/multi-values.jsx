import React from 'react';
import Button from "../../../../../elements/button";

function Example() {
  let [counter, setCounter] = React.useState(0);
  let [delta, setDelta] = React.useState(5);
  return (
    <div>
      Value: {counter}
      <br />
      Adjust with:
      <input type="number" value={delta}
             onChange={e => setDelta(parseInt(e.target.value, 10))}
      />
      <br />
      <Button variant="positive"
              onClick={e => setCounter(counter + delta)}
      >Increment</Button>
      {' '}
      <Button variant="negative"
              onClick={(e) => setCounter(counter - delta)}
      >Decrement</Button>
    </div>
  );
}

export default Example;
