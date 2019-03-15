import React from 'react';
import { idFor } from '../../helpers/utils';

function RenderCount() {
  let [s] = React.useState({f: idFor('')});
  return (
    <>
      (r:{s.f()})
    </>
  );
}

export default RenderCount;
