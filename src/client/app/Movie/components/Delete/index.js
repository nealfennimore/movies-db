/**
 * External Dependencies
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import ConfirmDialog from './confirm';

const DeleteMovie = ( props ) => {
    const [isOpen, setOpen] = useState( false );
    const open = () => setOpen( true );
    const close = () => setOpen( false );
    return (
        <>
            <IconButton onClick={open}>
                <DeleteIcon />
            </IconButton>
            {
                isOpen && (
                    <ConfirmDialog onCancel={close} />
                )
            }
        </>
    );
};

DeleteMovie.propTypes = {};

export default DeleteMovie;
