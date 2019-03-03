import React, { Component, useState } from 'react';
import cx from 'classnames';

import { External, WrappedLinkWithDefaults } from "../../wrappers/link/index.js";



import Ruler from '../ruler';

import TextareaElement from '../../elements/textarea';
import Button from "../../elements/button";

import css from './style.css';
import commonCss from '../../css/common.css'


function renderRuler(props) {
  let label = '.';
  if (props.lastOperation) {
    label = props.lastOperation;
  }

  if (props.lastOperationError) {
    label = `${props.lastOperation}: (error) ${props.lastOperationError}`
  }

  return (
    <Ruler
      className={
        cx(
          css.inner,
          props.lastOperationKey && !props.lastOperationError && css._anim,
          props.lastOperationError && css._error,
          )
      }
      key={props.lastOperationKey}
      label={`[${label}]`}
    />
  );
}

function UriEncodeDecodeWidget(props) {
  return (
    <div className={commonCss.section}>

      <div className={css.subSectionTitle}>
        <span>
          <strong>Decoded</strong> string ({props.decodedValue.length})
          {' '}
          <External
            title="http://example.com/url-tester/<VALUE>?<VALUE>=value&name=<VALUE>"
            to={`http://example.com/url-tester/${props.decodedValue}?${props.decodedValue}=value&name=${props.decodedValue}`}
          >
            (Test URL)
          </External>
        </span>
      </div>

      <TextareaElement
        className={
          cx(
            css.textarea,
            props.lastOperation === 'encode' && props.lastOperationError && css._error
          )
        }
        value={props.decodedValue}
        onChange={e => {
          props.onDecodedChanged(e.target.value)
        }}
        autoCorrect="off"
        spellCheck="false"
      />

      <input
        type="checkbox"
        checked={props.encodeRfc3986}
        onChange={(e) => {
          props.setEncodeOption('encodeRfc3986', e.target.checked);
        }}
      /> Also RFC3986,  +encode: <code>! ' ( ) *</code>
      <br />

      <input
        type="checkbox"
        disabled
        title={"Not yet implemented [TODO]"}
        checked={props.encodeEverything}
        onChange={e => props.setEncodeOption('encodeEverything', e.target.checked)}
      /> Encode everything
      <br />

      <input
        type="checkbox"
        checked={props.encodeSpacesToPluses}
        onChange={e => props.setEncodeOption('encodeSpacesToPluses', e.target.checked)}
      /> Spaces to pluses
      <br />

      <Button onClick={e => props.onDecodedChanged(props.decodedValue)}>
        Encode
      </Button>
      <WrappedLinkWithDefaults
        to={{
          pathname: '/tools/uri-component-encode-decode',
          search: `?decoded=${props.decodedValue}`,
        }}
        replaceIfMatches='/tools/uri-component-encode-decode'
      >
        Permalink
      </WrappedLinkWithDefaults>

      {renderRuler(props)}

      <div className={css.subSectionTitle}>
        <span>
          <strong>Encoded</strong> string ({props.encodedValue.length})
          {' '}
          <External
            title="http://example.com/url-tester/<VALUE>?<VALUE>=value&name=<VALUE>"
            to={`http://example.com/url-tester/${props.encodedValue}?${props.encodedValue}=value&name=${props.encodedValue}`}
          >
            (Test URL)
          </External>
        </span>
      </div>
      <TextareaElement
        className={
          cx(
            css.textarea,
            props.lastOperation === 'decode' && props.lastOperationError && css._error
            )
        }
        value={props.encodedValue}
        onChange={e => {
          props.onEncodedChanged(e.target.value);
        }}
        autoCorrect="off"
        spellCheck="false"
      />
      <input
        type="checkbox"
        checked={props.encodeSpacesToPluses}
        onChange={e => props.setDecodeOption('encodeSpacesToPluses', e.target.checked)}
      /> Pluses to spaces

      <br />

      <Button onClick={e => props.onEncodedChanged(props.encodedValue)}>
        Decode
      </Button>

      <WrappedLinkWithDefaults
        to={{
          pathname: '/tools/uri-component-encode-decode',
          search: `?encoded=${props.encodedValue}`,
        }}
        replaceIfMatches='/tools/uri-component-encode-decode'
      >
        Permalink
      </WrappedLinkWithDefaults>
    </div>
  );
}

export default UriEncodeDecodeWidget;
