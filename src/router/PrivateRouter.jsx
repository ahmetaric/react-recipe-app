import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
const user = JSON.parse(sessionStorage.getItem("user"));

const PrivateRouter = () => {
  return (
    user ? <Outlet/> : <Navigate to="/login"/>
  )
}

export default PrivateRouter