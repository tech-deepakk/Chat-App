import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./components/context/AuthContext";

function App() {
  const { authUser, setAuthUser } = useAuthContext();

  return (
    <div className="p-4 h-screen flex items-center justify-center">
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
  );
}

export default App;
