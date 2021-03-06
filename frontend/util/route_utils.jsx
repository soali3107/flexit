import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { randomBytes } from 'crypto';

const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.currentUser)
});

// <AuthRoute path=""  component={} />

const Auth = ({ exact, loggedIn, path, component: Component}) => (
    <Route
        exact
        path={path}
        render={props => (
            loggedIn  ? <Redirect to="/browse" /> : <Component {...props} />
        )}
    />
);  

const Protected = ({ loggedIn, path,  component: Component }) => (
    <Route
        path={path}
        render={props => (
            loggedIn  ? <Component {...props} /> : <Redirect to="/signup" />
        )}
    />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute =  withRouter(connect(mapStateToProps)(Protected));
//Test this app.jsx