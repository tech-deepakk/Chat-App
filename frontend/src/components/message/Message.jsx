import { useAuthContext } from "../context/AuthContext";
import useConversation from "../zustand/useConversation";

function Message({ message }) {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const mySide = message.senderId === authUser.id;
  const chatSide = mySide ? "chat-end" : "chat-start";
  const profilePic = mySide
    ? authUser.profilePic
    : selectedConversation.profilePic;
  const bubbleBgColor = mySide ? "bg-blue-500" : "bg-gray-700";

  return (
    <div className={`chat ${chatSide}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="user image" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor}`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-black">
        12.50
      </div>
    </div>
  );
}

export default Message;
