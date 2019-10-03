import React  from 'react';

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
        let current = this.props.formType;
        let next = (this.props.formType === '#/login' ? '#/signup' : '#/login');
        return (
            <body className="session">
                <div className="session-inside">
                    {/* <img src="netflix.jpg" alt="Picture of many shows." /> */}
                    <h2>{current}</h2>
                    <form  className="session-form">
                        <label className='session-form-email'>Email:
                            <input 
                                type="text" 
                                value={this.state.email}
                                onChange={this.handleInput('email')}/>
                        </label>
                        {/* <label>Email:
                            <input
                            type="text"
                            value={this.state.email}
                            onChanged={this.handleInput('email')} />
                        </label> */}
                        <label className='session-form-password'>Password:
                            <input
                                type="password"
                                value={this.state.password}
                                onChange={this.handleInput('password')} />
                        </label>
                        <button className='session-form-button' onClick={this.handleSubmit}>{this.props.formType}</button>
                    </form>
                    <footer className='session-footer'>
                        <a href={next}>
                            {next}
                        </a>
                    </footer>
                </div>
            </body>
        )
    }
};

export default SessionForm;
//after having sign up component is built, we can render it. Go to app.jsx