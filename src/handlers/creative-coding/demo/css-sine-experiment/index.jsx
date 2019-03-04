import React from 'react';
import './style-wrapper.scss';

function CssSineExperiment() {
  return (
    <div className="cssSineExperiment">
      <h2> Sine attraction</h2>
      <div className="moveWrapper">
        <div className="move" />
      </div>
      <div className="staticWrapper">
        <div className="static"/>
        <div className="static"/>
        <div className="static"/>
        <div className="static"/>
        <div className="static"/>
        <div className="static"/>
        <div className="static"/>
      </div>
    </div>
  );
}

export default CssSineExperiment;
