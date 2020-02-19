/**
 * External Dependencies
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const AppToolbar = ( props ) => {
    const [isOpen, setOpen] = useState( false );
    const toggle = () => setOpen( ! isOpen );
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggle}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                    movies.neal.cloud
                </Typography>
                <Menu
                    id="menu"
                    open={isOpen}
                    onClose={toggle}
                >
                    <MenuItem onClick={toggle}>Home</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

AppToolbar.propTypes = {};

export default AppToolbar;
