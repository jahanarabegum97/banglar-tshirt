import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../Tshirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'
import toast from 'react-hot-toast';

const Home = () => {
    const tShirts =  useLoaderData();
    console.log(tShirts);
    const [cart, setCart] = useState([]);

    const handleAddToCart = tShirt =>{
        // console.log(tShirt);
      
        // eita kono ekta product k ek bar e behsi 2bar click kra jbe na tar jonno eita use kra.krle alert dibe.
        const exists = cart.find(ts =>ts._id === tShirt._id)
        if(exists){
            toast('You have already added this t-shirt')
        }
        else{
            const newCart = [...cart, tShirt]
            setCart(newCart)
        }

        // //  kono ekta jinis add krte gele jodi simple array hoi taile push kre dibo r seta jodi kono karone state e pore thahole sora sori push krte parbo na. ta hole ki krte hobe noton ekta array ante hobe. seta hocce immutable.

        // const newCart = [...cart, tShirt]
        // setCart(newCart)



    }
    const handleRemoveFromCart = id=>{
        // console.log(id);
        const remaining = cart.filter(ts => ts._id !==id);
        setCart(remaining);
    }

    
    return (
        <div className='home-container'>
            {/* <h2>This is Home: {tshirts.length}</h2> */}
           <div className='t-shirts-container'>
           {
                tShirts.map(tShirt=><TShirt key={tShirt._id} tShirt={tShirt} handleAddToCart={handleAddToCart}></TShirt>)
            }
           </div>
           <div className='cart-container'>
                <Cart  cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
           </div>
        </div>
    );
};

export default Home;