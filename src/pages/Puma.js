import React from 'react';
import "../styles/Brands.css";
import { Link } from 'react-router-dom';
import PathConstants from '../routes/pathConstants';

export default function Puma() {

  
  return (
   
    <div className="products-container">
        <center><h1>Men's Footware</h1></center>
        <div className='div-one'>
      <div className="product">
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/308158/01/sv01/fnd/IND/fmt/png/Porsche-Legacy-Caven-2.0-Unisex-Motorsport-Sneakers" alt="Product Image"/>
        <div className="product-details">
          <div className="name">Porsche Legacy Caven 2.0 Unisex Motorsport Sneakers</div>
          <div className="price">
            <div className="discounted-price">₹4,199</div>
            <div className="mrp">₹6,999</div>
          </div>
          <div className="discount">Save 20%</div>
          <div className="rating">Rating: ★★★★☆</div>
          <div className="buy1">
          <Link to={PathConstants.MYCART}>
            <input type='button' className='buy' value={"add to cart"}/></Link>
           
           
            </div>  
        </div>
      </div>

      <div className="product">
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/394371/01/sv01/fnd/IND/fmt/png/Smashic-Unisex-Sneakers" alt="Product Image"/>
        <div className="product-details">
          <div className="name">Smashic Unisex Sneakers</div>
          <div className="price">
            <div className="discounted-price">₹2,199</div>
            <div className="mrp">₹4,499</div>
          </div>
          <div className="discount">Save 40%</div>
          <div className="rating">Rating: ★★★★★</div>
         <div className="buy1"><input type='button' className='buy' value={"add to cart"}/></div>
        </div>
      </div>
      <div className="product">
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/394371/02/sv01/fnd/IND/fmt/png/Smashic-Unisex-Sneakers" alt="Product Image"/>
        <div className="product-details">
          <div className="name">Smashic Unisex Sneakers</div>
          <div className="price">
            <div className="discounted-price">₹2,199</div>
            <div className="mrp">₹4,499</div>
          </div>
          <div className="discount">Save 40%</div>
          <div className="rating">Rating: ★★★★★</div>
         <div className="buy1"><input type='button' className='buy' value={"add to cart"}/></div>
        </div>
      </div>
      <div className="product">
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/394005/01/sv01/fnd/IND/fmt/png/Puma-Dexfly-V1-Men's-Sneakers" alt="Product Image"/>
        <div className="product-details">
          <div className="name">Smashic Unisex Sneakers</div>
          <div className="price">
            <div className="discounted-price">₹2,099</div>
            <div className="mrp">₹3,499</div>
          </div>
          <div className="discount">Save 35%</div>
          <div className="rating">Rating: ★★★★★</div>
         <div className="buy1"><input type='button' className='buy' value={"add to cart"}/></div>
        </div>
      </div>
      </div>
      {/* Product 1 */}
      <div className='div-two'>
      <div className="product">
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/391863/02/sv01/fnd/IND/fmt/png/Puma-Alfarun-Men's-Sneakers" alt="Product Image"/>
        <div className="product-details">
          <div className="name">Porsche Legacy Caven 2.0 Unisex Motorsport Sneakers</div>
          <div className="price">
            <div className="discounted-price">₹4,199</div>
            <div className="mrp">₹6,999</div>
          </div>
          <div className="discount1">Save 20%</div>
          <div className="rating">Rating: ★★★★☆</div>
         <div className="buy1"><input type='button' className='buy' value={"add to cart"}/></div>
        </div>
      </div>

      <div className="product">
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/397126/03/sv01/fnd/IND/fmt/png/Puma-Alfarun-Hyperwave-Men's-Sneakers" alt="Product Image"/>
        <div className="product-details">
          <div className="name">Smashic Unisex Sneakers</div>
          <div className="price">
            <div className="discounted-price">₹2,199</div>
            <div className="mrp">₹4,499</div>
          </div>
          <div className="discount">Save 40%</div>
          <div className="rating">Rating: ★★★★★</div>
         <div className="buy1"><input type='button' className='buy' value={"add to cart"}/></div>
        </div>
      </div>
      <div className="product">
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/397126/02/sv01/fnd/IND/fmt/png/Puma-Alfarun-Hyperwave-Men's-Sneakers" alt="Product Image"/>
        <div className="product-details">
          <div className="name">Smashic Unisex Sneakers</div>
          <div className="price">
            <div className="discounted-price">₹2,199</div>
            <div className="mrp">₹4,499</div>
          </div>
          <div className="discount">Save 40%</div>
          <div className="rating">Rating: ★★★★★</div>
         <div className="buy1"><input type='button' className='buy' value={"add to cart"}/></div>
        </div>
      </div>
      <div className="product">
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/379438/07/sv01/fnd/IND/fmt/png/Conduct-Pro-Unisex-Running-Shoes" alt="Product Image"/>
        <div className="product-details">
          <div className="name">Smashic Unisex Sneakers</div>
          <div className="price">
            <div className="discounted-price">₹2,099</div>
            <div className="mrp">₹3,499</div>
          </div>
          <div className="discount">Save 35%</div>
          <div className="rating">Rating: ★★★★★</div>
         <div className="buy1"><input type='button' className='buy' value={"add to cart"}/></div>
        </div>
      </div>
    </div>
       {/* Product 2 */}
      <div className='div-two'>
      <div className="product">
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/395875/04/sv01/fnd/IND/fmt/png/Blktop-Rider-Preppy-Unisex-Sneakers" alt="Product Image"/>
        <div className="product-details">
          <div className="name">Porsche Legacy Caven 2.0 Unisex Motorsport Sneakers</div>
          <div className="price">
            <div className="discounted-price">₹4,199</div>
            <div className="mrp">₹6,999</div>
          </div>
          <div className="discount1">Save 20%</div>
          <div className="rating">Rating: ★★★★☆</div>
         <div className="buy1"><input type='button' className='buy' value={"add to cart"}/></div>
        </div>
      </div>

      <div className="product">
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/388792/03/sv01/fnd/IND/fmt/png/Puma-Vellfire-Unisex-Sneakers" alt="Product Image"/>
        <div className="product-details">
          <div className="name">Smashic Unisex Sneakers</div>
          <div className="price">
            <div className="discounted-price">₹2,199</div>
            <div className="mrp">₹4,499</div>
          </div>
          <div className="discount">Save 40%</div>
          <div className="rating">Rating: ★★★★★</div>
         <div className="buy1"><input type='button' className='buy' value={"add to cart"}/></div>
        </div>
      </div>
      <div className="product">
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/192259/02/sv01/fnd/IND/fmt/png/Hybrid-NX-Men's-Running-Shoes" alt="Product Image"/>
        <div className="product-details">
          <div className="name">Smashic Unisex Sneakers</div>
          <div className="price">
            <div className="discounted-price">₹2,199</div>
            <div className="mrp">₹4,499</div>
          </div>
          <div className="discount">Save 40%</div>
          <div className="rating">Rating: ★★★★★</div>
         <div className="buy1"><input type='button' className='buy' value={"add to cart"}/></div>
        </div>
      </div>
      <div className="product">
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/393266/01/sv01/fnd/IND/fmt/png/Slipstream-Unisex-Bball-Sneakers" alt="Product Image"/>
        <div className="product-details">
          <div className="name">Smashic Unisex Sneakers</div>
          <div className="price">
            <div className="discounted-price">₹2,099</div>
            <div className="mrp">₹3,499</div>
          </div>
          <div className="discount">Save 35%</div>
          <div className="rating">Rating: ★★★★★</div>
         <div className="buy1"><input type='button' className='buy' value={"add to cart"}/></div>
        </div>
      </div>
    </div>
    {/*clothing*/}

    <center><h1>Clothing</h1></center>
    </div>
  );
}
