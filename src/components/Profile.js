import React from "react";
import ProfilePicture from "../assets/Profile.jpg";

const Profile = ({ username }) => {
  return (
    <section
      className="h-60 lg:w-1/2 container mb-10 mx-auto bg-white/50 rounded-md 
    border border-white flex justify-center"
    >
      <div className="my-auto">
        <div className="h-32 w-32 mb-4 bg-white rounded-full">
          <img
            className="h-32 w-32 rounded-full"
            src={ProfilePicture}
            alt="Profile"
          />
        </div>
        <h4 className="text-center font-bold">@{username}</h4>
      </div>
    </section>
  );
};

export default Profile;
