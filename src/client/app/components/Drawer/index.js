/**
 * External Dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Drawer, List, ListItem } from '@material-ui/core';

const AppDrawer = ( {
    isOpen,
    onClose,
} ) => (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
        <List>
            <ListItem button component="a" href="#">
                Home
            </ListItem>
            <ListItem button component="a" href="/">
                Create Movie
            </ListItem>
        </List>
    </Drawer>
);

AppDrawer.propTypes = {};

export default AppDrawer;
