import React from 'react';
// import NavBar from './nav_ bar/nav_bar'
import SignupContainer from './session/signup_container';
import { Route } from 'react-router-dom';

export default () => (
    <div>
        {/* same session form. login container.  login in root route. */}
        {/* <Route path="/" component={} /> */}
        <Route path="/signup" component={SignupContainer} />
    </div>
);