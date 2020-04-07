import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
      drawChromeBoiAtCoords(event.clientX, event.clientY)
  }
  
  handleKeyPress = (event) => {
    if (event.key === "a") {
      console.log(resize("+"))
      resize("+")
    } else if (event.key === "s") {
      console.log(resize("-"))
      resize("-")
     }
   }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0"
        onClick={toggleCycling()}
        onKeyPress={this.handleKeyPress}
      >
      </canvas>
    )
  }
}
