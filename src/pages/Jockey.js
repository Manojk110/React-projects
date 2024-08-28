import PathConstants from "../routes/pathConstants";
import { Link } from "react-router-dom";
import "../styles/Jockey.css";
import React from 'react';

export default function Jockey() {
  return (
    <div>
      <div className="roll">
        <video width={1460} controls autoPlay muted loop>
          <source src="video1.mp4" type="video/mp4"/>
         
        </video>
      </div>
      <h1><center>ON-TREND PICKS
      Explore Our Promising Line-up</center></h1>
      <div className="roll1">
      <ul>
        <li className='jockey-list'>
            <img src='https://www.jockey.in/cdn/shop/products/2714_WHITE_0105_S123_JKY_1.webp?v=1700035033&width=280'/>
            <center><p>Super Combed Cotton Rich Round <br></br> Neck Half Sleeve T-Shirt - White</p></center> <br></br>
            <p className='flex2'>₹719 <strike className='price'>₹1,299</strike> <p className='offer'>40% OFF</p>
            <input type="button" value={"Add to cart"} className="add1"/>
            </p>
        </li>

        <li className='jockey-list'>
            <img src='https://www.jockey.in/cdn/shop/products/2726_BSGRN_0105_S123_JKY_1.webp?v=1700001941&width=280'/>
            <center><p>Super Combed Cotton Rich Round <br></br> Neck Half Sleeve T-Shirt - White</p></center> <br></br>
            <p className='flex2'>₹1,019 <strike className='price'>₹2,299</strike> <p className='offer'>60% OFF</p>
            <input type="button" value={"Add to cart"} className="add1"/>
            </p>
        </li>

        <li className='jockey-list'>
            <img src='https://www.jockey.in/cdn/shop/products/AM01_CH-NV_0103_S223_JKY_1.webp?v=1700011976&width=280'/>
            <center><p>Super Combed Cotton Rich Round <br></br> Neck Half Sleeve T-Shirt - White</p></center> <br></br>
            <p className='flex2'>₹819 <strike className='price'>₹1,599</strike> <p className='offer'>60% OFF</p>
            <input type="button" value={"Add to cart"} className="add1"/>
            </p>
        </li>
        <li className='jockey-list'>
            <img src='https://www.jockey.in/cdn/shop/files/MV16_NAVY_0103_S125_JKY_1.webp?v=1715316343&width=280'/>
            <center><p>Super Combed Cotton Rich Round <br></br> Neck Half Sleeve T-Shirt - White</p></center> <br></br>
            <p className='flex2'>₹1,009 <strike className='price'>₹2,299</strike> <p className='offer'>55% OFF</p>
            <input type="button" value={"Add to cart"} className="add1"/>
            </p>
        </li>


        <li className='jockey-list'>
            <img src='https://www.jockey.in/cdn/shop/products/MV06_NAVY_0103_S123_JKY_1.webp?v=1700025587&width=280'/>
            <center><p>Super Combed Cotton Rich Round <br></br> Neck Half Sleeve T-Shirt - White</p></center> <br></br>
            <p className='flex2'>₹889 <strike className='price'>₹2,299</strike> <p className='offer'>65% OFF</p>
            <input type="button" value={"Add to cart"} className="add1"/>
            </p>
        </li>

        <li className='jockey-list'>
            <img src='https://www.jockey.in/cdn/shop/files/9928_ECPGN_0105_S124_JKY_1.webp?v=1715242079&width=280'/>
            <center><p>Super Combed Cotton Rich Round <br></br> Neck Half Sleeve T-Shirt - White</p></center> <br></br>
            <p className='flex2'>₹1,019 <strike className='price'>₹2,219</strike> <p className='offer'>50% OFF</p>
            <input type="button" value={"Add to cart"} className="add1"/>
            </p>
        </li>

        <li className='jockey-list'>
            <img src='https://www.jockey.in/cdn/shop/files/MV57_WHITE_0103_S125_JKY_1.webp?v=1715323990&width=280'/>
            <center><p>Super Combed Cotton Rich Round <br></br> Neck Half Sleeve T-Shirt - White</p></center> <br></br>
            <p className='flex2'>₹619 <strike className='price'>₹1,599</strike> <p className='offer'>60% OFF</p>
            <input type="button" value={"Add to cart"} className="add1"/>
            </p>
        </li>
        <li className='jockey-list'>
            <img src='https://www.jockey.in/cdn/shop/files/NewProject.webp?v=1715170479&width=280'/>
            <center><p>Super Combed Cotton Rich Round <br></br> Neck Half Sleeve T-Shirt - White</p></center> <br></br>
            <p className='flex2'>₹1,209 <strike className='price'>₹2,299</strike> <p className='offer'>55% OFF</p>
            <input type="button" value={"Add to cart"} className="add1"/>
            </p>
        </li>
        </ul>
      </div>
    </div>
  );
}
