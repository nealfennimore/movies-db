/**
 * External Dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Grid, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

/**
 * Internal Dependencies
 */
import Layout from 'client/app/components/Layout';
import MovieTable from 'client/app/Home/components/MovieTable';

const useStyles = makeStyles( theme => ( {
    fab: {
        position: 'fixed',
        bottom: theme.spacing( 2 ),
        right: theme.spacing( 2 ),
        [theme.breakpoints.down( 'md' )]: {
            right: 'unset',
            left: theme.spacing( 2 ),
        },
    },
} ) );


const Home = ( { history } ) => {
    const classes = useStyles();

    return (
        <Layout>
            <Grid item>
                <MovieTable />
                <Fab className={classes.fab} onClick={() => history.push( '/movies/new' )}>
                    <AddIcon />
                </Fab>
            </Grid>
        </Layout>
    );
};

Home.propTypes = {};

export default withRouter( Home );
