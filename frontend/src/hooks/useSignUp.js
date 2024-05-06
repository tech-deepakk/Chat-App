import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../components/context/AuthContext";

function useSignUp() {
  const [loadind, setLoading] = useState();
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    userName,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      userName,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          userName,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      //   local storage
      localStorage.setItem("chat-user", JSON.stringify(data));
      // context
      toast.success("Account Created Successfully");

      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loadind, signup };
}

export default useSignUp;

const handleInputErrors = ({
  fullName,
  userName,
  password,
  confirmPassword,
  gender,
}) => {
  if (!fullName || !userName || !password || !confirmPassword || !gender) {
    toast.error("Please fill all fields.");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Password didn't match.");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be atleast 6 characters.");
    return false;
  }
  return true;
};
