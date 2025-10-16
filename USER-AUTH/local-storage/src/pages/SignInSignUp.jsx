import React from 'react'
import {useRef, useState, useEffect} from "react"
import {useNavigate} from "react-router-dom"
import Home from "./Home"

const SignInSignUp = () => {
    const [showHome, setShowHome] = useState(false)
    const navigate = useNavigate()
    const name = useRef()
    const email = useRef()
    const password = useRef()
    const localSignup = localStorage.getItem("signup")
    useEffect(()=>{
        if(localSignup) {
            setShowHome(true)
        }
    })
    const handleSignup = (e) => {
        e.preventDefault()
        if(name.current.value && email.current.value && password.current.value) {
             // Get existing users or initialize empty array
            const existingUsers = JSON.parse(localStorage.getItem("users")) || []
            
            // Check if user already exists
            const userExists = existingUsers.find(user => user.email === email.current.value)
            if(userExists) {
                alert("User with this email already exists!")
                return
            }
            
            // Create new user object
            const newUser = {
                id: Date.now(), // Simple unique ID
                username: name.current.value,
                email: email.current.value,
                password: password.current.value
            }
            
            // Add new user to array
            existingUsers.push(newUser)
            
            // Save updated array to localStorage
            localStorage.setItem("users", JSON.stringify(existingUsers))
            
            // Set current logged in user
            localStorage.setItem("currentUser", JSON.stringify(newUser))
            localStorage.setItem("isLoggedIn", "true")
            
            alert("Account created successfully!!")
            
            // Clear form
            name.current.value = ""
            email.current.value = ""
            password.current.value = ""
            
            navigate("/")
        }
        else {
            alert("Enter required values")
        }
    }
  return (
    <div>
        {showHome ? <Home/>  : 
      <div>
        <h1>SIGN-UP</h1>
        <form onSubmit={handleSignup}>
            <input type="text" placeholder='Enter username' ref={name}/>
            <input type="email" placeholder='Enter email' ref={email}/>
            <input type="password" placeholder='Enter password' ref={password}/>
            <button type='submit'>SignUp</button>
        </form>
      </div> }
    </div>
  )
}

export default SignInSignUp
