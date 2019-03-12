import React from 'react';
import css from './style.css';

/**
 * props:
 * - onChange
 * - checked: boolean-
 * - full: boolean-
 * - disabled: boolean-
 *
 * @param props
 * @returns {*}
 */
function Checkbox(props) {
  return (
    <label className={css.Checkbox}>
      <input
        className={css.input}
        type="checkbox"
        checked={!!props.checked}
        disabled={props.disabled}
        onChange={e => props.onChange(e.target.value)}
      />
      <span className={css.label}>
        {props.children}
      </span>
    </label>
  );
}

export default Checkbox;
