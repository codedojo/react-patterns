import React, { Component } from 'react';

import './index.css';

class Counter extends React.Component {
    state = {
        count: 0
    };

    increment = () => this.setState(state => ({ count: state.count + 1 }));
    decrement = () => this.setState(state => ({ count: state.count - 1 }));

    render() {
        return (
            <div className="counter">
                <button onClick={this.increment}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.decrement}>+</button>
            </div>
        );
    }
}

export default Counter;