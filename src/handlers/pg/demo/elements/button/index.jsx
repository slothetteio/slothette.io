import React from 'react';
import Button from '../../../../../elements/button/index.jsx';
import css from './style.css';

function B(props){
  return (<span className={css.buttonForDemo}>
    {props.children}
  </span>);
}

function ButtonElementDemo() {
  return (
    <div>
      <h2>Demo for the button element</h2>
      <h3>Variants</h3>
      <div>
        <B>
          <Button>Normal</Button>
        </B>
        <B>
          <Button variant="positive">Positive</Button>
        </B>
        <B>
          <Button variant="negative">Negative</Button>
        </B>
      </div>

      <h3>mode: full</h3>
      <div>
        <B>
          <Button mode="full">Normal</Button>
        </B>
        <B>
          <Button mode="full" variant="positive">Positive</Button>
        </B>
        <B>
          <Button mode="full" variant="negative">Negative</Button>
        </B>
      </div>

      <h3>mode: ghost</h3>
      <div>
        <B>
          <Button mode="ghost">Normal</Button>
        </B>
        <B>
          <Button mode="ghost" variant="positive">Positive</Button>
        </B>
        <B>
          <Button mode="ghost" variant="negative">Negative</Button>
        </B>
      </div>


      <h3>mode: transparent</h3>
      <div>
        <B>
          <Button mode="transparent">Normal</Button>
        </B>
        <B>
          <Button mode="transparent" variant="positive">Positive</Button>
        </B>
        <B>
          <Button mode="transparent" variant="negative">Negative</Button>
        </B>
      </div>


      <h2>Disabled</h2>
      <h2>ButtonElementDemo</h2>
      <h3>Variants</h3>
      <div>
        <B>
          <Button disabled>Normal</Button>
        </B>
        <B>
          <Button disabled variant="positive">Positive</Button>
        </B>
        <B>
          <Button disabled variant="negative">Negative</Button>
        </B>
      </div>

      <h3>Full</h3>
      <div>
        <B>
          <Button disabled mode="full">Normal</Button>
        </B>
        <B>
          <Button disabled mode="full" variant="positive">Positive</Button>
        </B>
        <B>
          <Button disabled mode="full" variant="negative">Negative</Button>
        </B>
      </div>

      <h3>Ghost</h3>
      <div>
        <B>
          <Button disabled mode="ghost">Normal</Button>
        </B>
        <B>
          <Button disabled mode="ghost" variant="positive">Positive</Button>
        </B>
        <B>
          <Button disabled mode="ghost" variant="negative">Negative</Button>
        </B>
      </div>


      <h3>Transparent</h3>
      <div>
        <B>
          <Button disabled mode="transparent">Normal</Button>
        </B>
        <B>
          <Button disabled mode="transparent" variant="positive">Positive</Button>
        </B>
        <B>
          <Button disabled mode="transparent" variant="negative">Negative</Button>
        </B>
      </div>

    </div>
  );
}

export default ButtonElementDemo;
