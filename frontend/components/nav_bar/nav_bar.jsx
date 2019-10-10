import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render (){
        return (
            <div className="navbar">
                <div className="navbar-logo">      </div>
                <ul className="navbar-navigation">
                    <li className="navbar-navigation-home">Home</li>
                    <li className="navbar-navigation-home">My List</li>
                </ul>
                <button className='navbar-button' onClick={this.props.logout}>Logout</button>

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
