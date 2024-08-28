// Product.js (or within Biba.js if preferred)

import React from 'react';

const Product = ({ product, addToCart }) => {
  const { id, name, image, price, discountPrice } = product;

  return (
    <div className='biba-item'>
      <p className="sell">Sale</p>
      <br />
      <br />
      <center>
        <img src={image} alt={name} />
      </center>
      <p><center>{name}</center></p>
      <div className="price-details1">
        <p className="pri"><center>₹{price}</center></p>
        <p className="less"><center><strike>₹{discountPrice}</strike></center></p>
      </div>
      <div className="slider1">
        <div className="add-to-cart1">
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
