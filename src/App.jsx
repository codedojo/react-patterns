import React from 'react';

import Counter from './components/Counter';

export default class App extends React.Component {
    sendAnalytics = () => console.log('CLICKED');

    render() {
        return (
            <Counter className="counter">
                {({ className, getCounterProps }) => {
                    const counterProps = getCounterProps({
                        onClick: this.sendAnalytics,
                        map: count => count * 2
                    });

                    return (
                        <div className={className}>
                            <button onClick={counterProps.decrement}>-</button>
                            <span>{counterProps.count}</span>
                            <button onClick={counterProps.increment}>+</button>
                        </div>
                    )
                } 
                }
            </Counter>
        );
    }
}