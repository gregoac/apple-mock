import React, { useContext } from 'react';
import NavBar from './NavBar';
import iPhonePicture from '../assets/iphone12producto.png';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Cart(){

    const {items, removeItem} = useContext(CartContext)

    var totalPrice = 0;

    if(items){
        for(var item in items){
            var itemsInCart = items[item];
            totalPrice = totalPrice + itemsInCart.item.price * itemsInCart.quantity;
        }
    }

    return(
    < div className="cart-container">
        <NavBar/>

        {/* {items.length > 0 ? 
            <div style={{textAlign: 'center'}}>
            {items.map(item)}
        :
        
        } */}

        {/* {items.length > 0 ? items.map(item => {
                return ( 
                    <div key={item.item.id} style={{textAlign: 'center'}}>
                        <h1>Your bag total is ${item.item.price*item.quantity}.00.</h1>
                        <span>Free delivery and free returns.</span>
                        <button className='checkout-button' style={{display: 'block'}}>Check Out</button>
                    </div>
                )
            
        }): */}
        <div style={{textAlign: 'center'}}>
        {items.length > 0 ? 
                <>
                <h1>Your bag total is ${totalPrice}.00.</h1>
                <span>Free delivery and free returns.</span>
                <button className='checkout-button' style={{display: 'block'}}>Check Out</button>
                </>
        : 
            <>
            <h1>Your bag is empty.</h1>
            <Link to={`/`}>
                <button className='checkout-button' style={{display: 'block', backgroundColor: 'rgba(0,0,0,.08)', color: '#000'}}>Continue Shopping</button>
            </Link>
            </>
        }
        </div>
        
        
        
        <div className="item-container" style={{borderTop: 'none'}}>
            {items.length > 0 && items.map(item => { 
                return (
                        <div key={item.item.id} style={{marginTop: 0, paddingTop: '4rem', paddingBottom: '4rem', borderTop: '1px solid #d2d2d7'}} className="item-cart">
                            <img src={iPhonePicture} alt="iphone-pic"></img>
                            <div className='info-card'>
                                <div className='info'>
                                    <h2>{item.item.title}</h2>
                                    <h4>Carrier:</h4>
                                    <p>Connect to your own later</p>
                                </div>
                                <h2>{item.quantity}</h2>
                                <div>
                                    <h2>${item.item.price*item.quantity}.00</h2>
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