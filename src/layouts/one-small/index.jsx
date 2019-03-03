import React from 'react';

import cx from 'classnames';
import css from './style.css';

function OneSmallLayout() {
  let [left, right] = this.props.children;
  return (
    <div
      className={css.OneSmallLayout}
      style={this.props.style}
    >
      {React.cloneElement(left, {
        className: cx(this.props.small === 'left' ? css.small : css.big, css.left, left.props.className),
      })}
      {React.cloneElement(right, {
        className: cx(this.props.small === 'right' ? css.small : css.big, css.right, right.props.className),
      })}
    </div>
  );
}

export default OneSmallLayout;
