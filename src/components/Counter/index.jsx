import React from 'react';

import withCount from '../with-count';

import './index.css';

function Counter({ count, increment, decrement }) {
    return (
        <div className="counter">
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default withCount({ min: 0, max: 10 })(Counter);