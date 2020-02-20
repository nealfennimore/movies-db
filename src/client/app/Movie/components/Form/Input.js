import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const Input = ( {
    label,
    value: passedValue,
    type,
    required,
    disabled,
    helperText,
    name,
    inputProps,
    ...restProps
} ) => {
    const [value, changeValue] = useState( passedValue );
    const onChange = e => changeValue( e.target.value );
    return (
        <TextField
            type={type}
            label={label}
            variant="outlined"
            value={value}
            onChange={onChange}
            required={required}
            disabled={disabled}
            helperText={helperText}
            name={name}
            inputProps={inputProps}
            {...restProps}
        />
    );
};

Input.propTypes = {
    disabled: PropTypes.bool,
    helperText: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    type: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    inputProps: PropTypes.object,
    // eslint-disable-next-line react/forbid-prop-types
    value: PropTypes.any,
};

Input.defaultProps = {
    type: 'text',
};

export default Input;
