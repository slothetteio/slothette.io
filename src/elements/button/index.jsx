import React from 'react';
import cx from 'classnames';
import defaultProps from '../../helpers/default-props'
import css from './style.css';

/**
 * props:
 * - onClick
 * - children
 * - variant: falsy-, 'positive', 'negative'
 * - node: falsy-, `full`, `ghost`, `transparent`,
 * - disabled: boolean-
 *
 * @param props
 * @returns {*}
 */
function Button(props) {
  return (
    <button
      {...defaultProps(props)}
      className={cx(
        css.Button,
        {
          [css[`v-${props.variant}`]]: props.variant,
          [css[`m-${props.mode}`]]: props.mode,
        },
        props.className
      )}
      onClick={props.onClick}

    >
      <span>{props.children}</span>
    </button>
  );
}

export default Button;
