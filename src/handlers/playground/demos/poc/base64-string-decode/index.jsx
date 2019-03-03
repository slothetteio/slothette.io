import React, { Component } from 'react';
import SimpleResizableComp from '../../../poc/components/simple-resizable';
import Base64StringDecodeComp from '../../../poc/components/base64-string-decode';

const sample = "eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzX3N1cHBvcnQvYmFiZWwvZXgxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUksQ0FBQyxHQUFHO0FBQUEsU0FBTSxDQUFOO0FBQUEsQ0FBUjs7QUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLEtBQVoiLCJmaWxlIjoic3Rkb3V0Iiwic291cmNlc0NvbnRlbnQiOlsibGV0IGEgPSAoKSA9PiAyO1xuY29uc29sZS5sb2coJ+Wwj+mjvOW8vicpO1xuIl19";

class Base64StringDecodeCompDemo extends Component {
  render() {
    return (
      <div>
        <h2>Base64Decode (COMP)</h2>
        <p>Decoded a base64 to string</p>

        <h3>No initial value</h3>
        <SimpleResizableComp >
          <Base64StringDecodeComp />
        </SimpleResizableComp>

        <h3>With initial value</h3>
        <SimpleResizableComp>
          <Base64StringDecodeComp initialEncoded={sample} />
        </SimpleResizableComp>

        <h3>With initial invalid value</h3>
        <SimpleResizableComp>
          <Base64StringDecodeComp initialEncoded={"a"} />
        </SimpleResizableComp>
      </div>
    );
  }
}

export default Base64StringDecodeCompDemo;
