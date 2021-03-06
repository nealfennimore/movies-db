/**
 * External Dependencies
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';

/**
 * Internal Dependencies
 */
import Table from './Table';

export default class MovieTable extends PureComponent {
    static propTypes = {}

    state = {
        rows: [],
    }

    componentDidMount() {
        fetch( '/api/v1/movies' )
            .then( res => res.json() )
            .then( ( rows ) => {
                this.rows = rows;
            } );
    }

    get rows() {
        return this.state.rows;
    }

    set rows( rows ) {
        this.setState( { rows } );
    }

    render() {
        return (
            <Container maxWidth="lg" disableGutters>
                <Table rows={this.rows} />
            </Container>
        );
    }
}
