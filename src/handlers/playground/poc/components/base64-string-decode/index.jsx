import React, { Component } from 'react';
import InputWithLabelElem from '../../../../../elements/input-with-label';
import delayedJobHoc from '../../../../../utils/delayed-job-hoc';
import { cnd } from '../../../../../helpers/obj';
import { base64DecodeP } from '../../../../../workers/base64/index.js';

class Base64StringDecodeComp extends Component {
  state = {
    encoded: '',
  };
  constructor(props) {
    super(props);
    if (props.initialEncoded) {
      this.state.encoded = props.initialEncoded;
    }
  }

  componentDidMount() {
    this.props._trigger(this.props.initialEncoded);
  }

  onEncodedChange = (e) => {
    const v = e.target.value;
    this.setState({
      encoded: v,
    });
    console.log('CCCCC');
    this.props._trigger(v);
  };

  render() {
    console.log("TT-render", this.props);

    return (
      <div>
        Base64Decode
        <br />
        <InputWithLabelElem
          labelText="Base64 encoded"
          showCopy
          value={this.state.encoded}
          onChange={this.onEncodedChange}
          style={cnd({}, 'background', 'pink', this.props._error)}
        />

        <InputWithLabelElem
          labelText="Decoded string"
          showCopy
          disabled
          placeholder={this.props._error && this.props._error}
          value={
            this.props._result || ''
          }
        />
      </div>
    );
  }
}

export default delayedJobHoc(Base64StringDecodeComp, base64DecodeP, '');
