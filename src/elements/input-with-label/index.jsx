import React, { Component } from 'react';
import TextareaElement from "../textarea";
import defaultProps from "../../helpers/default-props";
import copy from '../../helpers/copy';


/**
 * props:
 * - labelText - text
 * - showCopy - boolean - show a copy to clipboard button
 * - value - text - value for textarea
 * -- other props will go to textarea
 */
function InputWithLabelElem(props) {
  return (
    <div>
      <label style={{fontSize: "0.8em"}}>{props.labelText}</label>
      {props.showCopy &&
        <button
          onClick={() => {
            copy(props.value)
          }}
        >
          Copy
        </button>
      }
      <TextareaElement
        {...defaultProps(props)}
      />
    </div>
  );
}

export default InputWithLabelElem;
