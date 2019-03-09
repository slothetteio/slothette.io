import React from 'react';
import {Route, Switch} from "react-router-dom";

import Link from "../../wrappers/link";

import NotFound from '../../handlers/404/index';

import ButtonElementDemo from './demo/elements/button';
import CheckboxElementDemo from './demo/elements/checkbox';

import css from './style.css';

let demos = {
  'button': ButtonElementDemo,
  'checkbox': CheckboxElementDemo,
};

function PgMain(props) {
  return (
    <div className={css.Pg}>
      <aside className={css.sidebar}>
        <ul className={css.menu}>
          <li className={css.menuSectionHeading}>Elements</li>
          <li className={css.menuItem}>
            <Link
              linkStyle="inherit"
              to="/pg/button"
            >
              Button
            </Link>
          </li>
          <li className={css.menuItem}>
            <Link
              to="/pg/checkbox"
              linkStyle="inherit"
            >
              checkbox
            </Link>
          </li>
        </ul>
      </aside>
      <div className={css.mainContent}>{props.children}</div>
    </div>
  );
}

function Pg() {
  return (
    <Switch>
      <Route path="/pg" exact render={() => {
        return (
          <PgMain>
            Select a demo from the sidebar
          </PgMain>
        );
      }} />
      <Route path="/pg/:demoId" exact render={(props) => {
        let demoId = props.match.params.demoId;
        if (Object.keys(demos).indexOf(demoId) === -1) {
          return <NotFound />;
        }
        let Comp = demos[demoId];
        return (
          <PgMain>
            <Comp />
          </PgMain>
        );
      }} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Pg;
