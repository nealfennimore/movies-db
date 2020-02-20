/**
 * External Dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

const Layout = ( { children, vAlign } ) => (
    <Grid
        container
        direction="column"
        justify={vAlign ? 'center' : null}
        style={{
            minHeight: '100vh',
        }}
    >
        {children}
    </Grid>
);

Layout.propTypes = {
    children: PropTypes.node,
    vAlign: PropTypes.bool,
};

export default Layout;
