import React from 'react';
import { idFor } from '../../helpers/utils';

function RenderCount() {
  let [count] = React.useState({f: idFor('')});
  return (
    <>
      (r:{count.f()})
    </>
  );
}

export default RenderCount;
