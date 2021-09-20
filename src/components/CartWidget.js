import React, {useContext} from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
// import iPhonePicture from '../assets/iphone12producto.png';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function CartWidget() {

    const {items, removeItem} = useContext(CartContext)

    // items.map(item => {
    //     var imgTitle = item.item.pictureUrl;
    //     var path = require("../assets/"+imgTitle);
    //     console.log(path);
    //     var pictureUrl = path.default;
    //     item.item.pictureUrl = pictureUrl;
    //     return item;
    //     // return item.item.pictureUrl = pictureUrl;
    // })

    return (
        <>
        <span style={{display: 'block', position: 'absolute', zIndex: 2000, top: '2.5rem', borderTop: '1px solid #d2d2d7', borderLeft: '1px solid #d2d2d7', right: '12rem', width: 17, backgroundColor: "#fff", height: 17, transform: 'rotate(45deg)'}}></span>
        <div style={{borderRadius: 18, backgroundColor: '#fff', border: '1px solid #d2d2d7'}} className="cart-widget">
        <div style={{borderTop: 'none', color: '#000'}} className="item-container item-container-widget">

            {items.length > 0 ? items.map(item => {
                return(
                <div key={item.item.id} style={{marginTop: '1rem', padding: '0 0 1rem 0', borderBottom: '1px solid #d2d2d7', width: '21rem'}} className="item-cart">
                    <div style={{width: '16%', display: 'flex', alignItems: 'center'}}>
                        <img src={item.item.pictureUrl} style={{width: '100%'}} alt="iphone-pic"></img>
                    </div>
                    <div className='info-card'>
                        <div className='info'>
                            <h2>{item.item.title}</h2>
                        </div>
                        <h2>{item.quantity}</h2>
                        <div>
                            <h2 style={{textAlign: 'right'}}>${item.item.price*item.quantity}.00</h2>
                            <button onClick={() => (removeItem(item.item.id))}>Remove</button>
                        </div>
                    </div>
                </div>
                
                )

            }):
                <p>Yor Bag is empty.</p>
            }
            {items.length > 0 && 
            <Link to={`/cart`}>
                <button className='checkout-button' style={{width: '60%', display: 'block', margin: '0 auto', fontSize: '16px', marginTop: '1rem'}}>Go to Check Out</button>
            </Link>
            }
            
            </div>
        </div>
       
        </>
    )
}

export default CartWidget;