import React from 'react';

import './light.css';

import TrafficApp from '../TrafficApp';



const POSSIBLE_SIZES = [
  'small',
  'medium',
  'large',
];

const Light = ({
  isTurnedOn = false,
  color = 'red',
  size = 'medium',
  selected = (info='')=>{console.log(info)}
}) => (
  <button
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
    onClick={
     () => selected(color)
    }
  />
);


export default Light;

