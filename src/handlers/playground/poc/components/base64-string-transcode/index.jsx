import React, { Component } from 'react';
import InputWithLabelElem from '../../../../../elements/input-with-label';
import delayedJobsHoc from '../../../../../utils/delayed-jobs-hoc';
import { cnd } from '../../../../../helpers/obj';
import { base64DecodeP, base64EncodeP } from '../../../../../workers/base64/index.js';

/**
 * You can't send both initialEncoded and initialDecoded to this
 *
 * TODO: should not type on the other textbox if and operation is in progress
 */
class Base64StringTranscodeComp extends Component {
  state = {
    decoded: '',
    encoded: '',
    deriveIgnore: true,
  };

  constructor(props) {
    super(props);
    if (props.initialEncoded) {
      this.state.encoded = props.initialEncoded;
      this.props._trigger('_decode', props.initialEncoded);
    }
    if (props.initialDecoded) {
      this.state.decoded = props.initialDecoded;
      this.props._trigger('_encode', props.initialDecoded);
    }
  }
  componentDidMount() {
    if (props.initialEncoded) {
      this.props._trigger('_decode', props.initialEncoded);
    }
    if (props.initialDecoded) {
      this.props._trigger('_encode', props.initialDecoded);
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (state.deriveIgnore) {
      return {deriveIgnore: false};
    }
    if (props._lastExecuted === '_encode') {
      return {encoded: props._encode.result || ''};
    }
    if (props._lastExecuted === '_decode') {
      return {decoded: props._decode.result || ''};
    }
    return null;
  }


  onEncodedChange = (e) => {
    console.log('zz Tr _d');
    const v = e.target.value;
    this.setState({
      encoded: v,
      deriveIgnore: true,
    });
    this.props._trigger('_decode', v);
  };

  onDecodedChange = (e) => {
    console.log('zz Tr _d');
    const v = e.target.value;
    this.setState({
      decoded: v,
      deriveIgnore: true,
    });
    this.props._trigger('_encode', v);
  };

  render() {
    console.log("TT-render", this.props);

    return (
      <div>
        Base64Transcode
        <br />

        <InputWithLabelElem
          labelText="Plain string"
          showCopy
          placeholder={this.props._decode.error}
          value={this.state.decoded}
          onChange={this.onDecodedChange}
          style={cnd(
            cnd({}, 'background', 'lightgreen', this.props._lastExecuted === '_encode'),
            'background', 'aliceblue', this.props._lastExecuted === '_decode' && !this.props._decode.error)}
        />
        {this.props._lastExecuted || 'Type something'}
        <InputWithLabelElem
          labelText="Base64 encoded"
          showCopy
          placeholder={this.props._decode.error}
          value={this.state.encoded}
          onChange={this.onEncodedChange}
          style={
            // TODO: rearrange args to compose the calls
            cnd(
              cnd(
                cnd({}, 'background', 'lightgreen', this.props._lastExecuted === '_decode'),
                'background', 'aliceblue', this.props._lastExecuted === '_encode'),
              'background', 'pink', this.props._decode.error
            )
          }
        />
      </div>
    );
  }
}

export default delayedJobsHoc(
  Base64StringTranscodeComp,
  {
    _encode: base64EncodeP,
    _decode: base64DecodeP
  },
);
