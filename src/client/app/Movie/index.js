/**
 * External Dependencies
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Container, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Layout from 'client/app/components/Layout';

/**
 * Internal Dependencies
 */
import MovieForm from './components/Form';

const styles = theme => ( {
    title: {
        marginBottom: theme.spacing( 3 ),
    },
} );

class Movie extends PureComponent {
    static propTypes = {
        match: PropTypes.shape( {
            params: PropTypes.shape( {
                id: PropTypes.number,
            } ),
        } ),
        history: PropTypes.shape( {
            push: PropTypes.func,
        } ),
        // eslint-disable-next-line react/forbid-prop-types
        classes: PropTypes.object,
    }

    state = {
        movie: null,
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        fetch( `/api/v1/movies/${id}` )
            .then( res => res.json() )
            .then( ( movie ) => {
                this.movie = movie;
            } );
    }

    get movie() {
        return this.state.movie;
    }

    set movie( movie ) {
        this.setState( { movie } );
    }

    render() {
        const { id } = this.props.match.params;
        if ( ! this.movie ) {
            return null;
        }

        return (
            <Layout vAlign>
                <Grid item>
                    <Container maxWidth="sm">
                        <Typography className={this.props.classes.title} variant="h6" component="h1">
                            Edit Movie
                        </Typography>
                        <MovieForm
                            url={`/api/v1/movies/${id}`}
                            method="PUT"
                            movie={this.movie}
                            onSuccess={() => this.props.history.push( '/' )}
                            onCancel={() => this.props.history.push( '/' )}
                        />
                    </Container>
                </Grid>
            </Layout>
        );
    }
}

export default withRouter( withStyles( styles )( Movie ) );
