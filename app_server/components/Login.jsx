const React = require('react');

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.handleText = this.handleText.bind(this);
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
    this.state = {
      email: "",
      password: ""
    };
  }

  login(event) {
    event.preventDefault();

    // pass control to MsgBoard and send
    // the email and pass the user entered
    this.props.loginCallback({
      email: this.state.email,
      password: this.state.password
    });
  }

  handleText(event) {
    if (event.target.id === 'email') {
      this.setState({
        email: event.target.value
      });
    } else {
      this.setState({
        password: event.target.value
      });
    }
  }
  // pass control to MsgBoard to deal with this
  register(event) {
    this.props.registerCallback()
  }

  render() {
    let loginFailText;

    if (this.props.loginFail) {
      loginFailText = <p className="card-text pt-1 text-danger">Failed Login Attempt.
            &nbsp;{this.props.loginAttempts} attempts remaining.</p>
    }
    return (
      <div>
        <form onSubmit={this.login}>
          <div className="form-group">
            <div className="row">
              <label htmlFor="email"
                className="col-3 col-form-label">
                Enter email:
                </label>
              <label htmlFor="password"
                className="col-7 col-form-label">
                Enter password:
                </label>
            </div>
            <div className="row">
              <div className="col-3">
                <input id="email" type="text" className="form-control"
                  placeholder="enter email" value={this.state.email}
                  onChange={this.handleText}
                />
              </div>
              <div className="col-3">
                <input id="password" type="text" className="form-control"
                  placeholder="enter password" value={this.state.password}
                  onChange={this.handleText}
                />
              </div>
              <div className="col-2">
                <button type="submit" className="btn btn-primary">
                  Log In
                  </button>
              </div>
            </div>
          </div>
        </form>

        {loginFailText}
        <p>Not Registered?</p>
        <button type="submit" onClick={this.register} className="btn btn-outline-primary">
          Registar
          </button>

      </div>


    )
  }
};
module.exports = Login;