import React from 'react'
import { Outlet } from "react-router";
import Header from '../../componate/Header';
import Footer from '../../componate/Footer';
const index = () => {
  return (
    <div className=''>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default index
