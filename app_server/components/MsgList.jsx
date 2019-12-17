const React = require('react');
const Message = require('./Message.jsx')

const MsgList = props => {

  return (
    <table className="table table-striped table-bordered">
      <thead>
        <th className="w-25">#</th>
        <th className="w-25">Username</th>
        <th className="w-40">Message</th>
        <th className="w-10">Buttons</th>

      </thead>
      <tbody>
        {props.messages.map((message, index) => (
          //send message date to Message component to modify the individual message
          <Message
            messageMes={message}
            keyMes={message._id}
            indexMes={index + 1}
            nameMes={message.name}
            msgMes={message.msg}
            loggedInUserName={props.loggedInUserName} />
        ))}
      </tbody>
    </table>
  );
};
module.exports = MsgList;