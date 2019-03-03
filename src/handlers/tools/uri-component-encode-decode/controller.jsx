import React, { Component } from 'react';
import Button from "../../../elements/button";


/**
 * features:
 * - [REF: f1] if there is search in the URL then ask the user for confirmation
 *   otherwise render the Comp
 * - [REF: f2] if there is search in the history-state, use that as initial state
 * - [REF: f3] encode or decode values
 * - [REF: f4] if the default props change (via history-state search string), then take that into account
 */


function encodeJob(state) {

  let ret = {
    ...state,
    operationCounter: state.operationCounter + 1,
    lastOperation: 'encode',
    lastOperationError: null, // reset error
  };

  try {
    let encoded = '';
    if (state.encodeRfc3986) {
      encoded = encodeURIComponent(
        state.decoded
      ).replace(/[!'()*]/g, function(c) {
        return '%' + c.charCodeAt(0).toString(16);
      });
    } else {
      encoded = encodeURIComponent(state.decoded);
    }
    if (state.encodeSpacesToPluses) {
      encoded = encoded.replace(/%20/g, function(c) {
        return '+';
      });
    }

    ret.encoded = encoded;
  } catch (e) {
    ret.encoded = '';
    ret.lastOperationError = e.message;
  }
  return ret;
}

function decodeJob(state) {
  let ret = {
    ...state,
    operationCounter: state.operationCounter + 1,
    lastOperation: 'decode',
    lastOperationError: null, // reset error if any
  };

  try {
    if (state.encodeSpacesToPluses) {
      ret.decoded = decodeURIComponent(
        state.encoded
      ).replace(/\+/g, ' ');
    } else {
      ret.decoded = decodeURIComponent(state.encoded);
    }

  } catch (e) {
    ret.decoded = '';
    ret.lastOperationError = e.message;
  }
  return ret;
}


/**
 *
 * @param Comp
 * @returns {UriEncodeDecodeWidgetController}
 */
function withController(Comp) {

  class UriEncodeDecodeWidgetController extends Component {

    state = {
      oldLocationKey: null,

      decoded: '',
      encoded: '',

      encodeRfc3986: false,
      encodeEverything: false,
      encodeSpacesToPluses: false,

      lastOperation: null, // encode | decode
      lastOperationError: null,
      operationCounter: 0, // to be used as key by the widget
      askUser: false,
    };

    static getDerivedStateFromProps(props, state) {
      let newState = state;

      let { location } = props;

      if (IS_SERVER) {
        // doing nothing on the server since this function uses browser specific apis
        return null;
      }

      {
        // if we have parameters coming through the location's search
        // make sure to ask the user before doing anything else
        let search = new URLSearchParams(location.search);

        // [REF: f1] make sure askUser is false if there's not location search
        if (search.toString() === '') {
          newState.askUser = false;
        } else {
          newState.askUser = true;
        }
      }


      // [REF: f4] if locationKey changes, start using those values
      // this means the user has accepted the external params
      // or an internal url was used
      {
        if (location.key !== state.oldLocationKey &&
          location.state && location.state.search
        ) {
          let search = new URLSearchParams(location.state.search);
          newState.oldLocationKey = location.key;

          if (search.has('decoded')) {
            // TODO: get the other stuff (params)
            let decoded = search.get('decoded');
            newState.decoded = decoded;
            newState = encodeJob(newState);

          } else if (search.has('encoded')) {
            // TODO: get the other stuff (params
            let encoded = search.get('encoded');
            newState.encoded = encoded;
            newState = decodeJob(newState);
          }
        }
      }

      {
        // if there is search in the history-state, use that as initial values
        // this happens when an internal route is hapening but the component was not mounted
        // [REF: f2]
        let location = props;
        if (location.state && location.state.search) {

          let search = new URLSearchParams(location.state.search);
          let newState = this.state;

          if (search.has('decoded')) {
            // TODO: get the other stuff (params)
            let decoded = search.get('decoded');
            newState.decoded = decoded;
            newState = encodeJob(newState);
          } else if (search.has('encoded')) {
            // TODO: get the other stuff (params)
            let encoded = search.get('encoded');
            newState.encoded = encoded;
            newState = decodeJob(newState);
          }
          this.setState(newState);
        }
      }

      return newState;
    }

    onDecodedChanged = (v) => {
      this.setState(encodeJob({
        ...this.state,
        decoded: v,
      }));
    };

    onEncodedChanged = (v) => {
      this.setState(decodeJob({
        ...this.state,
        encoded: v,
      }));
    };

    setEncodeOption = (option, value) => {
      this.setState(encodeJob({
        ...this.state,
        [option]: value,
      }))
    };
    setDecodeOption = (option, value) => {
      this.setState(decodeJob({
        ...this.state,
        [option]: value,
      }))
    };

    encode = () => {
      this.setState(encodeJob(this.state));
    };
    decode = () => {
      this.setState(decodeJob(this.state));
    };

    renderAskUser() {
      return (
        <div>
          ARE YOU SURE?
          <Button
            onClick={() => {
              // move url search to state
              let { location, history } = this.props;
              history.replace({
                ...location,
                state: {search: location.search},
                search: null,
              });
            }}
          >
            yes
          </Button>
          <Button onClick={() => {
            // remove url search
            let { location, history } = this.props;
            history.replace({
              ...location,
              search: null,
              state: null,
            })
          }}>no</Button>
        </div>
      );
    }

    render() {
      // console.log('renderController', this.state);
      let { location, history, match, staticContext, ...props } = this.props;
      if (this.state.askUser) {
        return this.renderAskUser();
      }

      return (
        <Comp
          {...props}
          decodedValue={this.state.decoded}
          encodedValue={this.state.encoded}

          encodeRfc3986={this.state.encodeRfc3986}
          encodeEverything={this.state.encodeEverything}
          encodeSpacesToPluses={this.state.encodeSpacesToPluses}

          lastOperation={this.state.lastOperation}
          lastOperationKey={this.state.operationCounter}
          lastOperationError={this.state.lastOperationError}
          onDecodedChanged={this.onDecodedChanged}
          onEncodedChanged={this.onEncodedChanged}
          setEncodeOption={this.setEncodeOption}
          setDecodeOption={this.setDecodeOption}
        />
      );
    }
  }
  return UriEncodeDecodeWidgetController;
}

export default withController;
