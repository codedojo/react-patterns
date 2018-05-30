import React from 'react';

import ThemeContext from './theme';
import Toolbar from './components/Toolbar';
import Button from './components/Button';

export default class App extends React.Component {
    state = {
        theme: 'light'
    };

    toggleTheme = () => this.setState(state => {
        if (state.theme === 'light') {
            return { theme: 'dark' };
        } else {
            return { theme: 'light' };
        }
    });

    render() {
        return (
            <ThemeContext.Provider>
                <Toolbar>
                    <Button onClick={this.toggleTheme}>
                        <i className="material-icons">{this.state.theme === 'light' ? 'wb_sunny' : 'brightness_3'}</i>
                    </Button>
                </Toolbar>

                <Button>Изменить тему</Button>
            </ThemeContext.Provider>
        );
    }
}