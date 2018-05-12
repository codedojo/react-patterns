import React from 'react';

import Counter from './components/Counter';

export default class App extends React.Component {
    state = {
        count: 1
    }

    handleChange = count =>
        this.setState(
            state => ({ count }),
            () => console.log('APP', this.state)
        );

    render() {
        return (
            <React.Fragment>
                <Counter onChange={this.handleChange} />

                <Counter
                    count={this.state.count}
                    onChange={this.handleChange}
                />
            </React.Fragment>
        );
    }
}