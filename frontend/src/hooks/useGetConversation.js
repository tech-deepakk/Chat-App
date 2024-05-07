import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function useGetConversation() {
  const [loading, setLoading] = useState(false);
  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    const getConversation = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:5000/api/users", {
          method: "get",
        });
        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }
        setConversation(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getConversation();
  }, []);
  return { loading, conversation };
}

export default useGetConversation;
