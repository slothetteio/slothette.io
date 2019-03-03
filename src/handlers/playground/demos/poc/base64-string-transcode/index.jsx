import React, { Component } from 'react';
import Base64StringTranscodeComp from 'handlers/playground/poc/components/base64-string-transcode';
import SimpleResizableComp from "../../../poc/components/simple-resizable";


const sample = "eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzX3N1cHBvcnQvYmFiZWwvZXgxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUksQ0FBQyxHQUFHO0FBQUEsU0FBTSxDQUFOO0FBQUEsQ0FBUjs7QUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLEtBQVoiLCJmaWxlIjoic3Rkb3V0Iiwic291cmNlc0NvbnRlbnQiOlsibGV0IGEgPSAoKSA9PiAyO1xuY29uc29sZS5sb2coJ+Wwj+mjvOW8vicpO1xuIl19";

class Base64StringTranscodeCompDemo extends Component {
  render() {
    return (
      <div>
        <h2>Base 64 string transcode</h2>
        <h3>Simple</h3>
        <SimpleResizableComp>
          <Base64StringTranscodeComp />
        </SimpleResizableComp>
        <h2>With initial decoded string</h2>
        <SimpleResizableComp>
          <Base64StringTranscodeComp
            initialDecoded="string"
          />
        </SimpleResizableComp>
        <h3>With initial encoded string</h3>
        <SimpleResizableComp>
          <Base64StringTranscodeComp
            initialEncoded={sample}
          />
        </SimpleResizableComp>
        <h3>With initial encoded invalid string</h3>
        <SimpleResizableComp>
          <Base64StringTranscodeComp
            initialEncoded="a"
          />
        </SimpleResizableComp>
      </div>
    );
  }
}

export default Base64StringTranscodeCompDemo;
