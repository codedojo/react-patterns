import React from 'react';

import CounterProvider from './Counter';

export default function Page() {
    return (
        <CounterProvider.Consumer>
            {counter =>
                <h1>{counter.count}</h1>
            }
        </CounterProvider.Consumer>
    );
};