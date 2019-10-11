import React from 'react';
// import NavBarContainer from './nav_ bar/nav_bar';
// import BrowseIndexContainer from './browse/browse_index_container'
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import BrowseContainer from './browse/browse_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import Home from './home/home';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from  '../util/route_utils';


export default () => (
    <div>
        {/* same session form. login container.  login in root route. */}
        <AuthRoute path="/login" component={LoginContainer} />
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute exact path="/" component={LoginContainer} />

        <ProtectedRoute path="/" component={NavBarContainer} />
        <ProtectedRoute path="/browse" component={BrowseContainer} />

    </div>
);