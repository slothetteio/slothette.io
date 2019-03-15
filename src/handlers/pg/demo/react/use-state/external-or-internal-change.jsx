import React from 'react';
import Button from "../../../../../elements/button";

function Inner({external}) {
  let [internal, setInternal] = React.useState(external);
  return (
    <div>
      <h3>Inner</h3>
      External value: {external}
      <br />
      Internal value: {internal}
      <br />
      <Button onClick={e => setInternal(internal => internal + 1)}>
        Inc Int
      </Button>
    </div>
  );
}

function Example() {
  let [external, setExternal] = React.useState(10);
  return (
    <div>
      <p>Note: this example is incomplete</p>
      External value: {external}
      <br />
      <Button
        onClick={e => setExternal(external => external + 1)}
      >
        Inc ext
      </Button>
      <Inner external={external}/>
    </div>
  );
}

export default Example;
