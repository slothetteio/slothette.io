import React, { Component } from 'react';
import uri from '../../../../../workers/uri/index.js';

import TwoPaneTranscodingComp from "../two-pane-transcoding";
import {queueP} from "../../../../../helpers/queue/async-throttle";



class UriComponentTranscodeComp extends Component {
  state = {
    isValid: true,
  };
  innerQueue = queueP(v => uri('uriComponentEncode', [v]));

  backward = (second) => {
    let rP = uri('uriComponentDecode', [second]);
    rP.then((first) => {
      this.innerQueue.add(first, (err, result) => {
        this.setState({
          isValid: result === second,
        });
      });
    });
    return rP;
  };
  render() {
    return (
      <div>
        <h1>URIComponent transcode</h1>
        <TwoPaneTranscodingComp
          labelText={"Uri Component"}
          forwardAction={v => uri('uriComponentEncode', [v])}
          backwardAction={this.backward}
        />
        {!this.state.isValid && 'EncodedValue is invalid'}
      </div>
    );
  }
}

export default UriComponentTranscodeComp;
