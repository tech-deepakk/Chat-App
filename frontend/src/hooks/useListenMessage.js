import { useEffect } from "react";
import { useSocketContext } from "../components/context/SocketContext";
import useConversation from "../components/zustand/useConversation";

function useListenMessage() {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();
  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => {
      socket?.off("newMessage");
    };
  }, [socket, setMessages, messages]);
}

export default useListenMessage;
