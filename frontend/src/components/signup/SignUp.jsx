import { Link } from "react-router-dom";
import { useRef, useState } from "react";

function SignUp() {
  const fullName = useRef("");
  const userName = useRef("");
  const password = useRef("");
  const confirmPassword = useRef("");
  const [gender, setGender] = useState("male");

  const handleRadioChange = (value) => {
    setGender(value);
  };

  const handleOnSignUp = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 max-auto ">
      <div className="w-full p-6 rounded-lg shadow-md  bg-clip-padding backdrop-filter backdrop-blur-lg  ">
        <h1 className=" text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className=" text-pink-400">ChatApp</span>
        </h1>
        <form onSubmit={handleOnSignUp}>
          <div className=" mt-3">
            <label className=" label p-2">
              <span className=" text-base label-text">Full Name</span>
            </label>
            <input
              ref={fullName}
              type="text"
              placeholder="Enter fullname"
              className=" w-full input input-bordered h-10"
            />
          </div>
          <div>
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
          <div>
            <label className=" label p-2 ">
              <span className=" text-base label-text">Confirm Password</span>
            </label>
            <input
              ref={confirmPassword}
              type="password"
              placeholder="Enter confirm Password"
              className=" w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className=" label p-2 ">
              <span className=" text-base label-text">Gender</span>
            </label>
            <div className="flex gap-2 ">
              <input
                type="radio"
                name="gender"
                className="radio"
                value={"female"}
                onClick={() => {
                  handleRadioChange("female");
                }}
              />
              <span>Female</span>
              <input
                type="radio"
                name="gender"
                className="radio"
                defaultChecked
                value={"male"}
                onClick={() => {
                  handleRadioChange("male");
                }}
              />
              <span>Male</span>
            </div>
          </div>
          <Link
            to="/login"
            className=" text-sm hover:underline hover:text-blue-600 mt-4 inline-block "
          >
            Already have an Account
          </Link>
          <div className="flex justify-between">
            <button type="reset" className="btn btn-info btn-md mt-2">
              Reset
            </button>
            <button type="submit" className="btn btn-info btn-md mt-2">
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
