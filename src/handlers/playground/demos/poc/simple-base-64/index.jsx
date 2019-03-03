import React, { Component } from 'react';
import SimpleBase64Comp from 'handlers/playground/poc/components/simple-base-64/index.jsx';


class SimpleBase64Demo extends Component {
  render() {
    return (
      <div>
        SimpleBase64 with no initial value:
        <SimpleBase64Comp />
        <hr />
        SimpleBase64 with a initial value
        <SimpleBase64Comp initialValue="Some initial value"/>
      </div>
    );
  }
}

export default SimpleBase64Demo;
