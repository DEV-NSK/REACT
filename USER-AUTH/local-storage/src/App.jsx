import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Sign from "./pages/SignInSignUp"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sign' element={<Sign/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
