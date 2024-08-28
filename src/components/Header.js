import "../styles/Header.css"

import { Link } from 'react-router-dom'
import PathConstants from "../routes/pathConstants"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import Mycart from "./Mycart";

// import React from 'react'
import React, { useState } from 'react'

export default function Header() {
    const [searchTerm, setSearchTerm] = useState('');
  


    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };
  

  return (
   <header>
    <div className='header-div'>
    <Link to={PathConstants.SIGNUP} className="sign1">
        <p >Sign Up</p>
        
        </Link>
        
    <h1 className='title'>
        <Link to={PathConstants.TATA}><h2>TATA <br></br> <p className="cliq">CL<p className="i">i</p>Q</p></h2></Link>
        </h1>
        <div className='search-bar'>
                        <input
                            type='text'
                            placeholder='Search...'
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        
                    </div>
        <nav className='navbar'>
        <ul className='nav-list'>
            <li className='nav-item'>
                <Link to={PathConstants.BRANDS}>Brands</Link>
            </li>
            <li className='nav-item'>
                <Link to={PathConstants.CATEGORIES}>Categories</Link>
            </li>
            <li className='nav-item'>
                <Link to={PathConstants.CART}>Login</Link>
            </li>
           <li className="cart-mui">
             <Link to={PathConstants.MYCART} className="ct">
                Mycart
                
             </Link>
            </li>
        
        </ul>
      
    </nav>
    </div>

   </header>
  )
}
