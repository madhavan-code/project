import React from 'react'
import './nav.css';

import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
   <div className='pic'>
    <div className='box'>
     <div className='tx'><h3>WELCOME TO ALL</h3></div> 
      <h3>CLICK THE REGISTER</h3>
      <div className='tm'>
      <Link to='/login' className=" btn btn-success add-btn">REGISTER </Link></div>
    </div>
    </div>
    </>
  )
}

export default Home
