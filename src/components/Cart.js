import React, { useContext } from 'react';
import NavBar from './NavBar';
import iPhonePicture from '../assets/iphone12producto.png';
import { CartContext } from '../context/CartContext';

function Cart(){

    const {items, removeItem} = useContext(CartContext)

    return(
    < div className="cart-container">
        <NavBar/>
        <div style={{textAlign: 'center'}}>
            <h1>Your bag total is $699.</h1>
            <span>Free delivery and free returns.</span>
            <button className='checkout-button' style={{display: 'block'}}>Check Out</button>
        </div>
        
        <div className="item-container">
            {items.map(item => { 
            return (
                <div key={item.item.id} className="item-cart">
                    <img src={iPhonePicture} alt="iphone-pic"></img>
                    <div className='info-card'>
                        <div className='info'>
                            <h2>{item.item.title}</h2>
                            <h4>Carrier:</h4>
                            <p>Connect to your own later</p>
                        </div>
                        <h2>{item.quantity}</h2>
                        <div>
                            <h2>${item.item.price*item.quantity}</h2>
                            <button onClick={() => (removeItem(item.item.id))}>Remove</button>
                        </div>
                    </div>
                </div>
            )
            })}
        </div>
    </div>
    )
}

export default Cart;