import React from 'react';

import Time from './components/Time';

export default class App extends React.Component {
    state = {
        running: false,
        elapsed: 0,
        lastTick: 0
    };

    componentDidMount() {
        this.interval = setInterval(this.tick, 100);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick = () => {
        if (this.state.running) {
            const now = Date.now();
            const diff = now - this.state.lastTick;

            this.setState({
                elapsed: this.state.elapsed + diff,
                lastTick: now
            });
        }
    }

    handleStart = () => {
        this.setState({
            running: true,
            lastTick: Date.now()
        });
    }

    handlePause = () => {
        this.setState({ running: false });
    }

    handleStop = () => {
        this.setState({
            running: false,
            elapsed: 0,
            lastTick: 0
        });
    }

    render() {
        return (
            <div className="stopwatch">
                <Time value={this.state.elapsed} />

                <div className="stopwatch-controls">
                    {this.state.running ?
                        <button className="material-icons" onClick={this.handlePause}>pause</button>
                        :
                        <button className="material-icons" onClick={this.handleStart}>play_arrow</button>
                    }
                    
                    <button className="material-icons" onClick={this.handleStop}>stop</button>
                </div>
            </div>
        );
    }
}