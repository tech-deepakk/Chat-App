import { useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../components/zustand/useConversation";

function useSendMessage() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:5000/api/messages/send/${selectedConversation._id}`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message,
          }),
          credentials: "include",
        }
      );

      const data = await res.json();
      if (data.error) {
        throw Error(data.error);
      }

      setMessages([...messages, data]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
}

export default useSendMessage;
