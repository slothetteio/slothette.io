import React from 'react';
import Button from "../../../../../elements/button";

function fib(n) {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

function ExampleInner({initial}) {
  // expensive call is not needed on every render
  let [result, setResult] = React.useState(() => {
    return fib(initial);
  });

  let [initialInitial] = React.useState(initial);

  return (
    <div>
      <h3>Inner</h3>
      prop: {initial}
      <br />
      remembered: {initialInitial}
      <br />
      change fib({initialInitial}):
      <input value={result}
             type="number"
             onChange={e => setResult(e.target.value)}
      />
    </div>
  );
}

function Example() {
  let [userValue, setUserValue] = React.useState(10);
  let [randomValue, setRandomValue] = React.useState(Math.random());

  return (<div>
    <h3>Wrapper</h3>
    Start from the fib of
    <input value={userValue}
           type="number"
           min="0"
           max="40"
           onChange={e => setUserValue(e.target.value)}
    />
    <Button onClick={e => {setRandomValue(Math.random())}}>
      Remount inner
    </Button>
    <br />
    <ExampleInner key={randomValue} initial={userValue} />
  </div>);
}

export default Example;
