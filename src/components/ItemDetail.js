import React, { useContext } from 'react';
import ItemCount from './ItemCount';
import {Link} from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useParams } from 'react-router';

function ItemDetail({id, title, price, pictureUrl, stock}){

    const {items, clear} = useContext(CartContext)

    var arrayItems = [];

    for(var item in items){
        var itemsInCart = items[item];
        arrayItems.push(itemsInCart.item.id);
    }

    const {itemId} = useParams();

    // const [carrito, setCarrito] = useState(0);

    // function onAdd(cantidad){
    //     setCarrito(cantidad)
    // }

    

    // var imgTitle = pictureUrl;

    // var path = require("../assets/"+imgTitle);

    return(
        <div className="popup" id={id}>
            <h2 style={{marginBottom: 0}}>{title}</h2>
            <img style={{margin: 1.5 + 'rem'}} src={pictureUrl} alt="iphone-img"></img>
            <div className="info-container">
                <span>From $29.12/mo. for 24 mo. <br></br> or ${price} before trade-in</span>
            </div>
        {/* {items.length > 0 && items.map(item => {
            if(item.item.id === itemId){
                return(
                    <><Link to='/cart'><button className="add-to-cart" style={{marginTop: 0.8 + 'rem'}}>TERMINAR MI COMPRA</button></Link><button className="add-to-cart" onClick={() => {clear()}} style={{marginTop: 0.8 + 'rem'}}>LIMPIAR CARRITO</button></>
                )
            } else {
                return(
                    <ItemCount stock="10" initial="0" item={{id, title, price}}/>
                )
            }
        }) 
        } */}
        {items.length !== 0 && arrayItems.includes(itemId) ? <><Link to='/cart'><button className="add-to-cart" style={{marginTop: 0.8 + 'rem'}}>TERMINAR MI COMPRA</button></Link><button className="add-to-cart" onClick={() => {clear()}} style={{marginTop: 0.8 + 'rem'}}>LIMPIAR CARRITO</button></> : <ItemCount stock={stock} initial="0" item={{id, title, price, stock, pictureUrl}}/>}
        </div>
    );

}

export default ItemDetail;