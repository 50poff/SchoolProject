const React = require('react');

class NewMsg extends React.Component {

  constructor(props) {
    super(props);
    this.handleText = this.handleText.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.state = {
      msg: ""
    };
  }

  addMessage(event) {
    event.preventDefault();

    //save state vars to local
    let msg = this.state.msg;

    // make sure msg field is not empty
    if (!msg) {
      return console.error('Name and/or Msg cannot be empty');
    }

    // trim any whitespace
    msg = msg.trim();

    // pass control to MsgBoard so it can make the API Call and update messages there
    this.props.addMsgCallback({ name: this.props.loggedInUserName, msg: msg });
  }

  handleText(event) {
    this.setState({
      msg: event.target.value
    });

  }

  render() {
    return (
      <form onSubmit={this.addMessage}>
        <div className="form-group">
          <div className="row">
            <label htmlFor="name"
              className="col-3 col-form-label">
              Your Username:
                </label>
            <label htmlFor="msg"
              className="col-7 col-form-label">
              Enter Message:
                </label>
          </div>
          <div className="row">
            <div className="col-3">
              <p>{this.props.loggedInUserName}</p>
            </div>
            <div className="col-7">
              <input id="msg" type="text" className="form-control"
                placeholder="Your Message" value={this.state.msg}
                onChange={this.handleText}
              />
            </div>
            <div className="col-2">
              <button type="submit" className="btn btn-primary">
                Post
                  </button>
            </div>
          </div>
        </div>
      </form>
    )
  }
};
module.exports = NewMsg;