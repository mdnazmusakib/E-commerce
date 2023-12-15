import React from 'react'
import {all_product} from '../../assets/all_product'
import {Product} from './Product'
import './Shop.css'
export const Shop = () => {
  return (
    <div className="Shop">
        <div className="shopTitle">
            <h1>Sorry_IIUC Shop</h1>
         </div> 
         <div className='products'>{all_product.map((product)=>
         <Product data={product}/>
         )}</div>
    </div>
  );
};
