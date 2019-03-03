import React from 'react';
import { Link, withRouter } from "react-router-dom";
import css from './style.css'

function WrappedLink(props) {
  return (
    <Link
      {...props}
      className={css.Link}
    />
  );
}

// TODO: gfx marking an external link
function External({to, ...props}) {
  return (
    <a
      {...props}
      href={to}
      className={css.Link}
    />
  );
}

let WrappedLinkWithDefaults = withRouter(
  function WrappedLinkWithDefault({match, location, history, replaceIfMatches, staticContext, ...props}) {
    let shouldReplace = location.pathname === replaceIfMatches;
    // take the search string and put it the state
    if (shouldReplace) {
      props.to.state = {
        ...props.to.state,
        search: props.to.search,
      };
      props.onClick = e => {
        let isClean = !(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
        if (isClean) {
          e.preventDefault();
          history.replace({
            ...props.to,
            search: null,
          });
        }
      }
    }

    return (
      <Link
        {...props}
        replace={shouldReplace}
        className={css.Link}
      />
    );
  },
);

export { WrappedLinkWithDefaults, External };

export default WrappedLink;
