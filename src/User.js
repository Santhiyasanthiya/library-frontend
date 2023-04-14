import React from "react";
import Counter from "./Counter";

export function User({ title, pic, description }) {
  return (
    <div className="profile-container">
      <img className="profile-pic" src={pic} alt={title} />
      <div className="profile-spec">
        <h3 className="profile-name"> {title} </h3>
       
      </div>
      <p className="profile-description">{description}</p>
      <Counter/>
    </div>
  );
}
