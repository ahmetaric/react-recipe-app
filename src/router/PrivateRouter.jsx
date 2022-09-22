import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
const user = true;

const PrivateRouter = () => {
  return (
    user ? <Outlet/> : <Navigate to="/login"/>
  )
}

export default PrivateRouter