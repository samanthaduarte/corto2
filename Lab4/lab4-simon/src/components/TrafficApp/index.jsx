import React, { Fragment } from 'react';

import { getRndInteger } from '../../utils/random';
import TrafficLight from '../TrafficLight';


class TrafficApp extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    
    this.state = {
      currentLight: 0,
      colors: ['green', 'yellow', 'red', 'blue'],
      pattern: [],
      patternUser: [],
      counter: 0,
      counterLimit: 4,
      playsCounter: 0,
      turn: 'simon',
    };
  }

  handleClick(){
    console.log('click happend');
  }

  _changeLight() {
    if (this.state.counter < this.state.counterLimit){
      if(this.state.pattern.length <= this.state.counter){
        const {
          currentLight,
          colors,
          pattern,
          counter,
          counterLimit,
          playsCounter,
          turn,
        } = this.state;
        this.setState({
          currentLight: (currentLight + getRndInteger(0,3)) % colors.length,
          counter: counter+1,
          turn: 'player'
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
        //this._playPattern();
      }
    }
        

  }

  _addToPatternUser =  (info) => {
    this.state.patternUser.push(info);
    console.log(info);
      this.state.playsCounter++;
      console.log(this.state.playsCounter);
     
      console.log(this.state.patternUser);
      
      this._playPattern();
    if(this.state.playsCounter > this.state.counterLimit-1){
      const {
        currentLight,
        colors,
        pattern,
        counter,
        counterLimit,
        playsCounter,
        turn,
      } = this.state;
      console.log("turno de simon");      
      this.setState({
        turn: 'simon',
        counterLimit: counterLimit*2,
      })
      this._playPattern;
    }else{
      
    }
    
  }

  _compare() {
    // compara resultado y devuelve true o false
    for(let i = 0; i< this.state.pattern.length; i++){
      if(this.state.pattern[i] === this.state.patternUser[i]){
        console.log("no son iguales sorry");
      }
    }
  }
  
 
  

  
  _playPattern() {
    //for(let i=0; i<this.state.counterLimit; i++){
      if (this.state.turn === 'simon'){
        
        const timer =  setInterval(this._changeLight.bind(this), 500);
        this.setState({
          timer,
        });
      }
      if (this.state.turn === 'player'){
        //console.log("turno de player");
        this._addToPatternUser;
      }

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
          selected={this._addToPatternUser}
        />
        <button onClick={this._playPattern.bind(this)}>Empezar</button>
        <button onClick={this._stopPattern.bind(this)}>Reiniciar</button>
      
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
