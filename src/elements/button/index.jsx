import React from 'react';
import defaultProps from '../../helpers/default-props'
import css from './style.css';

function Button(props) {
  return (
    <button
      {...defaultProps(props)}
      className={`${css.Button} ${props.className}`}
      onClick={props.onClick}

    >
      {props.children}
    </button>
  );
}

export default Button;
