import React from 'react'
const date = new Date().getFullYear()
const footer = () => {
  return (
    <div className='footer' >
     <div className="top-footer">
       <div className="first">
        <h3>Catagories</h3>
        <ul>
            <li>Women</li>
            <li>Men</li>
            <li>Children</li>
            <li>Shoes</li>
            <li>Accessories</li>
            <li>New Arrivals</li>
        </ul>
       </div>
       <div className="second">
       <h3>Catagories</h3>
        <ul>
            <li>Women</li>
            <li>Men</li>
            <li>Children</li>
            <li>Shoes</li>
            <li>Accessories</li>
            <li>New Arrivals</li>
        </ul>


       </div>
       <div className="third">
        <p>About</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, impedit non aspernatur alias at ipsum sint recusandae ut id sunt. Eius illum dolorum omnis ut natus expedita laudantium sunt dicta.</p>
       </div>
       <div className="forth">
        <p>Contact</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, impedit non aspernatur alias at ipsum sint recusandae ut id sunt. Eius illum dolorum omnis ut natus expedita laudantium sunt dicta.</p>
       </div>



     </div>
     <div className="botoom-footer">
        <div className="left-footer">
         <h3>logo</h3>
         <p>&#169; copyright {date} all Right Reserved</p>
        </div>
        <div className="right-footer">
         <img className='payment-img' src="img/payment-footer.png" alt="" />
        </div>
      
     </div>
    </div>
  )
}

export default footer
