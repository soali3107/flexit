import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render (){
        return (

            <div className="navbar">
                <div className="navbar-left">
                    <Link className="navbar-logo" to="/">   </Link>
                    <div className="navbar-navigation">
                        <Link classname="navbar-navigation-home" to="/browse">Home</Link>
                        <div className="navbar-navigation-home">My List</div>
                    </div>
                </div>
                <div className="navbar-right">
                    <button className='navbar-button' onClick={this.props.logout}>Logout</button>
                </div>
            </div>
        )
    }
}

export default NavBar;


// export default ({ currentUser, logout }) => {
    // const display = currentUser ? (
    //     <div>
    //         <p>Hello, {currentUser.name}</p>
    //         <button onClick={logout}>Log Out</button>
    //     </div>
    //     ) : (
    //     <div>
    //         <Link className="btn" to="/signup">Sign Up</Link>
    //         <Link classname="btn" to="/login">Log In</Link>
    //     </div>
    // );

//     return (
//         <header className="nav-bar">
//             <logoout></logoout>
//         </header>
//     )
// };

// Went to app > view> layouts >  application.html.erb to add  script. Current user is  defined in  application  controlle.r
// Then go to entry  file (flexit.jsx)
