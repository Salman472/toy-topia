import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import Aos from "aos";
import "aos/dist/aos.css";
import useTitle from "../dynamicTitle/useTitle";

const Profile = () => {
  useTitle('Profile')
  const { user } = useContext(AuthContext);

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({
    displayName: "",
    email: "",
    photoURL: "",
  });

  useEffect(() => {
    if (user) {
      setEditedUser({
        displayName: user.displayName || "",
        email: user.email || "",
        photoURL: user.photoURL || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  // Handle image upload + preview
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setEditedUser({ ...editedUser, photoURL: imageURL });
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("Updated user data:", editedUser);
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center bg-white shadow-xl rounded-2xl p-6 sm:w-80 w-70 mx-auto mt-10 border border-gray-200 bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 transition-all duration-300 hover:shadow-2xl"
    >
      {/* Profile Image */}
      <div className="relative group">
        <img
          className="w-28 h-28 rounded-full object-cover border-4 border-purple-400 shadow-md transition-transform duration-300 group-hover:scale-105"
          src={editedUser.photoURL || "https://via.placeholder.com/150"}
          alt="User Profile"
        />

        {isEditing && (
          <>
            <label
              htmlFor="photoUpload"
              className="absolute bottom-0 right-0 bg-purple-600 text-white text-xs px-3 py-1 rounded-full shadow-md cursor-pointer hover:bg-purple-700 transition"
            >
              Change
            </label>
            <input
              id="photoUpload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handlePhotoChange}
            />
          </>
        )}
      </div>

      {isEditing ? (
        <>
          <input
            type="text"
            name="displayName"
            value={editedUser.displayName}
            onChange={handleChange}
            className="mt-4 text-center border-b text-black bg-transparent focus:outline-none focus:border-purple-500"
          />
          <input
            type="email"
            name="email"
            value={editedUser.email}
            onChange={handleChange}
            className="mt-2 text-center border-b text-black bg-transparent focus:outline-none focus:border-purple-500"
          />
        </>
      ) : (
        <>
          <h2 className="text-xl font-semibold text-gray-800 mt-4">
            {editedUser.displayName || "No Name"}
          </h2>
          <p className="text-gray-600 text-sm mt-1">
            {editedUser.email || "No Email"}
          </p>
        </>
      )}

      <div className="w-full h-px bg-gray-300 my-4"></div>

      <div className="flex gap-3">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-medium text-white rounded-lg shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-400 bg-[length:200%_200%] animate-gradientMove"></span>
            <span className="relative z-10">Save</span>
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-medium text-white rounded-lg shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 bg-[length:200%_200%] animate-gradientMove"></span>
            <span className="relative z-10">Edit Profile</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
