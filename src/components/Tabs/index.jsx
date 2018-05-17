import React from 'react';

import './index.css';

const Tab = ({ active, title, ...props }) =>
    <a className={`tab${active ? ' active' : ''}`} {...props}>{title}</a>;

export default class Tabs extends React.Component {
    static Tab = Tab;

    state = {
        activeTabIndex: 0
    };

    handleClick = index => this.setState({ activeTabIndex: index });

    isActive = index => index === this.state.activeTabIndex;

    render() {
        return (
            <React.Fragment>
                <nav className="tabs">
                    {React.Children.map(this.props.children, (child, index) =>
                        React.cloneElement(child, {
                            active: this.isActive(index),
                            onClick:() => this.handleClick(index)
                        }, child.props.title)
                    )}
                </nav>

                {React.Children.map(this.props.children, (child, index) =>
                    this.isActive(index) && <section>{child.props.children}</section>
                )}
            </React.Fragment>
        );
    }
}