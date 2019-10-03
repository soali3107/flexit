import React from 'react';
// import NavBarContainer from './nav_ bar/nav_bar';
// import BrowseIndexContainer from './browse/browse_index_container'
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import Home from './home/home';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from  '../util/route_utils';


export default () => (
    <div>
        {/* same session form. login container.  login in root route. */}
        {/* <Route path="/" component={NavBarContainer} /> */}
        {/* <Route exact path="/" component={Home} />  */}
        {/* <Route path="/browse" component={BrowseIndexContainer} />  */}
        <AuthRoute path="/login" component={LoginContainer} />
        <AuthRoute path="/signup" component={SignupContainer} />
    </div>
);