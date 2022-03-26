 import React from 'react';
 import './Cart.css'

 const Cart = ({cart}) => {
    console.log(cart)

     
      
   
    
     return (
         <div className='cart'>
              <h1>Order summary</h1>
              
                  <h3>Selected item:{cart.length}</h3>
            
           
             <p> {cart[0]}</p>
             <p> {cart[1]}</p>
             <p> {cart[2]}</p>
             <p> {cart[3]}</p>
            
             
             <div>
            
             </div>
            
        </div>
     );
 };

 export default Cart;