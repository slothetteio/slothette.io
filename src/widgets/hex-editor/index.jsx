import React, { useMemo, memo } from 'react';

import {areEqual, FixedSizeList} from 'react-window';

import { padLeft } from "../../helpers/str";
import NumberInBase from "../../elements/number-in-base";

import css from './style.css';
import commonCss from '../../css/common.css'

function row(props) {
  console.log('[r] row', props);
  let {style, index, activeCell, onCellClick, bytes} = props;

  let startCellIdx = index * 16;
  let endCellIdx = startCellIdx + 16;
  let rowBytes = Array.prototype.slice.call(bytes, startCellIdx, endCellIdx);
  let rowCells = rowBytes.map((byte, byteIndex) => {
    let isActive = byteIndex === activeCell.column &&
      index === activeCell.row;
    return (
      <code
        key={byteIndex}
        style={{
          color: byteIndex % 2 && 'rgb(86, 78, 160)',
          marginLeft: byteIndex === 0 ? 40 : 20,
          border: isActive ? '1px solid blue' : '1px solid transparent'
        }}
        onClick={() => onCellClick(index, byteIndex, byte)}
      >
        {padLeft(byte.toString(16), '0', 2)}
      </code>
    );
  });
  return (
    <div style={{
      ...style,
      backgroundColor: index % 2 && 'hsla(0, 0%, 83%, 0.36)',
      display: 'flex',
      alignItems: 'center',
    }}>
      <NumberInBase
        value={index * 16}
        base={16}
        pad={'0'}
        maxPad={8}
        small={2}
        big={4}
      />
      {rowCells}
    </div>
  );
}

function RowBuilder(props) {
  let {data, style, index} = props;
  let {bytes, activeCell, onCellClick} = data;
  console.log('[R] RowBuilder', props);
  return useMemo(
    () => row({style, index, activeCell, bytes, onCellClick}),
    [index, index === activeCell.row ? {} : 1]);
}

let RowBuilderMemo = memo(RowBuilder, (prevProps, nextProps) => {
  // TODO: cater for the case when active cell changes but does not affect this row;
  // currently the row renders anyways
  return areEqual(prevProps, nextProps)
});

/**
 * Props:
 * - buffer
 * - filename
 * - activeCell: {row, column, value}
 * - setActiveValue(int)
 */
function HexEditorWidget(props) {
  console.log('[R] widget', props);

  let buffer = props.buffer;

  if (!buffer) {
    return (<div>
      No data :(
    </div>)
  }

  let length = buffer.byteLength;
  let totalRows = Math.ceil(length / 16);

  // get the bytes out of the buffer
  let bytes = new Uint8Array(buffer);

  return (
    <div>
      <div className={css.topBar}>
        {props.fileDetails.filename} ({length} Bytes) {' '}

        <br />
        {props.activeCell.value === null ?
          "No selection" :
          <>
            0x{ padLeft((props.activeCell.row * 16 + props.activeCell.column).toString(16), '0', 8) }
            {' : '}
            <input
              type="number"
              min="0"
              max="255"
              value={props.activeCell.value || 0}
              onChange={e => props.setActiveValue(parseInt(e.target.value, 10))}
            />
          </>
        }
      </div>

      <div className={commonCss.section}>
        <FixedSizeList
          height={300}
          itemCount={totalRows}
          itemSize={30}
          itemData={{
            bytes,
            activeCell: props.activeCell,
            onCellClick: props.onCellClick,
          }}
        >
          {RowBuilderMemo}
        </FixedSizeList>
      </div>
    </div>
  );
}

export default HexEditorWidget;
