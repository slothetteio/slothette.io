import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';

import App from 'app';

ReactDOM.render(<Router><ScrollContext><App /></ScrollContext></Router>, window.document.getElementById('app'));
