import React, { Component } from "react";
import './Die.css';


class Die extends Component {
    constructor(props) {
        super(props)
        this.state = { isRolling: false };
    }
    render() {
        const face = `fas fa-dice-${this.props.num}`;
        return (
            <div>
                <div className={this.props.isRolling ? 'isRolling' : ''}>
                    <i className={`Die ${face}`}></i>
                </div>
            </div>
        )
    }
}
export default Die;
