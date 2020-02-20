/**
 * External Dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

const Layout = ( { children } ) => (
    <Grid
        container
        direction="column"
        justify="center"
        alignItems="stretch"
        style={{
            height: '100%'
        }}
    >
        {children}
    </Grid>
);

Layout.propTypes = {};

export default Layout;
