/**
 * External Dependencies
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

/**
 * Internal Dependencies
 */
import App from './app';

document.body.style = 'margin: 0;'; // Browser reset


const render = ( Component ) => {
    ReactDOM.render(
        <BrowserRouter>
            <Component />
        </BrowserRouter>,
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
