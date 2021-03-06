import React from 'react';
import RenderCount from "../../../../../utils/render-count";



function Inner({isMemoised, passed}) {
  return (
    <div>
      <h3>{isMemoised ? 'Memoised' : 'Simple'} Inner <RenderCount /></h3>
      Passed in value is: {passed}
    </div>
  );
}

let MemoInner = React.memo(Inner);

function Example() {
  let [outer, setOuter] = React.useState('outer');
  let [passed, setPassed] = React.useState('passed');
  return (
    <div>
      <h3>Outer <RenderCount /></h3>
      Outer state to trigger outer render
      <input value={outer} onChange={e => setOuter(e.target.value)}/>
      <br />
      State passed to inner to trigger also inner render
      <input value={passed} onChange={e => setPassed(e.target.value)} />
      <Inner isMemoised={false} passed={passed} />
      <MemoInner isMemoised={true} passed={passed} />
    </div>
  );
}

export default Example;
