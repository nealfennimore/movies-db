/**
 * External Dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

/**
 * Internal Dependencies
 */
import Layout from 'client/app/components/Layout';
import MovieTable from 'client/app/components/MovieTable';


const Home = props => (
    <>
        <Layout>
            <Grid item>
                <MovieTable />
            </Grid>
        </Layout>
    </>
);

Home.propTypes = {};

export default Home;
