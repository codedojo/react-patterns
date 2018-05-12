import React from 'react';

import CounterProvider from './components/Counter';
import Page from './components/Page';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <CounterProvider>
                    <Page />

                    <CounterProvider.Consumer>
                        {counter =>
                            <div className="counter">
                                <button onClick={counter.decrement}>-</button>
                                <span>{counter.count}</span>
                                <button onClick={counter.increment}>+</button>
                            </div>
                        }
                    </CounterProvider.Consumer>
                </CounterProvider>
            </div>
        );
    }
}