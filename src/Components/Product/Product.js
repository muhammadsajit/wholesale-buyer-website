import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const{handleAddToCart,product}=props;
    const {name,img,price}=product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='name-info'>{name}</p>
            <p>Price:${price}</p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className='button-cart'><p className='btn-text'>Add to cart</p><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
            <div>
                
            </div>
             
        </div>
       
    );
};

export default Product;