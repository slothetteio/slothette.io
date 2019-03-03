import React  from 'react';
import PureCompUtil from 'utils/pure-comp';

export default function pureFuncUtil(jsx) {
  return (
    <PureCompUtil>
      {jsx}
    </PureCompUtil>
  );
}
