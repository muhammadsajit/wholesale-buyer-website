import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name,img,price}=props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='name-info'>{name}</p>
            <p>Price:${price}</p>
            </div>
            <button  className='button-cart'><p className='btn-text'>Add to cart</p><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
             
        </div>
    );
};

export default Product;