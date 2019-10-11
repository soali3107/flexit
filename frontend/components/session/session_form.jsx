import React  from 'react';
import {  Link }  from 'react-router-dom';
class SessionForm extends React.Component {

    //state is pojo.
    constructor(props) {
        super(props);
        this.state =
         {
            // username: '',
            email: '',
            password: ''
        };
        // this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginDemo = this.loginDemo.bind(this)
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
        this.props.createSession(this.state)
        .then(() => this.props.history.push('/browse'))
    };

    loginDemo(e){
        e.preventDefault();
        this.props.demoLogin({email: "demo@gmail.com", password: "demoLogin"})
            .then(() =>  this.props.history.push('/browse'));
        // this.setState(demoUser);
        // this.handleInput(e);
    }

    renderErrors() {
        return (
            <div className="errors"> 
                {this.props.errors.map((error, i) => (
                    <div key={`error-${i}`} className="errors-type">
                        {error}
                    </div>
                ))}
            </div>
        );
    };
//   Have an account? Sign In now.   
//Don't have an account? Sign up now.
    render(){
        let current = this.props.formType;
        let bool = this.props.formType === 'Sign In';
        let next = (bool ? 'Sign Up' : 'Sign In');
        let link = bool ? 
            <div>
                <div className="words">
                    Don't have an account? 
                </div> 
                <Link to="/signup" className="bottom-link" > Sign up now.</Link>
            </div>
            : 
            <div>
                <div className="words">
                    Have an account? 
                </div>
                <Link to="/login" className="bottom-link">Sign in now.</Link>
            </div>
        // debugger
        return (
            <div className="every">
                {/* <a href="https://fontmeme.com"/netflix-font/" className="flexit"><img src="https://fontmeme.com/permalink/191007/329e783164a2040cefb26375f300907e.png" alt="netflix-font" border="0" /></a> */}
                {/* <img className="flexit" src="flexit.jpg" alt="FLEXIT"/> */}
            <div className="session">
                {/* <div className="session-inside"> */}
                    {/* <img src="netflix.jpg" alt="Picture of many shows." /> */}
                <form className="session-form" onSubmit={this.handleSubmit}>
                        <h1 className="title">{current}</h1>
                        {this.renderErrors()}
                        <input 
                            placeholder='Email'
                            className="session-form-input"
                            type="text" 
                            value={this.state.email}
                            onChange={this.handleInput('email')}/>
                        {/* <label className='session-form-password'>  </label> */}
                        <input
                            placeholder='Password'
                            className="session-form-input"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')} />
                        <div className="session-form-input-errors">
                            {/* {if(this.renderErrors() && this.state.password.length() < 6) ("Password  needs to be at least 6 charachters")} */}
                        </div>
                        <input className='session-form-button' type="submit" value={this.props.formType} />
                         <button className='session-form-button' onClick={this.loginDemo}>Demo</button>   
                        <div className='link'>{link}</div>
                    </form>
                </div>
            </div>
        )
    }
};

export default SessionForm;
//after having sign up component is built, we can render it. Go to app.jsx