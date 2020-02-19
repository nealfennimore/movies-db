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
import MovieTable from './components/MovieTable';


const App = props => (
    <>
        <Toolbar />
        <Layout>
            <Grid item>
                <MovieTable />
            </Grid>
        </Layout>
    </>
);

App.propTypes = {};

export default App;
