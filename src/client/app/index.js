/**
 * External Dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

/**
 * Internal Dependencies
 */
import Toolbar from './components/Toolbar';
import Layout from './components/Layout';


const App = props => (
    <>
        <Toolbar />
        <Layout>
            <Grid item>App</Grid>
        </Layout>
    </>
);

App.propTypes = {};

export default App;
