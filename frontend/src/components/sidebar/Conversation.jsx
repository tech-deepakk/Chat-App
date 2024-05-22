import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

function Conversation({ user, lastIndx }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;

  const { onlineUser } = useSocketContext();
  const isOnline = onlineUser.includes(user._id);

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${
          isSelected && "bg-sky-500"
        }`}
        onClick={() => {
          setSelectedConversation(user);
        }}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={user.profilePic} alt="user image" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p>{user.userName}</p>
            <span></span>
          </div>
        </div>
      </div>
      {!lastIndx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
}

export default Conversation;
