import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { Eye, EyeOff } from "lucide-react";
import Swal from "sweetalert2";
import { getFirebaseErrorMessage } from "./Error";
import useTitle from "../dynamicTitle/useTitle";

const LogIn = () => {
  useTitle('Login')
  const [show, setShow] = useState(false);
  const { signInUser, googleUser, resetPassword,setLoading } = use(AuthContext);
  const emailRef = useRef(null);
  const location=useLocation()
  // console.log(location);
  const navigate=useNavigate()
  const hendleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Login Successful",
          icon: "success",
          draggable: true,
        });
        navigate(location.state || '/')
      })
      .catch((error) => {
        setLoading(false);
      const message = getFirebaseErrorMessage(error);
      Swal.fire("Sign up failed", message, "error");
      });
    // console.log(email,password);
    e.target.reset();
  };

  const handleGoogleSignin = () => {
    googleUser()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Login Successful",
          icon: "success",
          draggable: true,
        });
        navigate(location.state || '/')

      })
      .catch((error) => {
        setLoading(false);
      const message = getFirebaseErrorMessage(error);
      Swal.fire("Sign up failed", message, "error");
      });
  };
  const hendleResetPass = () => {
    console.log(emailRef.current.value);
    const email = emailRef.current.value;
    resetPassword(email)
      .then(() => {
        Swal.fire({
          title: "Check your email to reset password",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <div className=" flex justify-center my-5">
        <div className="card bg-base-100 h-full w-full max-w-sm shrink-0 shadow-2xl bg-transparent">
          <div className="card-body space-y-5 ">
            <h1 className="text-2xl font-semibold text-center  ">
              Login your account
            </h1>
            <form onSubmit={hendleLogin}>
              <fieldset className="fieldset">
                <label className="label">Email Address</label>
                <input
                  type="email"
                  className="input bg-transparent"
                  placeholder="Enter your email address "
                  name="email"
                  ref={emailRef}
                />
                <div className="relative">
                  <label className="label">Password</label>
                  <input
                    type={show ? "text" : "password"}
                    className="input bg-transparent"
                    placeholder="Enter your password"
                    name="password"
                  />
                  <span
                    className="absolute right-7 top-6"
                    onClick={() => setShow(!show)}
                  >
                    {show ? <EyeOff /> : <Eye />}
                  </span>
                </div>
                <div>
                  <button
                    type="button"
                    className="hover:underline cursor-pointer"
                    onClick={hendleResetPass}
                  >
                    Forgot password?
                  </button>
                </div>
                <button className="relative inline-flex items-center justify-center px-6 py-2.5 font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-purple-400/50 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-300">
                  Login
                </button>
              </fieldset>
            </form>
            <div className="flex justify-center items-center gap-1">
              <div className="border-b-2 border-gray-400 w-20 md:w-40"></div>
              <div>
                <p>or</p>
              </div>
              <div className="border-b-2 border-gray-400 w-20 md:w-40"></div>
            </div>
            <div>
              {/* Google */}
              <button
                onClick={handleGoogleSignin}
                className="btn bg-white text-black border-[#e5e5e5] w-full relative inline-flex items-center justify-center px-6 py-2.5 font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-purple-400/50 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-300"
              >
                <svg
                  aria-label="Google logo"
                  width="25"
                  height="25"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="rounded-full"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </div>
            <p className="font-semibold text-center">
              Dont’t Have An Account ?{" "}
              <Link className="text-blue-400 hover:text-blue-600" to={"/register"}>
                {" "}
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
