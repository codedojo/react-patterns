import React, { Component } from 'react';

import './index.css';

const CounterContext = React.createContext({
    count: 0,
    increment: () => {},
    decrement: () => {}
});

class CounterProvider extends React.Component {
    static Consumer = CounterContext.Consumer;

    state = {
        count: 0
    };

    increment = () => this.setState(state => ({ count: state.count + 1 }));
    decrement = () => this.setState(state => ({ count: state.count - 1 }));

    render() {
        return (
            <CounterContext.Provider value={{ count: this.state.count, increment: this.increment, decrement: this.decrement }}>
                {this.props.children}
            </CounterContext.Provider>
        );
    }
}

export default CounterProvider;