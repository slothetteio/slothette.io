import React from 'react';

export default function YesNoStatus(props) {
  return (
    <span>
      <span
        style={{
          textDecoration: !props.status && 'line-through',
          color: !props.status ? 'gray' : 'hsl(18, 72%, 52%)',
        }}
      >
        yes
      </span>
      /
      <span
        style={{
          textDecoration: props.status && 'line-through',
          color: props.status ? 'gray' : 'hsl(18, 72%, 52%)',
        }}
      >
        no
      </span>
    </span>
  );
}
