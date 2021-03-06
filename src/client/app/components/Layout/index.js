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
            minHeight: 'calc(100vh - 64px)',
            paddingTop: '64px',
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
