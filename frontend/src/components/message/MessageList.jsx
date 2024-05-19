import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeleton/MessageSkeleton";
import Message from "./Message";

function MessageList() {
  const { messages, loading } = useGetMessages();
  const chatContainerRef = useRef(null);

  // Scroll to the bottom whenever messages are updated
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div ref={chatContainerRef} className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <Message key={message._id} message={message} />
        ))}
      {loading && (
        <>
          <MessageSkeleton />
          <MessageSkeleton />
          <MessageSkeleton />
        </>
      )}
      {!loading && messages.length === 0 && (
        <p className="text-center text-white">
          Send a Message to start the conversation
        </p>
      )}
    </div>
  );
}

export default MessageList;
