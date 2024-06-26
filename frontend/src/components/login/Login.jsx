import { useRef } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const userName = useRef();
  const password = useRef();

  const { loading, login } = useLogin();

  const handleOnLogin = async (event) => {
    event.preventDefault();
    await login({
      userName: userName.current.value,
      password: password.current.value,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 max-auto ">
      <div className="w-full p-6 rounded-lg shadow-md  bg-clip-padding backdrop-filter backdrop-blur-lg  ">
        <h1 className=" text-3xl font-semibold text-center text-gray-300">
          Login
          <span className=" text-pink-400">ChatApp</span>
        </h1>
        <form onSubmit={handleOnLogin}>
          <div className=" mt-3">
            <label className=" label p-2">
              <span className=" text-base label-text">Username</span>
            </label>
            <input
              ref={userName}
              type="text"
              placeholder="Enter username"
              className=" w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className=" label p-2 ">
              <span className=" text-base label-text">Password</span>
            </label>
            <input
              ref={password}
              type="password"
              placeholder="Enter Password"
              className=" w-full input input-bordered h-10"
            />
          </div>
          <Link
            to="/signUp"
            className=" text-sm hover:underline hover:text-blue-600 mt-4 inline-block"
          >
            Don't have an Account
          </Link>
          <div className="flex justify-between">
            <button type="reset" className="btn btn-info btn-md mt-2">
              Reset
            </button>
            {loading ? (
              <span className="loading loading-spinner loading-md"></span>
            ) : (
              <button type="submit" className="btn btn-info btn-md mt-2">
                LogIn
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
