import { useState } from "react";
import { useAuthContext } from "../components/context/AuthContext";
import toast from "react-hot-toast";

function useLogin() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async ({ userName, password }) => {
    const success = handleInputErrors({
      userName,
      password,
    });

    if (!success) return;
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName,
          password,
        }),
        credentials: "include",
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      toast.success("Login Successfully");
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
}

export default useLogin;

const handleInputErrors = ({ userName, password }) => {
  if (!userName || !password) {
    toast.error("Please fill all the fields.");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be atleast 6 characters.");
    return false;
  }
  return true;
};
