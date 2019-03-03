import React, { Component } from 'react'
import Sidebar from './sidebar/index.jsx';
import {Route} from "react-router-dom";

import Base64StringEncodeCompDemo from './demos/poc/base64-string-encode';
import Base64StringDecodeCompDemo from './demos/poc/base64-string-decode';
import Base64StringTranscodeCompDemo from './demos/poc/base64-string-transcode';
import UriComponentTranscodeCompDemo from './demos/poc/uri-component-transcode';

// experiments

import BigCallbackExp from './demos/experiments/big-callback';
import BinaryExp from './demos/experiments/binary';
import FileExp from './demos/experiments/file';
import ImportFunctionExp from './demos/experiments/import-function';




class Playground extends Component {
  render() {
    console.log('[R] Playground', this.props);
    return (
      <div style={{
        display: 'flex'
      }}>
        <Sidebar style={{padding: 10}} />
        <div style={{flexGrow: 1, padding: 10}}>
          <h1>Playground</h1>
          {this.props.match.isExact && <div>Please select from menu</div>}

          <Route path={`${this.props.match.path}/base64-string-encode`} component={Base64StringEncodeCompDemo} />
          <Route path={`${this.props.match.path}/base64-string-decode`} component={Base64StringDecodeCompDemo} />
          <Route path={`${this.props.match.path}/base64-string-transcode`} component={Base64StringTranscodeCompDemo} />
          <Route path={`${this.props.match.path}/uri-component-transcode`} component={UriComponentTranscodeCompDemo} />

          {/*Experiments*/}
          <Route path={`${this.props.match.path}/big-callback`} component={BigCallbackExp} />
          <Route path={`${this.props.match.path}/binary`} component={BinaryExp} />
          <Route path={`${this.props.match.path}/file`} component={FileExp} />
          <Route path={`${this.props.match.path}/import-function`} component={ImportFunctionExp} />

        </div>
      </div>
    );
  }
}

export default Playground;
