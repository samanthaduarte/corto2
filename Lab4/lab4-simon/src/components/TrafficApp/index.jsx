import React, { Fragment } from 'react';

import { getRndInteger } from '../../utils/random';
import TrafficLight from '../TrafficLight';


class TrafficApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLight: 0,
      colors: ['green', 'yellow', 'red', 'blue'],
      pattern: [],
      patternUser: [],
      counter: 0,
    };
  }

  _changeLight() {
    
    if(this.state.pattern.length <= this.state.counter){
      const {
        currentLight,
        colors,
        pattern,
        counter,
      } = this.state;
      this.setState({
        currentLight: (currentLight + getRndInteger(0,3)) % colors.length,
        counter: counter+1,
        
      })
      let el = this.state.pattern;
      el.push(currentLight);
      this.setState({list: el});
      console.log(pattern);
      //recibir usuario
      //handle event por color
      // add patternuser
      // verificar tamaño con el original
      // comparar arrays
      // SUMAR CONTADOR +1
    }

  }

  _compare() {
    // compara resultado y devuelve true o false
  }
  
  _addToPatternUser() {
    console.log("congratulaciones has metido un onclick");
  }
 

  
  _playPattern() {
    
    const timer = setInterval(this._changeLight.bind(this), 500);
    this.setState({
      timer,
    });
  }

  _stopPattern() {
    const { timer } = this.state;
    clearInterval(timer);
  }

  render() {
    const { colors, currentLight } = this.state;
    return (
      <Fragment>
        <TrafficLight
          colors={colors}
          turnedOnLight={colors[currentLight]}
        />
        <button onClick={this._playPattern.bind(this)}>Empezar</button>
        <button onClick={this._stopPattern.bind(this)}>Reiniciar!</button>
        <audio controls> <source src="beep.mp3" type="audio/mpeg"></source></audio> 
      </Fragment>
    );
  }
}


export default TrafficApp;
// let currentInterval = 0;

// for(let i = 0; i < 10; i++) {
//   const startTimeout = (
//     lInterval => setTimeout(() => {
//       // Encender la luz
//       currentInterval = lInterval;
//     }, timeout)
//   )(i);
// }
