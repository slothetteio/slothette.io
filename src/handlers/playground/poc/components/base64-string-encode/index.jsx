import React, { Component } from 'react';
import InputWithLabelElem from '../../../../../elements/input-with-label';
import delayedJobHoc from '../../../../../utils/delayed-job-hoc';
import { base64EncodeP } from '../../../../../workers/base64/index.js';

class Base64StringEncodeComp extends Component {
  state = {
    decoded: '',
  };

  constructor(props) {
    super(props);
    if (props.initialDecoded) {
      this.state.decoded = props.initialDecoded;
    }
  }
  componentDidMount() {
    if (this.props.initialDecoded) {
      this.props._trigger(this.props.initialDecoded);
    }
  }

  onDecodedChange = (e) => {
    const v = e.target.value;
    this.setState({
      decoded: v,
    });
    this.props._trigger(v);
  };

  render() {
    return (
      <div>
        Base64Encode
        <br />
        <InputWithLabelElem
          labelText="Text in clear"
          showCopy
          value={this.state.decoded}
          onChange={this.onDecodedChange}
        />

        <InputWithLabelElem
          labelText="Base64 encoded"
          showCopy
          disabled
          value={this.props._result}
        />
      </div>
    );
  }
}

export default delayedJobHoc(Base64StringEncodeComp, base64EncodeP, '');
