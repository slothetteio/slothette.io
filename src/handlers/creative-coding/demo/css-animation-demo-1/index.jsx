import React from 'react';
import './style-wrapper.scss';

function CssSineExperiment() {
  return (
    <div className="cssAnimationDemo1">
      <div className="container">
        {Array.apply(null, {length: 8}).map((_, i) => {
          return Array.apply(null, {length: 8}).map((_, j) => {
            return (
              <div key={`${i}-${j}`} className={`piece-${i+1}-${j+1} piece`}>
                <div className="one">
                </div>
              </div>
            );
          });
        })}
        <h2>Pure CSS</h2>
      </div>
    </div>
  );
}

export default CssSineExperiment;
