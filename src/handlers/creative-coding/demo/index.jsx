import React from 'react';
import loadable from '@loadable/component'

let demoList = {
  'css-sine-experiment': {
    label: 'CSS sine experiment',
    component: loadable(function() {
      return import('./css-sine-experiment/index.jsx');
    }),
  },
  'css-animation-demo-1': {
    label: 'CSS animation demo 1',
    component: loadable(function() {
      return import('./css-animation-demo-1/index.jsx');
    }),
  },
};

class CreativeCodingDemo extends React.Component{
  render() {
    let props = this.props;
    let { demoId } = props;
    let demoInfo = demoList[demoId];
    let Comp = demoInfo.component;
    return (
      <div>
        <h2>
          {demoInfo.label}
        </h2>
        <div>
          <Comp />
        </div>
      </div>
    );
  }
}

export default CreativeCodingDemo;
