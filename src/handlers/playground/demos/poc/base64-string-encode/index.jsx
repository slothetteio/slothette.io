import React, { Component } from 'react';
import SimpleResizableComp from '../../../poc/components/simple-resizable';
import Base64StringEncodeComp from '../../../poc/components/base64-string-encode';


class Base64StringEncodeCompDemo extends Component {
  render() {
    return (
      <div>
        <h2>Base64Encode (COMP)</h2>
        <p>Encoding a clear string to base64</p>

        <h3>No initial value</h3>
        <SimpleResizableComp >
          <Base64StringEncodeComp />
        </SimpleResizableComp>

        <h3>With initial value (some string)</h3>
        <SimpleResizableComp>
          <Base64StringEncodeComp initialDecoded="Some string"/>
        </SimpleResizableComp>
      </div>
    );
  }
}

export default Base64StringEncodeCompDemo;
