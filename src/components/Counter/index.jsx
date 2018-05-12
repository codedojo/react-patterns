import React, { Component } from 'react';

import './index.css';

class Counter extends React.Component {
    state = {
        count: 0
    };

    increment = () => this.setState(state => ({ count: state.count + 1 }));
    decrement = () => this.setState(state => ({ count: state.count - 1 }));

    render() {
        return this.props.children({
            className: `${this.state.count > 0 ? 'started' : 'not-started'} ${this.props.className}`,
            getCounterProps: ({ onClick, map }) => ({
                count: map(this.state.count),
                increment: () => {
                    this.increment();
                    onClick();
                },
                decrement: () => {
                    this.decrement();
                    onClick();
                }
            })
        });
    }
}

export default Counter;