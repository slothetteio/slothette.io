import React from 'react';
import defaultProps from '../../helpers/default-props'
import cx from 'classnames';
import css from './style.css';

function TextareaElement(props) {
  return (
    <textarea
      {...defaultProps(props, {width: "100%"})}
      className={cx(css.Textarea, props.className)}
    />
  );
}

export default TextareaElement;
