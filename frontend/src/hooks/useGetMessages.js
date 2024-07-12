import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../components/zustand/useConversation";

function useGetMessages() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  useEffect(() => {
    const getMessage = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://v-chat-sq4x.onrender.com/api/messages/${selectedConversation._id}`,
          {
            method: "get",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
          }
        );
        const data = await res.json();
        if (data.error) {
          throw Error(data.error);
        }
        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (selectedConversation?._id) getMessage();
  }, [selectedConversation._id, setMessages]);

  return { messages, loading };
}

export default useGetMessages;
