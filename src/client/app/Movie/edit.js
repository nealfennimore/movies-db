/**
 * External Dependencies
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Container, Grid, Typography } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';
import Layout from 'client/app/components/Layout';

/**
 * Internal Dependencies
 */
import MovieForm from './components/Form';
import DeleteButton from './components/Delete';

const styles = theme => ( {
    title: {
        marginBottom: theme.spacing( 3 ),
    },
} );

class MovieEdit extends PureComponent {
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
                        <Grid container spacing={2} alignItems="center" justify="space-between">
                            <Grid item>
                                <Typography className={this.props.classes.title} variant="h6" component="span">
                                    Edit Movie
                                </Typography>
                            </Grid>
                            <Grid item>
                                <DeleteButton />
                            </Grid>
                        </Grid>
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

export default withRouter( withStyles( styles )( MovieEdit ) );
