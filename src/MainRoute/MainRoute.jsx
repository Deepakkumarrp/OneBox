import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login';
import Home from '../Pages/Home';

function MainRoute() {
  return (
    <>
        <Routes>
            <Route path='/' element ={<Home />}/>
            <Route path='/:threadID' element ={<Home />}/>
            <Route path='/login' element={<Login />} />
        </Routes>
    </>
  )
}

export default MainRoute;