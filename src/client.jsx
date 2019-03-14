import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';

import App from 'app';

if (process.env.NODE_ENV === 'production') {
  ReactDOM.render(<Router><ScrollContext><App/></ScrollContext></Router>, window.document.getElementById('app'));
} else {
  // don't need the scroll fix in development since I refresh often and it keeps scrolling up
  ReactDOM.render(<Router><App/></Router>, window.document.getElementById('app'));
}
