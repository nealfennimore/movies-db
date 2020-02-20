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

class MovieNew extends PureComponent {
    static propTypes = {
        history: PropTypes.shape( {
            push: PropTypes.func,
        } ),
        // eslint-disable-next-line react/forbid-prop-types
        classes: PropTypes.object,
    }

    render() {
        return (
            <Layout vAlign>
                <Grid item>
                    <Container maxWidth="sm">
                        <Typography className={this.props.classes.title} variant="h6" component="h1">
                            Create Movie
                        </Typography>
                        <MovieForm
                            url="/api/v1/movies"
                            method="POST"
                            movie={{
                                format: 'VHS',
                            }}
                            onSuccess={() => this.props.history.push( '/' )}
                            onCancel={() => this.props.history.push( '/' )}
                        />
                    </Container>
                </Grid>
            </Layout>
        );
    }
}

export default withRouter( withStyles( styles )( MovieNew ) );
