import React from 'react';

import './index.css';

class Counter extends React.Component {
    state = {
        count: 0
    };

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    };

    render() {
        return (
            <div className="counter">
                <button onClick={this.decrement}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.increment}>+</button>
            </div>
        );
    }
}

export default Counter;