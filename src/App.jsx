import React from 'react';

import Counter from './components/Counter';

export default class App extends React.Component {
    render() {
        return (
            <Counter>
                <Counter.Button type="decrement">-</Counter.Button>
                <Counter.Count />
                <Counter.Button type="increment">+</Counter.Button>
            </Counter>
        );
    }
}