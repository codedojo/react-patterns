import React from 'react';

import Counter from '../Counter';

class CounterContainer extends React.Component {
    state = {
        count: 0
    };

    increment = () => this.setState(state => ({ count: state.count + 1 }));

    decrement = () => this.setState(state => ({ count: state.count - 1 }));

    render() {
        return (
            <Counter
                count={this.state.count}
                increment={this.increment}
                decrement={this.decrement}
            />
        );
    }
}

export default CounterContainer;