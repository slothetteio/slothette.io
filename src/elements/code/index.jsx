import React from 'react';

function Code(props) {
  return (
    <div style={{marginTop: 10, backgroundColor: '#fafafa', padding: 5}}>
      <div>{props.label}</div>
      <hr />
      <code>
        {props.children}
      </code>
    </div>
  );
}

export default Code;
