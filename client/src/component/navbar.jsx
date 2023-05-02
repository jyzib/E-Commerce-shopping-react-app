import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import Footer from './footer'
const navbar = () => {
  return (
    <div>
     <div className="navbar">
        <div className="left">
            <img className='flag' src="/img/india.png" alt="" />
            <i className="bi bi-caret-down"></i>
            <p>USD <i className="bi bi-caret-down"></i></p>
            <Link className='link' to={'products/1'} ><h3>Women</h3></Link>
            <Link className='link' to={'products/2'} ><h3>Men</h3></Link>
            <Link className='link' to={'products/3'} ><h3>Children</h3></Link>
        </div>
        <div className="center">
            <Link className='link' to={'/'} ><h2>LOGO</h2></Link>

        </div>
        <div className="right">
 <Link className='link' to={'/'} ><h3>Homepage</h3></Link>
 <Link className='link' to={'/'} ><h3>About</h3></Link>
 <Link className='link' to={'/'} ><h3>Contact</h3></Link>
 <Link className='link' to={'/'} ><h3>Store</h3></Link>
 <div className="icon">
 <i className="bi bi-search"></i>
 <i className="bi bi-person-fill"></i>
 <i className="bi bi-heart"></i>
 <span className='cart' ><i className="bi bi-cart3"></i>
 <p className='item'>0</p>
 </span>

 
 </div>

        </div>
     </div>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default navbar
