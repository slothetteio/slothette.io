import React from 'react';
import Button from "../../../../../elements/button";

function Example() {
  let [counter, setCounter] = React.useState(0);
  return (
    <div>
      Counter value: {counter}
      <br />
      <Button variant="positive"
              onClick={e => setCounter(counter => counter + 1)}
      >Increment</Button>
      {' '}
      <Button variant="negative"
              onClick={e => setCounter(counter => counter - 1)}
      >Decrement</Button>
    </div>
  );
}

export default Example;
