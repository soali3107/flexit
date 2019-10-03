import React  from 'react';

class Signup extends React.Component {

    //state is pojo.
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //handleinput takes  care of username, email,  password. 
    //Handles  error state for us. e is our event handler.
    handleInput(type){
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    };

    //Handles submitting information of our input. 
    //Prevent default action because it causes a POST action which rerenders.
    handleSubmit(e){
        e.preventDefault();
        this.props.createNewUser(this.state)
        .then(() => this.props.history.push('/browse'))
    };

    render(){
        return (
            <div className="session-form">
                <h2>Sign Up</h2>
                <form>
                    <label>Username:
                        <input 
                            type="text" 
                            value={this.state.username}
                            onChange={this.handleInput('username')}/>
                    </label>
                    {/* <label>Email:
                        <input
                            type="text"
                            value={this.state.email}
                            onChanged={this.handleInput('email')} />
                    </label> */}
                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')} />
                    </label>
                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
            </div>
        )
    }
};

export default Signup;
//after having sign up component is built, we can render it. Go to app.jsx