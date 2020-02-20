/**
 * External Dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Drawer, List, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

const AppDrawer = ( {
    isOpen,
    onClose,
} ) => (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
        <List>
            <ListItem>
                <Link to="/">
                    Home
                </Link>
            </ListItem>
            <ListItem>
                <Link to="/">
                    Create Movie
                </Link>
            </ListItem>
        </List>
    </Drawer>
);

AppDrawer.propTypes = {};

export default AppDrawer;
