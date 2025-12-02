import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { use, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Swal from "sweetalert2";
import { getFirebaseErrorMessage } from "../components/Error";
import useTitle from "../dynamicTitle/useTitle";
// assignment
const Register = () => {
  useTitle("Register")
  const [show, setShow] = useState(false);
  const { signUpUser, setUser,updateUser,googleUser,user } = use(AuthContext);
  const navigate = useNavigate();

  // console.log(createUser);
  const hendleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photoURL = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name, photoURL, email, password);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]{6,10}$/;

    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: "warning",
        title: "Weak Password ⚠️",
        text: "Password must contain at least one uppercase one lowercase letter and min 6 chars and max 10 chars.",
        confirmButtonColor: "#3085d6",
      });
      return;
    }

    
    signUpUser(email, password)
      .then((result) => {
        const user=result.user
      updateUser({displayName:name,photoURL:photoURL})
      .then(()=>{
         setUser({...user,displayName:name,photoURL:photoURL})
         navigate('/')
      })
      .catch(()=>{
      // console.log(error);
      setUser(user)
    })

    
        Swal.fire({
          title: "Registation Successful",
          icon: "success",
          text: "Your password meets all requirements!",
          draggable: true,
        });
        navigate("/login");
      })
      .catch((error) => {
        const message = getFirebaseErrorMessage(error);
            Swal.fire("Sign up failed", message, "error");
      setUser(user)
      });
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
         const message = getFirebaseErrorMessage(error);
            Swal.fire("Sign up failed", message, "error");
      setUser(user)
        });
    };
  return (
    <div className="hero min-h-screen  bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 ">
      <div className="hero-content flex-col lg:flex-row-reverse  w-9/12 mx-auto   md:w-[500px] ">
        <div className="card bg-base-100 w-full  shrink-0 shadow-2xl bg-transparent">
          <div className="card-body space-y-4">
            <h1 className="text-center font-bold text-2xl">Register Now!</h1>
            <form onSubmit={hendleRegister}>
              <fieldset className="fieldset ">
                {/* name */}
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input w-full bg-transparent"
                  placeholder="Enter Your Name"
                  name="name"
                />
                {/* email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input w-full bg-transparent"
                  placeholder="Email"
                  name="email"
                />
                {/* photo URL */}
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  className="input w-full bg-transparent"
                  placeholder="https://userImg.png"
                  name="photoUrl"
                />

                {/* password */}

                <div className="relative">
                  <label className="label">Password</label>
                  <input
                    type={show ? "text" : "password"}
                    className="input w-full bg-transparent"
                    placeholder="Enter your password"
                    name="password"
                  />
                  <span
                    className="right-7 top-7 absolute"
                    onClick={() => setShow(!show)}
                  >
                    {show ? <EyeOff /> : <Eye />}
                  </span>
                </div>

                
                <button className="relative inline-flex items-center justify-center px-6 py-2.5 font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-purple-400/50 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-300 mt-3">Register</button>
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
                Continue with Google
              </button>
            </div>
            <p className="text-center">
              Already Have An Account ?{" "}
              <span className="text-blue-400 hover:text-blue-600 nav">
                <NavLink to={"/login"}>Login</NavLink>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
