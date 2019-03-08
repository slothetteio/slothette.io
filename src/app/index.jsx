import React from 'react';
import { Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";

import Link, {External} from "../wrappers/link";


import Home from "../handlers/home";

import UriComponentEncodeDecode from "../handlers/tools/uri-component-encode-decode";
import HexEditor from "../handlers/tools/hex-editor";

import XBase from '../handlers/tables/x-base';

import CreativeCodingDemo from '../handlers/creative-coding/demo/index.jsx';

import NotFound from '../handlers/404';

import css from './style.css';
import '../css/base.css';

let About = function() {
  return (
    <div>
      <h1>About</h1>
      <h2>Credits</h2>
      <p>Favicon: Sloth by Jaime Serra from the Noun Project (https://thenounproject.com/term/sloth/214186)</p>
    </div>
  );
};

let demoList = {
  'css-sine-experiment': loadable(function() {
    return import('../handlers/creative-coding/demo/css-sine-experiment/index.jsx');
  }),
  'css-animation-demo-1': loadable(function() {
    return import('../handlers/creative-coding/demo/css-animation-demo-1/index.jsx');
  }),
};

let routes = [
  {
    path: '/',
    component: Home,
    cProps: { label: 'Slothette.io' }
  },
  {
    path: '/tools',
    component: () => <>
      <h2>Tools</h2>
      <h3>
        <Link to="/tools/uri-component-encode-decode">
          URI component encode decode
        </Link>
      </h3>
      <h3>
        <Link to="/tools/hex-editor">
          Hex editor
        </Link>
      </h3>
    </>,
    cProps: { label: 'tools' },
  },
  {
    path: '/tools/uri-component-encode-decode',
    component: UriComponentEncodeDecode,
    cProps: { label: 'uri component' },
  },
  {
    path: '/tools/hex-editor',
    component: HexEditor,
    cProps: { label: 'hex editor' },
  },
  {
    path: '/tables',
    component: () => <>
      <h1>Tables</h1>
      <h2>
        <Link to="/tables/x-base">
          XBase
        </Link>
      </h2>
    </>,
    cProps: { label: 'tables' },
  },
  {
    path: '/tables/x-base',
    component: XBase,
    cProps: { label: 'x-base' },
  },
  {
    path: '/creative-coding',
    component: () => <>
      <h2>Creative Coding</h2>
      <h3>
        <Link to="/creative-coding/css-sine-experiment">
          CSS sine experiment
        </Link>
      </h3>
      <h3>
        <Link to="/creative-coding/css-animation-demo-1">
          CSS animation demo 1
        </Link>
      </h3>
    </>,
    cProps: { label: 'creative coding' },
  },

  {
    path: `/creative-coding/:id(${Object.keys(demoList).join('|')})`,
    component: CreativeCodingDemo,
    url: function(routeProps) {
      return `/creative-coding/${routeProps.match.params.id}`;
    },
    cProps: {
      comp: function(routeProps) {
        return demoList[routeProps.match.params.id];
      },
      label: function(routeProps) {
        return routeProps.match.params.id.split('-').join(' ');
      },
    },
  },

  {
    path: '/about',
    component: About,
    cProps: { label: 'about' },
  },
];

function rtor(r) {
  return (
    <Route
      key={r.path}
      path={r.path}
      exact
      render={function(routeProps) {
        return <r.component {...routeProps} cProps={r.cProps} />
      }}
    />
  );
}
function rtor2(r) {
  return (
    <Route
      key={r.path}
      path={r.path}
      render={(routeProps) => {
        let label = typeof r.cProps.label === 'function' ? r.cProps.label(routeProps) : r.cProps.label;
        let url = typeof r.url === 'function' ? r.url(routeProps) : r.path;
        return (
          <>
            <Link to={url}>{label}</Link>
            {' / '}
          </>
        );
      }}
    />
  );
}

let App = function() {
  return (
    <div className={css.App}>
      <div className={css.mainContent}>

        <div className={css.breadcrumbs}>
          {' / '}
          {routes.map(rtor2)}
        </div>

        <Switch>
          {routes.map(rtor)}
          <Route component={NotFound} />
        </Switch>
      </div>
      <div className={css.footer}>
        <Link to="/">Home</Link> {' '}
        <Link to="/about">About</Link> {' '}
        <External to="https://github.com/slothetteio/slothette.io">Github</External> {' '}
      </div>
    </div>
  );
};

export default App;
