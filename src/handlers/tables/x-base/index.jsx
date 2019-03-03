import React, { useState } from 'react';
import cx from 'classnames';

import NumberInBase from "../../../elements/number-in-base";

import css from './style.css';

function handleChange(v, base, y, n) {
  if (v === '') {
    y(null);
    return;
  }
  if ((parseInt(v, base)).toString(base) === v) {
    y(parseInt(v, base));
    return;
  }
  n(true);
}

function XBaseTrans() {
  let [xValue, setXValue] = useState(null);
  let [error, setError] = useState(false);
  let bits = xValue === null ? 0 : xValue.toString(2).length;
  let bytes = xValue === null ? 0 : Math.ceil(xValue.toString(2).length / 8);
  return (
    <div
      style={{
        width: "100%",
        marginTop: 20,
      }}
    >
      <div>
        Value in base <span className={css.highlight}>2</span>:
        <br/>
        <input
          className={css.numberInBase}
          placeholder="binary"
          onChange={e => handleChange(e.target.value, 2, setXValue, setError)}
          value={xValue === null ? '' : xValue.toString(2)}
        />
      </div>
      <div>
        Value in base <span className={css.highlight}>10</span>:
        <br/>
        <input
          type="number"
          min={0}
          className={css.numberInBase}
          placeholder="decimal"
          onChange={e => handleChange(e.target.value, 10, setXValue, setError)}
          value={xValue === null ? '' : xValue.toString(10)}
        />
      </div>
      <div>
        Value in base <span className={css.highlight}>16</span>:
        <br/>
        <input
          className={css.numberInBase}
          placeholder="hexadecimal"
          onChange={e => handleChange(e.target.value, 16, setXValue, setError)}
          value={xValue === null ? '' : xValue.toString(16)}
        />
      </div>
      <div>
        <span className={css.highlight}>
          {bits} {' '}
        </span>
        bit{bits !== 1 && 's'} needed to represent the value
      </div>
      <div>
        <span className={css.highlight}>
          {bytes} {' '}
        </span>
        Byte{bytes !== 1 && 's'} needed to represent the value
      </div>
    </div>
  );
}

function XBase(props) {
  return (
    <div>
      <h2>
        XBase
      </h2>

      <XBaseTrans />

      <table className={css.Table}>
        <thead>
          <tr>
            <th>Bits</th>
            <th>Base 2</th>
            <th>Base 8</th>
            <th>Base 10</th>
            <th>Base 16</th>
            <th>Total values</th>
          </tr>
        </thead>
        <tbody>
        {Array.apply(null, {length: 32}).map((_, idx) => {
          let i = idx + 1;
          let squareOfTwo = Math.pow(2, i);
          let maxValue = squareOfTwo - 1
          return (
            <tr
              key={i}
              className={cx(css.row, {[css.fullByteRow]: i % 8 === 0})}
            >
              <td>{i}</td>
              <td>
                <NumberInBase
                  value={maxValue}
                  base={2}
                  pad={' '}
                  maxPad={32}
                  small={4}
                  big={8}
                />
              </td>
              <td>
                <code>{maxValue.toString(8)}</code>
              </td>
              <td>
                <NumberInBase
                  value={maxValue}
                  base={10}
                  pad={' '}
                  maxPad={12}
                  small={3}
                  big={3}
                />
              </td>
              <td>
                <NumberInBase
                  value={maxValue}
                  base={16}
                  pad={' '}
                  maxPad={8}
                  small={2}
                  big={4}
                />
              </td>
              <td>
                <NumberInBase
                  value={squareOfTwo}
                  base={10}
                  pad={' '}
                  maxPad={12}
                  small={3}
                  big={3}
                />
              </td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
}

export default XBase;
