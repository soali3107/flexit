import React from "react";
import ReactDOM from "react-dom";
import createStore from './store/store';
import Root from './components/root';

import {login, logout} from './actions/session';


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState ={
            session:  {
                currentUser: window.currentUser.id
            },
            entities: {
                users: {[window.currentUser.id]: window.currentUser }
            }
        };
    };
    window.logout = logout;
    const store = createStore(preloadedState);
    window.store = store;
    
    ReactDOM.render(<Root store={store} />, root)
});