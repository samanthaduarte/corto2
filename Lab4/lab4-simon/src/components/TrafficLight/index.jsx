import React from 'react';

import Light from '../Light';
import './trafficlight.css';


const TrafficLight = ({
  colors = ['red', 'yellow', 'green', 'blue'],
  turnedOnLight = 'red',
  size = 'medium',
}) => (
  <div className="trafficLight">
    {
      colors.map(
        color => (
          <Light
            key={color}
            color={color}
            size={size}
            isTurnedOn={color === turnedOnLight}
          />
        )
      )
    }
    <div>hola men</div>
  </div>
);


export default TrafficLight;
