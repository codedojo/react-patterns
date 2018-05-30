import React from 'react';

import ThemeContext from '../../theme';

export default function Button({ children, ...props }) {
    return (
        <ThemeContext.Consumer>
            {theme =>
                <button
                    className="button"
                    {...props}
                >
                    {children}
                </button>
            }
        </ThemeContext.Consumer>
    );
};