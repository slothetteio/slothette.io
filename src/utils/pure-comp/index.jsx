import React, { PureComponent } from 'react';


// A component that will not rerender it's childen
class PureCompUtil extends PureComponent {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

export default PureCompUtil;
