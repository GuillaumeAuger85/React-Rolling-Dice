import React, { Component } from 'react';
import './RollDice.css'
import Die from './Die.js';

const number = ['one', 'two', 'three', 'four', 'five', 'six'];
const dieArr = [];


class RollDice extends Component {
    static defaultProps = {
        diceNumber: 3
    }
    constructor(props) {
        super(props);
        const obj = { isRolling: false };
        const createObj = () => {
            for (let i = 0; i < this.props.diceNumber; i++) {
                obj[`rand${i}`] = number[Math.floor(Math.random() * 6)];
            }
            return obj
        }
        createObj();
        this.state = obj;
        this.roll = this.roll.bind(this);
    }
    roll() {
        let newObj = { isRolling: true };
        let intervalID =setInterval(()=>{
        for (let i = 0; i < this.props.diceNumber; i++) {
            newObj[`rand${i}`] = number[Math.floor(Math.random() * 6)];
        }
        this.setState(newObj);
       },100)
        setTimeout(() => {
            clearInterval(intervalID);
            this.setState({isRolling:false});
            ;
          }, "1000");
    }
    render() {
        const dienum = this.props.diceNumber;
        for (let i = 0; i < dienum; i++) {
            dieArr[i] = `rand${i}`;
        }
        const Dice = dieArr.map(die => {
            const face = this.state[dieArr[dieArr.indexOf(die)]];
            return <Die
                num={face}
                isRolling = {this.state.isRolling} />
        })
        return (
            <div className='RollDice'>
                <div className='RollDice-deck'>
                    {Dice}
                </div>
                <button onClick={this.roll} className='RollDice-Button' disabled={this.state.isRolling}>{this.state.isRolling? 'isRolling...':'Roll Dice!'}</button>
            </div>
        )
    }
}


export default RollDice



