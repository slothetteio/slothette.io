import React from 'react';
import css from './style.css';

function EqualColumnsLayout() {
  return (
    <div className={css.EqualColumnsLayout}>
      {this.props.children}
    </div>
  );
}

export default EqualColumnsLayout;
