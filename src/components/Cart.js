import React, { useContext, useState, useEffect } from 'react';
import NavBar from './NavBar';
// import iPhonePicture from '../assets/iphone12producto.png';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { getFirestore } from '../firebase';
import firebase from '@firebase/app-compat';

function Cart(){

    const {items, removeItem, clear} = useContext(CartContext)
    const [total, setTotal] = useState(0);
    const [orderCreatedId, setOrderCreatedId] = useState(null);

    // var total = 0;

    // if(items){
    //     for(var item in items){
    //         var itemsInCart = items[item];
    //         total = total + itemsInCart.item.price * itemsInCart.quantity;
    //     }
    // }

    useEffect(() => {
        if (items.length > 0) {
          let currentTotal = 0;
          items.forEach(({ item, quantity }) => {
            currentTotal += item.price * quantity;
          });
          setTotal(currentTotal);
        }
      }, [items]);

      const handleFinishPurchase = () => {
        const newItems = items.map(({ item, quantity }) => ({
          item: {
            id: item.id,
            title: item.title,
            price: item.price,
          },
          quantity,
        }));
        const newOrder = {
          buyer: {
            name: "Gregorio Acosta",
            phone: "+54 3442466438",
            email: "gregoacosta7@gmail.com",
          },
          items: newItems,
          date: firebase.firestore.Timestamp.fromDate(new Date()),
          total,
        };
        const db = getFirestore();
        const orders = db.collection("orders");
        // const docRef = db.collection("items").doc(items[0].item.id);
        const batch = db.batch();
    
        orders
          .add(newOrder)
          .then((response) => {
            console.log("response", response);
            // docRef.update({
            //   stock: items[0].item.stock - items[0].quantity,
            // });
            items.forEach(({ item, quantity }) => {
              const docRef = db.collection("items").doc(item.id);
              batch.update(docRef, { stock: item.stock - quantity });
            });
            batch.commit();
            setOrderCreatedId(response.id);
          })
          .catch((error) => console.log(error))
          .finally(() => {
              clear();
          })
        //   .finally(() => {
        //       setIte
        //   })
      };

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
                <h1>Your bag total is ${total}.00.</h1>
                <span>Free delivery and free returns.</span>
                <button onClick={handleFinishPurchase} className='checkout-button' style={{display: 'block'}}>Check Out</button>
                </>
        :  
                orderCreatedId ? 
                <>
                    <h1>Thanks for your purchase.</h1>
                    <span>Your ID order is: <strong>#{orderCreatedId}</strong></span>
                    <Link to={`/`}>
                        <button onClick={() => {setOrderCreatedId(null)}} className='checkout-button' style={{display: 'block', backgroundColor: 'rgba(0,0,0,.08)', color: '#000'}}>Continue Shopping</button>
                    </Link>
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
                            <img src={item.item.pictureUrl} alt="iphone-pic"></img>
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