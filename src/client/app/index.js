/**
 * External Dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

/**
 * Internal Dependencies
 */
import Toolbar from './components/Toolbar';
import Home from './Home';
import MovieNew from './Movie/new';
import MovieEdit from './Movie/edit';


const App = props => (
    <Router>
        <Toolbar />

        <Switch>
            <Route path="/movies/new" >
                <MovieNew />
            </Route>
            <Route path="/movies/:id" >
                <MovieEdit />
            </Route>
            <Route path="/" >
                <Home />
            </Route>
        </Switch>
    </Router>
);

App.propTypes = {};

export default App;
