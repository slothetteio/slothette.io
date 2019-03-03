import React, { Component } from 'react';
import InputWithLabelElem from "../../../../../elements/input-with-label";
import { queueP } from "../../../../../helpers/queue/async-throttle";


class TwoPaneTranscodingComp extends Component {
  state = {
    firstValue: '',
    firstError: null,
    secondValue: '',
    secondError: null,
  };

  constructor(props) {
    super(props);
    this.queueForward = queueP(this.props.forwardAction, (error, result) => {
      this.setState({
        secondValue: result,
        firstError: error,
      });
    });
    this.queueBackward = queueP(this.props.backwardAction, (error, result) => {
      this.setState({
        firstValue: result,
        secondError: error,
      });
    });
  }

  onFirstChange = (e) => {
    let v = e.target.value;
    this.setState({
      firstValue: v,
    });
    this.queueForward.add(v)
  };
  onSecondChange = (e) => {
    let v = e.target.value;
    this.setState({
      secondValue: v,
    });
    this.queueBackward.add(v);
  };

  render() {
    return (
      <div>
        [TwoPaneTranscodingComp]
        {this.props.labelText}
        <InputWithLabelElem
          labelText={"a"}
          value={this.state.firstValue}
          onChange={this.onFirstChange}
        />

        <InputWithLabelElem
          labelText={"b"}
          value={this.state.secondValue}
          onChange={this.onSecondChange}
        />
        {this.state.firstError && "first error"}
        {this.state.secondError && "second error"}
      </div>
    );
  }
}

export default TwoPaneTranscodingComp;
