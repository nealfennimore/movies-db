/**
 * External Dependencies
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CameraRollIcon from '@material-ui/icons/CameraRoll';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

/**
 * Internal Dependencies
 */
import Drawer from '../Drawer';

/**
 * Styles for component
 */
const useStyles = makeStyles( theme => ( {
    toolbar: {
        justifyContent: 'space-between',
    },
} ) );

const AppToolbar = ( props ) => {
    const [isOpen, setOpen] = useState( false );
    const toggle = () => setOpen( ! isOpen );
    const classes = useStyles();
    return (
        <>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <Link to="/">
                        <IconButton color="inherit">
                            <CameraRollIcon />
                        </IconButton>
                    </Link>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggle}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer isOpen={isOpen} onClose={toggle} />
        </>
    );
};

AppToolbar.propTypes = {};

export default AppToolbar;
