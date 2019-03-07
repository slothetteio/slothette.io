import React, { Component } from 'react';

import { Route, Switch } from "react-router-dom";

import Link, {External} from "../wrappers/link";

// handlers
import Home from "../handlers/home";

import Tools from "../handlers/tools";

import UriComponentEncodeDecode from "../handlers/tools/uri-component-encode-decode";
import HexEditor from "../handlers/tools/hex-editor";

import Tables from "../handlers/tables";
import XBase from '../handlers/tables/x-base';

import CreativeCoding from '../handlers/creative-coding';
import CreativeCodingDemo from '../handlers/creative-coding/demo/index.jsx';

import NotFound from '../handlers/404';

import css from './style.css';
import '../css/base.css';


let About = function(props) {
  return (
    <div>
      <h1>About</h1>
      <h2>Credits</h2>
      <p>Favicon: Sloth by Jaime Serra from the Noun Project (https://thenounproject.com/term/sloth/214186)</p>
    </div>
  );
};

let routes = [
  {
    path: '/',
    component: Home,
    cProps: { label: 'Slothette.io' }
  },
  {
    path: '/tools',
    component: Tools,
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
    component: Tables,
    cProps: { label: 'tables' },
  },
  {
    path: '/tables/x-base',
    component: XBase,
    cProps: { label: 'x-base' },
  },

  {
    path: '/creative-coding',
    component: CreativeCoding,
    cProps: { label: 'creative coding' },
  },

  {
    path: '/creative-coding/css-sine-experiment',
    component: CreativeCodingDemo,
    cProps: {
      label: 'css sine experiment',
      demoId: 'css-sine-experiment',
    },
  },

  {
    path: '/creative-coding/css-animation-demo-1',
    component: CreativeCodingDemo,
    cProps: {
      label: 'css animation demo',
      demoId: 'css-animation-demo-1',
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
      render={() => {
        return (
          <>
            <Link to={r.path}>{r.cProps.label}</Link>
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
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <External to="https://github.com/slothetteio/slothette.io">Github</External>
      </div>
    </div>
  );
};

export default App;
