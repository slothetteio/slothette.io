import React from 'react';
import loadable from "@loadable/component";

import {WrappedLinkWithDefaults, External} from '../../../wrappers/link';

import commonCss from '../../../css/common.css';

let EnhancedUriEncodeDecodeWidget = loadable(() => {
  return import('./enhanced.jsx');
});

function UriComponentEncodeDecode(props) {
  return (
    <div>
      <h2>URI Encode Decode</h2>
      <div className={commonCss.subHeading}>
        Encode string so you can safely put them in URIs
      </div>

      <EnhancedUriEncodeDecodeWidget />

      <h3>Try some samples</h3>
      <ul>
        <li>
          <WrappedLinkWithDefaults
            to={{
              pathname: '/tools/uri-component-encode-decode',
              search: '?decoded=%20',
            }}
            replaceIfMatches='/tools/uri-component-encode-decode'
          >
            Encode space
          </WrappedLinkWithDefaults>
        </li>
        <li>
          <WrappedLinkWithDefaults
            to={{
              pathname: '/tools/uri-component-encode-decode',
              search: '?decoded=%25',
            }}
            replaceIfMatches='/tools/uri-component-encode-decode'
          >
            Encode %
          </WrappedLinkWithDefaults>
        </li>
      </ul>

      <div>
        <h3>Encoding</h3>
        <p>
          The base behavior (no options ticked) is based on the <External to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent">encodeURIComponent</External> and
          will encode everything that is not in the set:
        </p>
        <pre>A-Z a-z 0-9 - _ . ! ~ * ' ( )</pre>
        <p>
          <External to="https://tools.ietf.org/html/rfc2396">
            RFC2396
          </External> Has all the details
        </p>

        <p>
          The newer <External to="https://tools.ietf.org/html/rfc3986">RFC3986</External> also reserves
        </p>
        <pre>
          {"! ' ( ) *"}
        </pre>
        <p>
          But that is not implemented by the Javascript <External to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent">encodeURIComponent</External>
        </p>

        <h3>External links</h3>

        <li><External to="https://tools.ietf.org/html/rfc3986">RFC3986</External></li>
        <li><External to="https://tools.ietf.org/html/rfc5987">RFC5987</External></li>
        <li><External to="https://tc39.github.io/ecma262/#sec-encodeuricomponent-uricomponent">Ecma-262 spec</External></li>
        <li><External to="http://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#application/x-www-form-urlencoded-encoding-algorithm">x-www-form-urlencoded encoding algorithm</External></li>
      </div>
    </div>
  );
}

export default UriComponentEncodeDecode;
