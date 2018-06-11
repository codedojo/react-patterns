import React from 'react';

import './index.css';

class Time extends React.Component {
    format(milliseconds) {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        return {
            minutes: minutes > 9 ? minutes : '0' + minutes,
            seconds: seconds > 9 ? seconds : '0' + seconds
        };
    }

    state = {
        foo: 42
    };

    shouldComponentUpdate()

    render() {
        const { minutes, seconds } = this.format(this.props.value);
        console.log(this.state);

        return (
            <div className="time">
                <span className="time__minutes">{minutes}</span>
                :
                <span className="time__seconds">{seconds}</span>
            </div>
        );
    }
}

export default Time;