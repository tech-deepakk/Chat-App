import { useRef } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
function MessageInput() {
  const { sendMessage, loading } = useSendMessage();
  const message = useRef("");
  const handleMessage = (event) => {
    event.preventDefault();
    if (message.current.value == "") {
      return;
    }
    sendMessage(message.current.value);
    message.current.value = "";
  };
  return (
    <form className="px-4 my-3" onSubmit={handleMessage}>
      <div className="w-full relative">
        <input
          ref={message}
          type="text"
          placeholder="Send a message"
          className="border text-sm rounded-lg w-full p-2.5 pr-10 bg-gray-700 border-gray-600 text-white"
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? (
            <span className="loading loading-spinner loading-md text-white"></span>
          ) : (
            <BsSend className="text-white" />
          )}
        </button>
      </div>
    </form>
  );
}

export default MessageInput;
