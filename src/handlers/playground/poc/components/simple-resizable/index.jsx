import React, { Component } from 'react';

class SimpleResizeComp extends Component {
  state = {width: 400};
  constructor (props){
    super(props);
    if (props.width) {
      this.state.width = props.width;
    }
  }
  render() {
    return (
      <div>
        <input
          type="range"
          value={this.state.width}
          min="200"
          max="800"
          onChange={e => this.setState({width: e.target.value})}
        />{this.state.width}
        <div style={{
          width: this.state.width + 'px',
          borderLeft: "1px solid red",
          borderRight: "1px solid red",
          padding: "10px 0"
        }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default SimpleResizeComp;
