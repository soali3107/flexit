import React from "react";
import ReactDOM from "react-dom";
import createStore from './store/store';
import Root from './components/root';


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = createStore();
    // let proloadedstate =  undefined;
    // if (window.currentUser) {
    //     preloadedState ={
    //         session:  {
    //             currentUser: window.currentUser;
    //         }
    //     };
    // };

    ReactDOM.render(<Root store={store} />, root)
});