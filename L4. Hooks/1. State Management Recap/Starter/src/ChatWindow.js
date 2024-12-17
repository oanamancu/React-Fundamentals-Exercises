import PropTypes from "prop-types";
import MessageHistory from "./MessageHistory";
import AddMessage from "./AddMessage";

const ChatWindow = ({user, messages, onMessage}) => {

    const handleOnMessage = (messageText) => {
        onMessage({username: user.username, text:messageText})
    }

    return (
        <div className="chat-window">
          <h2>Super Awesome Chat</h2>
          <div className="name sender">{user.username}</div>
          <MessageHistory user={user} messages={messages}/>
          <AddMessage onMessage = {handleOnMessage}/>
        </div>
    )
}

ChatWindow.propTypes = {
    user: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired,
    onMessage: PropTypes.func.isRequired
}

export default ChatWindow;