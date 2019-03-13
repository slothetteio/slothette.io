import React from 'react';

function CodeBlock(props) {
  return (
    <div style={{marginTop: 10, backgroundColor: '#fafafa', padding: 5, whiteSpace: 'pre-wrap'}}>
      <div>{props.label}</div>
      <hr />
      <code>
        {props.children}
      </code>
    </div>
  );
}

export default CodeBlock;
