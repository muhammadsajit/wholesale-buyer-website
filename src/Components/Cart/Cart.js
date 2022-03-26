 import React from 'react';
 import './Cart.css'

 const Cart = ({cart}) => {
     
      
   
    
     return (
         <div className='cart'>
              <h1>Order summary</h1>
             <h3>Selected item:{cart.length}</h3>
             <h1> selectname:</h1>
             
             <div>
            
             </div>
            
        </div>
     );
 };

 export default Cart;