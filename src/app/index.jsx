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


let About = function() {
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
    id: 'home',
    path: '/',
    component: Home,
    label: 'Slothette.io',
  },
  {
    id: 'tools',
    path: '/tools',
    component: Tools,
    label: 'tools',
  },
  {
    id: 'uri-component',
    path: '/tools/uri-component-encode-decode',
    component: UriComponentEncodeDecode,
    label: 'uri component',
  },
  {
    id: 'hex-editor',
    path: '/tools/hex-editor',
    component: HexEditor,
    label: 'hex editor',
  },
  {
    id: 'tables',
    path: '/tables',
    component: Tables,
    label: 'tables',
  },
  {
    id: 'x-base',
    path: '/tables/x-base',
    component: XBase,
    label: 'x-base',
  },

  {
    id: 'creative-coding',
    path: '/creative-coding',
    component: CreativeCoding,
    label: 'creative coding',
  },

  {
    id: 'creative-coding-css-sine-experiment',
    path: '/creative-coding/css-sine-experiment',
    component: () => <CreativeCodingDemo demoId="css-sine-experiment" />,
    label: 'css sine experiment',
  },

  {
    id: 'creative-coding-css-animation-demo-1',
    path: '/creative-coding/css-animation-demo-1',
    component: () => <CreativeCodingDemo demoId="css-animation-demo-1" />,
    label: 'css animation demo',
  },

  {
    id: 'about',
    path: '/about',
    component: About,
    label: 'about',
  },
];

let App = function() {
  return (
    <div className={css.App}>
      <div className={css.mainContent}>

        <div className={css.breadcrumbs}>
          {' / '}
          {/*TODO: leave the previous trail here if going back*/}
          {routes.map((r) => {
            return (
              <Route
                key={r.id}
                path={r.path}
                render={() => {
                  return (
                    <>
                      <Link to={r.path}>{r.label}</Link>
                      {' / '}
                    </>
                  );
                }}
              />
            );
          })}
        </div>

        <Switch>
          {routes.map((r) => {
            return (<Route key={r.id} path={r.path} exact component={r.component} />);
          })}
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
