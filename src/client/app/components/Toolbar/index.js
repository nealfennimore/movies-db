/**
 * External Dependencies
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MovieCreationTwoToneIcon from '@material-ui/icons/MovieCreationTwoTone';
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
    title: {
        color: 'white',
        ...theme.typography.button,
    },
    link: {
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
    },
} ) );

const AppToolbar = ( props ) => {
    const [isOpen, setOpen] = useState( false );
    const toggle = () => setOpen( ! isOpen );
    const classes = useStyles();
    return (
        <>
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <Link className={classes.link} to="/">
                        <IconButton style={{ color: 'white' }}>
                            <MovieCreationTwoToneIcon />
                        </IconButton>
                        <Typography className={classes.title} variant="button" component="span">
                            Movies-DB
                        </Typography>
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
