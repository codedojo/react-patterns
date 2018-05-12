import React from 'react';

export default function withCount({ min, max }) {
    return Component => class WrappedComponent extends React.Component {
        static displayName = `withCount(${Component.displayName || Component.name})`;

        state = {
            count: 0
        };
        
        increment = () => this.setState(state => state.count < max ? ({ count: state.count + 1 }) : null);

        decrement = () => this.setState(state => state.count > min ? ({ count: state.count - 1 }) : null);

        render() {
            const { className, ...restProps } = this.props;

            return (
                <Component
                    count={this.state.count}
                    increment={this.increment}
                    decrement={this.decrement}
                    {...restProps}
                />
            );
        }
    }
}