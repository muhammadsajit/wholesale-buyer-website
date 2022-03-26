 import React from 'react';
 import './Cart.css'

 const Cart = ({cart}) => {
    //  console.log(cart)
    console.log(cart)
    
     return (
         <div className='cart'>
              <h1>Order summary</h1>
             <h3>Selected item:{cart.length}</h3>
             
             <div>
            
             </div>
            
        </div>
     );
 };

 export default Cart;