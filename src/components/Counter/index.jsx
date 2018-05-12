import React, { Component } from 'react';

import './index.css';

class Counter extends React.Component {
    state = {
        count: this.props.count || 0
    };

    get isControlled() {
        return this.props.count !== undefined;
    }

    getState() {
        return this.isControlled ? this.props : this.state;
    }

    change = value => {
        if (this.isControlled) {
            this.props.onChange(this.getState().count + value);
        } else {
            this.setState(state => ({ count: this.getState().count + value }));
        }
    }

    increment = () => this.change(1);

    decrement = () => this.change(-1);

    render() {
        return (
            <div className="counter">
                <button onClick={this.decrement}>-</button>
                <span>{this.getState().count}</span>
                <button onClick={this.increment}>+</button>
            </div>
        );
    }
}

export default Counter;