import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./components/context/AuthContext";
import ScreenMess from "./components/home/ScreenMess";

function App() {
  const { authUser, setAuthUser } = useAuthContext();

  return (
    <>
      <div className=" hidden md:flex p-4 h-screen  items-center justify-center">
        <Routes>
          <Route
            path="/"
            element={authUser ? <Navigate to="/home" /> : <Login />}
          />
          <Route
            path="/login"
            element={authUser ? <Navigate to="/home" /> : <Login />}
          />
          <Route
            path="/home"
            element={!authUser ? <Navigate to="/login" /> : <Home />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to="/home" /> : <SignUp />}
          />
        </Routes>
        <Toaster />
      </div>
      <div className="md:hidden h-screen flex justify-center items-center">
        <ScreenMess></ScreenMess>
      </div>
    </>
  );
}

export default App;
