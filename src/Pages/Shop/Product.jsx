import React from 'react'
export const Product = (props) => {
  const {id, title, price, image} = props.data;
  return <div className='product'>
    <img src={image} />
    <div className='description'>
        <p>
            <b>{title}</b>
        </p>
        <p>${price}</p>
    </div>
    <button className="addToCartBttn" >
        Add To Cart
    </button>
  </div>
}
