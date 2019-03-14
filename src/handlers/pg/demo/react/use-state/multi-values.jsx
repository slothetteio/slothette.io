import React from 'react';
import Button from "../../../../../elements/button";

function Example() {
  let [counter, setCounter] = React.useState(0);
  let [delta, setDelta] = React.useState(5);
  return (
    <div>
      <p>
        Problem with this example is that when incrementing or decrementing
        we depend on multiple previous values, both the counter and the delta.
        So counter and delta should sit together un a single state object (see the Complex value example)
      </p>
      Value: {counter}
      <br />
      Adjust with:
      <input type="number" value={delta}
             onChange={e => setDelta(parseInt(e.target.value, 10))}
      />
      <br />
      <Button variant="positive"
              onClick={e => setCounter(counter => counter + delta)}
      >Increment</Button>
      {' '}
      <Button variant="negative"
              onClick={e => setCounter(counter => counter - delta)}
      >Decrement</Button>
    </div>
  );
}

export default Example;
