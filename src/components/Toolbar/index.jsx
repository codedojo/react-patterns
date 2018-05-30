import React from 'react';

import ThemeContext from '../../theme';

import './index.css';

export default function Toolbar({ children }) {
    return (
        <ThemeContext.Consumer>
            {theme =>
                <header className="toolbar">
                    {children}
                </header>
            }
        </ThemeContext.Consumer>
    );
};