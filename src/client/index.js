/**
 * External Dependencies
 */
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Internal Dependencies
 */
import App from './app';

const render = ( Component ) => {
    ReactDOM.render(
        <Component />,
        document.body,
    );
};

// Initial render
render( App );

// Start hot reloading if in dev mode
if ( module.hot ) {
    module.hot.accept( './app', () => {
        // eslint-disable-next-line global-require
        const nextApp = require( './app' ).default;
        render( nextApp );
    } );
}
