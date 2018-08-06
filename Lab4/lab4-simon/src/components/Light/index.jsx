import React from 'react';

import './light.css';

import TrafficApp from '../TrafficApp/index.jsx';

_addToPatternUser() {
  console.log("congratulaciones has metido un onclick");
}


const POSSIBLE_SIZES = [
  'small',
  'medium',
  'large',
];

const Light = ({
  isTurnedOn = false,
  color = 'red',
  size = 'medium',
}) => (
  <div
    className={
      `
        light
        ${ POSSIBLE_SIZES.includes(size) ? size : '' }
        ${ isTurnedOn ? 'on' : '' }
      `
    }
    style={{
      background: color,
    }}
    onclick={
      
      addToPatternUser()
    }
  />
);


export default Light;

