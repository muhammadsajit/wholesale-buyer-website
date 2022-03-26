 import React, { useState } from 'react';
 import './Cart.css'

 const Cart = ({cart}) => {
     
    
 
    
      return (
         <div className='cart'>
              <h1>Order summary</h1>
            
              
                  <h3>Selected item:{cart.length}</h3>
            
           
             <p> {cart[0]}</p>
             <p> {cart[1]}</p>
             <p> {cart[2]}</p>
             <p> {cart[3]}</p>

             <button  className='btn'>Choose 1 For me</button>
             <button  className='btn'>Remove Item</button>
            
             
             <div>
            
             </div>
            
        </div>
     );
 };

 export default Cart;