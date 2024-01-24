import React from 'react'
import '../Footer.css'

const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="blogr">
            <h1>Blogr</h1>
        </div>
        <div className="otherside">
        <div className="product">
            <h2>Product</h2>
            <ul>
                <li><a className='linker' href="">Overview</a></li>
                <li><a className='linker' href="">Pricing</a></li>
                <li><a className='linker' href="">Marketplace</a></li>
                <li><a className='linker' href="">Features</a></li>
                <li><a className='linker' href="">Integrations</a></li>
            </ul>
        </div>
        <div className="product">
             <h2>Company</h2>
            <ul>
                <li><a className='linker' href="">About</a></li>
                <li><a className='linker' href="">Team</a></li>
                <li><a className='linker' href="">Blog</a></li>
                <li><a className='linker' href="">Careers</a></li>
            </ul>
        </div>
        <div className="product">
                 <h2>Connect</h2>
            <ul>
                <li><a className='linker' href="">Contact</a></li>
                <li><a className='linker' href="">Newsletter</a></li>
                <li><a className='linker' href="">Linkedin</a></li>
            </ul>
        </div>
        </div>
        </div>    
    </>
  )
}

export default Footer