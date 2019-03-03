import React from 'react';

function InputElement(props){
  return (
    <input
      type="text"
      onChange={props.onChange}
      value={props.value}
    />
  );
}

export default InputElement;
