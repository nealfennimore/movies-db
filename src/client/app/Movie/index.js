/**
 * External Dependencies
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/**
 * Internal Dependencies
 */
import MovieForm from './components/Form';

class Movie extends PureComponent {
    static propTypes = {
        match: PropTypes.shape( {
            params: PropTypes.shape( {
                id: PropTypes.number,
            } ),
        } ),
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
            <MovieForm
                url={`/api/v1/movies/${id}`}
                method="PUT"
                movie={this.movie}
            />
        );
    }
}

export default withRouter( Movie );
