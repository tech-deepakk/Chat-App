import MessageInput from "./MessageInput";
import MessageList from "./MessageList";
import { TiMessages } from "react-icons/ti";

function MessageContainer() {
  const NoChat = true;
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {NoChat ? (
        <NoChatSelected></NoChatSelected>
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="lable-text"> To : </span>
            <span className="text-gray-900 font-bold"> Deepak Pan</span>
          </div>
          <MessageList></MessageList>
          <MessageInput></MessageInput>
        </>
      )}
    </div>
  );
}

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="p-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome Deepak Panchal</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
