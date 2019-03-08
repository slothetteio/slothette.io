import React from 'react';

class CreativeCodingDemo extends React.Component{
  render() {
    let Comp = this.props.cProps.comp(this.props);
    let label = this.props.cProps.label(this.props);
    return (
      <div>
        <h2>
          {label}
        </h2>
        <div>
          <Comp />
        </div>
      </div>
    );
  }
}

export default CreativeCodingDemo;
