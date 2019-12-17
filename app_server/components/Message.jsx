
const React = require('react');

class Message extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      msg: this.props.messageMes
    };
  }
  render() {
    /*
    *if the user who wrote the message is the same as the one logged in,
    *show edit and delete buttons
    */
    if (this.props.loggedInUserName === this.props.nameMes) {

      return (
        <tr key={this.state.msg._id}>
          <td>{this.props.indexMes}</td>
          <td>{this.props.nameMes}</td>
          <td>{this.props.msgMes}</td>
          <td><button
            className="btn btn-danger btn-sm btn-block"
            type="button"
          >
            Delete
              </button>
            <button
              className="btn btn-dark btn-sm btn-block"
              type="button"
            >
              Edit
              </button></td>
        </tr>
      );
    }
    /*
    *if the user is not the one who wrote the message,
    *do not show edit and delete buttons
    */
    else {
      return (
        <tr key={this.state.msg._id} s>
          <td>{this.props.indexMes}</td>
          <td>{this.props.nameMes}</td>
          <td>{this.props.msgMes}</td>
        </tr>
      );
    }

  }
};
module.exports = Message;
