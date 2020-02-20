/* eslint-disable react/sort-comp */
/**
 * External Dependencies
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import ConfirmDialog from 'client/app/Movie/components/Dialog/confirm';

export class DeleteConfirmation extends PureComponent {
    static propTypes = {
        match: PropTypes.shape( {
            params: PropTypes.object,
        } ),
        history: PropTypes.shape( {
            push: PropTypes.func,
        } ),
        onCancel: PropTypes.func,
    }

    deleteMovie = () => {
        const { id } = this.props.match.params;

        fetch( `/api/v1/movies/${id}`, {
            method: 'DELETE',
        } )
            .then( () => this.props.history.push( '/' ) );
    }

    render() {
        return (
            <ConfirmDialog
                isOpen
                onConfirm={this.deleteMovie}
                onCancel={this.props.onCancel}
                title="Delete Movie"
                content="Are you sure you want to delete this movie?"
            />
        );
    }
}

DeleteConfirmation.propTypes = {};

export default withRouter( DeleteConfirmation );
