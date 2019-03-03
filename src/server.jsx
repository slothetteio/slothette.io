import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter }  from 'react-router-dom';

import App from './app/index.jsx';

export function render(url) {
  return ReactDOMServer.renderToString(<StaticRouter location={url}><App/></StaticRouter>);
}
