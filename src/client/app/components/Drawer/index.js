/**
 * External Dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemIcon } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles( theme => ( {
    list: {
        width: 250,
    },
    link: {
        color: theme.palette.text.primary,
        textDecoration: 'none',
        ...theme.typography.button,
    },
} ) );


const AppDrawer = ( {
    isOpen,
    onClose,
} ) => {
    const classes = useStyles();
    return (
        <Drawer anchor="right" open={isOpen} onClose={onClose}>
            <List className={classes.list}>
                <ListItem>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <NavLink className={classes.link} onClick={onClose} to="/">
                        Home
                    </NavLink>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AddIcon />
                    </ListItemIcon>
                    <NavLink  className={classes.link} onClick={onClose} to="/movies/new">
                        Create Movie
                    </NavLink>
                </ListItem>
            </List>
        </Drawer>
    );
};

AppDrawer.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
};

export default AppDrawer;
