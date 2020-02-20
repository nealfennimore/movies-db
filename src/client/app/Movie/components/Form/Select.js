/**
 * External Dependencies
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Select, MenuItem } from '@material-ui/core';

const SelectBox = ( {
    label,
    value: passedValue,
    name,
    options,
    ...restProps
} ) => {
    const [value, changeValue] = useState( passedValue );
    const onChange = e => changeValue( e.target.value );
    return (
        <Select
            label={label}
            value={value}
            onChange={onChange}
            name={name}
            {...restProps}
        >
            {
                options.map( ( { label: optLabel, value: optValue } ) => (
                    <MenuItem key={optValue} value={optValue}>{optLabel}</MenuItem>
                ) )
            }
        </Select>
    );
};

SelectBox.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    value: PropTypes.any,
    options: PropTypes.arrayOf( PropTypes.shape( {
        value: PropTypes.any,
        label: PropTypes.string,
    } ) ),
};

export default SelectBox;
