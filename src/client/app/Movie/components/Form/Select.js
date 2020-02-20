/**
 * External Dependencies
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';

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
                    <option key={optValue} value={optValue}>{optLabel}</option>
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
