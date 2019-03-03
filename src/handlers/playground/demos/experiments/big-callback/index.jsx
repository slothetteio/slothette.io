import React, { Component } from 'react';

// lesson learned: making a big operation async allows you
// to squash events since they have a chance of piling up

function big() {
  console.log('big-start');
  function fib(n) {
    if (n <= 2) {
       return n
    }
    return fib(n-1) + fib(n-2);
  }
  fib(43);
  console.log('big-end');
}

function bigAsync() {
  return new Promise((y) => {
    // TODO: what about setImmediate
    setTimeout(() => {
      big();
      y();
    })
  })
}



class BigCallbackExp extends Component {
  state = {logs: ["start"]}
  render() {
    console.log('[R] BigCallbackExp', this.props);
    return (
      <div>
        <input onChange={(e) => {
          console.log('CHANGE');
          big();
          let v = e.target.value;
          this.setState((state) => {
            console.log('STATE');
            return {
              logs: [...this.state.logs, v]
            };
          });
        }}/>
        <input onChange={(e) => {
          console.log('CHANGE');
          let v = e.target.value;
          bigAsync().then(() => {

            this.setState((state) => {
              console.log('STATE');
              return {
                logs: [...this.state.logs, v]
              };
            });
          });
        }}/>
        {this.state.logs.map((l) => {
          return (
            <div>{l}</div>
          );
        })}
      </div>
    );
  }
}

export default BigCallbackExp;
