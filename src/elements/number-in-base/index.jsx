import React from 'react';
import {makeGroups, padLeft} from "../../helpers/str";

/**
 *
 * Props
 * - value
 * - base
 * - pad
 * - maxPad
 * - small
 * - big
 *
 * @param props
 * @constructor
 */
export default function NumberInBase(props) {

  let value = props.value.toString(props.base);
  let paddedValue = padLeft(value, props.pad, props.maxPad);
  let groups = makeGroups(paddedValue, props.small, props.big);

  return (<code style={{fontSize: '1.8rem'}}>
    {groups.map((group, idx) => {
      return (
        <span
          style={{marginLeft: 3}}
          key={idx}
        >
        {group.map((subgroup, idx) => {
          return (
            <span
              key={idx}
              style={{
                color: idx % 2 ? 'black' : 'rgb(86, 78, 160)',
                marginLeft: 1
              }}
            >
              {subgroup}
            </span>
          );
        })}
      </span>
      );
    })}
  </code>)
}
