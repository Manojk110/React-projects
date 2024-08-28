import React from 'react'
import { useState } from 'react';
import "../styles/Biba.css"
import MyCart from '../components/Mycart';
import { Link } from 'react-router-dom';
import PathConstants from '../routes/pathConstants';
export default function Biba() {
  
  
  return (
    <div className='biba-container'>

        <div className='biba-item'>
           <p className="sell">Sale</p> <br></br>
       
        <center>
        <img src="https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw74be63c2/images/ss24/assorted20018ss24teal_1.jpg?sw=242&sh=350" alt="Watch Image" />
        </center>
        <p><center>Teal Cotton Straight Kurta
        </center></p>
        <div className="price-details1">
          <p className="pri"><center>₹1,241</center></p>
          <p className="less"><center><strike>₹2,299</strike></center></p>
        </div>
        <div className="slider1">
          <div className="add-to-cart1">
          <button >Add to cart</button>
         
          </div>
          </div>
        </div>


        <div className='biba-item'>
           <p className="sell">Sale</p> <br></br>
       
        <center>
        <img src="https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dwb367798c/images/ss24/skdvintgetales9270ss24berypnk_1.jpg?sw=242&sh=350" alt="Watch Image" />
        </center>
        <p><center>Printed Kurta Churidar Suit Set

        </center></p>
        <div className="price-details1">
          <p className="pri"><center>₹3,450</center></p>
          <p className="less"><center><strike>₹6,500</strike></center></p>
        </div>
        <div className="slider1">
          <div className="add-to-cart1">
          <button >
          Add to Cart
        </button>
          </div>
          </div>
        </div>


        <div className='biba-item'>
           <p className="sell">Sale</p> <br></br>
       
        <center>
        <img src="https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw614f798e/images/aw23/skdasrtd8911aw23mrn_1.jpg?sw=242&sh=350" alt="Watch Image" />
        </center>
        <p><center> Gathered Kurta Palazzo Suit Set
        </center></p>
        <div className="price-details1">
          <p className="pri"><center>₹2,000</center></p>
          <p className="less"><center><strike>₹3,999</strike></center></p>
        </div>
        <div className="slider1">
          <div className="add-to-cart1">
            <button>Add to Cart</button>
          </div>
          </div>
        </div>


        <div className='biba-item'>
           <p className="sell">Sale</p> <br></br>
     
        <center>
        <img src="https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw9ec09d96/images/ss23/skdbanarasi8681ss23must_1.jpg?sw=242&sh=350" alt="Watch Image" />
        </center>
        <p><center>STRAIGHT KURTA PALAZZO SUIT SET
        </center></p>
        <div className="price-details1">
          <p className="pri"><center>₹2,498</center></p>
          <p className="less"><center><strike>₹4,995</strike></center></p>
        </div>
        <div className="slider1">
          <div className="add-to-cart1">
            <button>Add to Cart</button>
          </div>
          </div>
        </div>

        
        <div className='biba-item'>
           <p className="sell">Sale</p> <br></br>
       
        <center>
        <img src="https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw9ec09d96/images/ss23/skdbanarasi8681ss23must_1.jpg?sw=242&sh=350" alt="Watch Image" />
        </center>
        <p><center>STRAIGHT KURTA PALAZZO SUIT SET
        </center></p>
        <div className="price-details1">
          <p className="pri"><center>₹2,498</center></p>
          <p className="less"><center><strike>₹4,995</strike></center></p>
        </div>
        <div className="slider1">
          <div className="add-to-cart1">
            <button>Add to Cart</button>
          </div>
          </div>
        </div>
       
    </div>
  )
}
