import { useEffect } from "react";
import { useSocketContext } from "../components/context/SocketContext";
import notification from "../assets/notification.mp3";
import useConversation from "../components/zustand/useConversation";

function useListenMessage() {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();
  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      setMessages([...messages, newMessage]);
      const audio = new Audio(notification);
      audio.play();
    });

    return () => {
      socket?.off("newMessage");
    };
  }, [socket, setMessages, messages]);
}

export default useListenMessage;
