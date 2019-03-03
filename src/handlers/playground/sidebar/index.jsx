import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

import Link from '../../../wrappers/link/index.js';
import defaultProps from '../../../helpers/default-props';

class Sidebar extends Component {
  render() {
    return (
      <div {...defaultProps(this.props, {
        backgroundColor: '#fafafa'
      })}>
        Sidebar <br />

        <h3>POCs</h3>
        <ul>
          <li>
            <Link to={`${this.props.match.url}/base64-string-encode`}>Base64 String Encode</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/base64-string-decode`}>Base64 String Decode</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/base64-string-transcode`}>Base64 String Transcode</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/uri-component-transcode`}>URI Component Transcode</Link>
          </li>
        </ul>
        <h3>Experiments</h3>
        <ul>
          <li>
            <Link to={`${this.props.match.url}/big-callback`}>BigCallback</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/binary`}>Binary</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/file`}>File</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/import-function`}>Import function</Link>
          </li>

        </ul>
      </div>
    );
  }
}

export default withRouter(Sidebar);
