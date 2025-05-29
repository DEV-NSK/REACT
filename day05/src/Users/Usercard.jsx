import React from "react";

const Usercard = ({ person }) => {
  return (
    <div className="user-card">
      <img src={person.image} alt="" />
      <h1>{person.username}</h1>
      <span>{person.role}</span>
      <p>{person.address.country}</p>
    </div>
  );
};

export default Usercard;
