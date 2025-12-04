import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import UserLoading from "../loading/UserLoading";
import Logo from "../assets/hq720-removebg-preview.png";
const Navbar = () => {
  const { user, userLogOut, loading } = use(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-end">
        <UserLoading />
      </div>
    );
  }
  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log Out",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "You’ve been logged out successfully",
          text: "Logout successful. See you next time!",
          icon: "success",
        });
        userLogOut();
      }
    });
  };

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/all-toys"}>All Toys</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to={"/profile"}>Profile</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="bg-base-800 shadow-sm backdrop-blur-md sticky top-0 z-50  ">
      <div className=" max-w-7xl mx-auto ">
        <div className="navbar relative z-50">
          <div className="navbar-start ">
            <div className="dropdown z-50">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden z-50 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content absolute bg-base-100 rounded-box  mt-3 w-52 p-2 shadow z-[100]"
              >
                {links}
              </ul>
            </div>
            <div>
              <Link to={"/"}>
                <img className="h-10 md:h-14" src={Logo} alt="" />
              </Link>
              {/* <a className="btn btn-ghost text-xl">TOYTOPIA</a> */}
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className=" menu-horizontal space-x-4">{links}</ul>
          </div>
          <div className="navbar-end flex items-center gap-2">
            {user ? (
              //       <>
              //       <img className="h-8 w-8 rounded-full " src={user.photoURL} alt="" />
              //       <span className="absolute left-1/2 -translate-x-1/2 bottom-[-30px] bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition">
              //   {user.displayName || "User"}
              // </span>
              //       </>
              <div className="relative group inline-block">
                <img
                  className="h-8 w-8 rounded-full cursor-pointer"
                  src={user?.photoURL}
                  alt="User Profile"
                />

                <span className="absolute left-1/2 -translate-x-1/2 bottom-[-30px] bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition ">
                  {user?.displayName || "User"}
                </span>
              </div>
            ) : (
              <img className="h-8 w-8 rounded-full" src={userImg} alt="" />
            )}
            {user ? (
              <NavLink
                onClick={handleLogOut}
                className="relative inline-flex items-center justify-center px-6 py-2.5 font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-purple-400/50 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-300"
              >
                Log Out
              </NavLink>
            ) : (
              <>
              <NavLink
                to="/login"
                className="relative inline-flex items-center justify-center px-6 py-2.5 font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-purple-400/50 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-300"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="relative inline-flex items-center justify-center px-6 py-2.5 font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-purple-400/50 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-300"
              >
                Register
              </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
