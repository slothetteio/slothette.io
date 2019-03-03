import React from 'react';

function Ruler(props) {
  return (
    <div
      style={{
        textAlign: 'center',
        position: 'relative',
        margin: "3px 0"
      }}
    >
      <div
        style={{
          borderBottom: '1px solid lightgray',
          position: 'absolute',
          width: '100%',
          top: "50%",
          xIndex: -1,
        }}
      />
      <span
        className={props.className}
        style={{
          background: 'hsl(0, 0%, 96%)',
          zIndex: 1,
          position: 'relative',
          display: 'inline-block',
          padding: "10px 20px"
        }}
      >
        {props.label}
      </span>

    </div>
  );
}

export default Ruler;
