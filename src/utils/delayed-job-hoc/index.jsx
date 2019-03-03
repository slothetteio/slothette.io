import React, { Component } from 'react';
import { queueP } from "../../helpers/queue/async-throttle";

/**
 * helps with taking result from an async operation.
 * holding on to arguments until it has finished running then runs it again
 *
 * returns a react component
 *
 * @param Comp react component
 * @param job fn that returns a promise of the result
 * @param defaultResult for before first render
 * @returns {{new(): DelayedJobHocWrapper, prototype: DelayedJobHocWrapper}}
 */
export default function delayedJobHoc(Comp, job, defaultResult) {

  return class DelayedJobHocWrapper extends Component {
    state = {
      result: defaultResult,
      error: null,
      // waiting: false,
    };

    q = queueP(job, (error, result) => {
      console.log('JOB DONE', error, result);
      this.setState({
        error,
        result,
        //waiting: false,
      });
    });

    componentWillUnmount() {
      this.q.die();
    }

    trigger = (arg) => {
      // this.setState({ waiting: true });
      this.q.add(arg)
    };

    render() {
      return (
        <Comp
          {...this.props}
          _error={this.state.error}
          _trigger={this.trigger}
          _result={this.state.result}
        />
      );
    }
  }
}
