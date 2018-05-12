import React, { Component } from 'react';

import './index.css';

class Counter extends React.Component {
    static Button = ({ type, increment, decrement, ...props }) => 
        <button onClick={type === 'increment' ? increment : decrement} {...props}></button>;

    
    static Count = ({ count }) =>
        <span>{count}</span>;

    state = {
        count: 0
    };

    increment = () => this.setState(state => ({ count: state.count + 1 }));

    decrement = () => this.setState(state => ({ count: state.count - 1 }));

    render() {
        return (
            <div className="counter">
                {React.Children.map(this.props.children, child =>
                    React.cloneElement(child, {
                        count: this.state.count,
                        increment: this.increment,
                        decrement: this.decrement
                    })
                )}
            </div>
        );
    }
}

export default Counter;