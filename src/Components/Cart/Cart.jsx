

// // ager code mane conditional rendering korar ager 

// import React from 'react';

// const Cart = ({cart,handleRemoveFromCart}) => {
//     return (
//         <div>
//             <h2>Order Summary: {cart.length}</h2>
//             {
//                 cart.map(tShirt => <p key={tShirt._id}>{tShirt.name} <button onClick={()=>handleRemoveFromCart(tShirt._id)}>X</button></p>)
//             }
//         </div>
//     );
// };

// export default Cart;


// // conditional rendering korar pore
import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please add some products</p>
    }
    else{
        message = <div>
            <h3>Boroloxxx</h3>
            <p>Thanks for giving your money</p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length === 1? 'red':'orange'}>Order Summary: {cart.length}</h2>
            <p className={`bold bordered ${cart.length === 3 ? 'purple': 'orange'} `}>Something</p>

            {/* Ternary operator */}
            {cart.length > 2 ? <span className='red'>Aro kino</span> : <span>Fokira</span>}
           {message}

            {
                cart.map(tShirt => <p key={tShirt._id}>{tShirt.name} <button onClick={()=>handleRemoveFromCart(tShirt._id)}>X</button></p>)
            }

            {/* <logical && > */}
            {
                cart.length === 2 && <p>Double Bonanza !!!</p>
            }
            {/* <logical || > */}
    
            {
                cart.length === 3 || <h3>Tinta to holo na</h3>
            }
        </div>
    );
}

export default Cart;


/**
 * Conditional rendering: 
 * 1. use if or if else, else if to set a variable that will contain an element, components.
 * 2. Ternary: condition ?'for true': 'false'
 * 3.Logical && : (if the condition is true then the next thing will be displayed)
 * 4.logical || If the condition is false then the next thing will be displayed.
 * **/ 
/* conditional css class
*1. ternary
*2. use template string.
*/

