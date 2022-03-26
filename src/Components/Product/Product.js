import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name,img,price}=props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='name-info'>{name}</p>
            <p>Price:${price}</p>
            </div>
        </div>
    );
};

export default Product;