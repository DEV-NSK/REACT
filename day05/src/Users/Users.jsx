import React from 'react'
import Userdata from "/src/Users/Userdata.jsx"
import UserCard from "/src/Users/Usercard.jsx"
import "./Users.css" 

const Users = () => {
  return (
    <div id='users'>
      <h1>USERS</h1>
      <div id='user-list'>
        {Userdata.map((user, index) => {
        return (
          <UserCard person={user} key={index}/>
        );
      })}
      </div>
    </div>
  )
}

export default Users;
