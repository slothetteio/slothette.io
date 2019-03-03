import React, { Component } from 'react';
import { queueP } from "../../helpers/queue/async-throttle";

/**
 * TODO: extract this
 * @param ob {string}
 * @param cb {function}
 */
function mapObj(ob, cb) {
  let result = {};
  Object.keys(ob).forEach((k) => {
    result[k] = cb(ob[k], k);
  });
  return result;
}


function createQs(config, qCb) {
  return mapObj(config, (op, opName) => {
    return queueP(op, (error, result) => {
      qCb(opName, error, result);
    });
  });
}


function delayedJobsHoc(Comp, config) {
  let initialState = mapObj(config, (op, opName) => {
    return {
      result: '',
      error: null,
      //waiting: false
    };
  });
  return class DelayedJobsWrapper extends Component {

    /**
     * state = {
     *   _lastExecuted: null|_opNameA|_opNameB|...
     *   _opNameA: {
     *     result: ''|null,
     *     error: ''|null,
     *     //waiting: true|false
     *   }
     *   ..._opNameB: ...
     * }
     */
    state = {};

    qs = createQs(config, (opName, error, result) => {
      this.setState({
        _lastExecuted: opName,
        ...initialState, // resetTheRest
        [opName]: {
          result,
          error,
          //waiting: false
        },
      });
    });

    constructor(props) {
      super(props);
      this.state = {...initialState};
      this.state._lastExecuted = null;
    }

    componentWillUnmount() {
      mapObj(this.qs, q => q.die());
    }

    trigger = (name, arg) => {
      // this.setState((state) => {
      //   return {
      //     [name]: {
      //       ...state[name],
      //       waiting: true,
      //     },
      //   };
      // });
      this.qs[name].add(arg);
    };
    render() {
      return (
        <Comp
          _trigger={this.trigger}
          {...this.state}
          {...this.props}
        />
      );
    }
  };
}

export default delayedJobsHoc;
