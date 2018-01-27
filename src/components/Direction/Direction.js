import React, { Component } from 'react';
import './Direction.css';

class Direction extends Component {
  render() {
    return (
      <div className="container-fluid">
      	<div className="row">
      		<div className="dir">
      			<p className="p-style fp">You will be given a random number at the start of the game.</p>
      			<p className="p-style">There are four crystals below. By clicking on a crystal you will add a specific number to your total score.</p>
      			<p className="p-style">You win the game by matching your total score to random number, you lose the game if your total score goes above the random number.</p>
				<p className="p-style">The value of each crystal is hidden from you until you click on it.</p>
      			<p className="p-style lp">Each time when the game starts, the game will change the values of each crystal.</p>
      		</div>
      	</div>       
      </div>
    );
  }
}

export default Direction;