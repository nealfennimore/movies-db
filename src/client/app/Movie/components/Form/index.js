/* eslint-disable react/sort-comp */
/* eslint-disable no-restricted-syntax */
/**
 * External Dependencies
 */
import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';
import { Grid, Button } from '@material-ui/core';

/**
 * Internal Dependencies
 */
import Input from './Input';
import Select from './Select';

export default class Form extends PureComponent {
    static propTypes = {
        method: PropTypes.string,
        url: PropTypes.string,
        movie: PropTypes.shape( {
            id: PropTypes.number,
            title: PropTypes.string,
            format: PropTypes.oneOf( ['VHS', 'DVD', 'Streaming'] ),
            movie_length: PropTypes.number,
            release_year: PropTypes.number,
            rating: PropTypes.number,
        } ),
        onSuccess: PropTypes.func,
    }

    static defaultProps ={
        onSuccess: () => {},
    }

    /**
     * Form DOM reference
     *
     * @memberof Form
     */
    form = createRef();

    /**
     * Force form values to correct type
     *
     * @memberof Form
     */
    coercers = {
        title: value => String( value ),
        format: value => String( value ),
        movie_length: value => Number( value ),
        release_year: value => Number( value ),
        rating: value => Number( value ),
    }

    /**
     * Submit handler
     *
     * @memberof Form
     */
    onSubmit = ( e ) => {
        e.preventDefault();

        fetch( this.props.url, {
            method: this.props.method,
            body: JSON.stringify( this.formData ),
        } )
            .then( this.props.onSuccess );
    }

    /**
     * Convert current form data to JS Object
     *
     * @returns {Object}
     * @readonly
     * @memberof Form
     */
    get formData() {
        const formData = new FormData( this.form.current );
        const data = {};
        for ( const [key, value] of formData ) {
            const coercer = this.coercers[key];
            data[key] = coercer( value );
        }
        return data;
    }

    render() {
        return (
            <form ref={this.form} method={this.props.method} onSubmit={this.onSubmit}>

                <Grid container spacing={3}>
                    <Grid item xs={9}>
                        <Input
                            label="Title"
                            name="title"
                            value={this.props.movie.title}
                            required
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <Select
                            label="Format"
                            name="format"
                            value={this.props.movie.format}
                            options={[
                                { label: 'VHS', value: 'VHS' },
                                { label: 'DVD', value: 'DVD' },
                                { label: 'Streaming', value: 'Streaming' },
                            ]}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <Input
                            label="Movie Length"
                            type="number"
                            name="movie_length"
                            value={this.props.movie.movie_length}
                            inputProps={{
                                min: 0,
                                max: 500,
                            }}
                            required
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <Input
                            label="Release"
                            type="number"
                            name="release_year"
                            value={this.props.movie.release_year}
                            inputProps={{
                                min: 1800,
                                max: 2100,
                            }}
                            required
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <Input
                            label="Rating"
                            type="number"
                            name="rating"
                            value={this.props.movie.rating}
                            inputProps={{
                                min: 1,
                                max: 5,
                            }}
                            required
                            fullWidth
                        />
                    </Grid>
                </Grid>
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        );
    }
}
