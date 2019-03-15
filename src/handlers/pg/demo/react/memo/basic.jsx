import React from 'react';
import { id } from '../../../../../helpers/utils';


function Inner({memoised, passed}) {
  return (
    <div>
      <h3>{memoised ? 'Memoised' : 'Simple'} Inner ({id()})</h3>
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
      <h3>Outer ({id()})</h3>
      Outer state to trigger outer render
      <input value={outer} onChange={e => setOuter(e.target.value)}/>
      <br />
      State passed to inner
      <input value={passed} onChange={e => setPassed(e.target.value)} />
      <Inner memoised={false} passed={passed} />
      <MemoInner memoised={true} passed={passed} />
    </div>
  );
}

export default Example;
