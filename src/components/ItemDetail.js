import React, { useContext } from 'react';
import ItemCount from './ItemCount';
import {Link} from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function ItemDetail({id, title, price, pictureUrl}){

    const {items, clear} = useContext(CartContext)

    // const [carrito, setCarrito] = useState(0);

    // function onAdd(cantidad){
    //     setCarrito(cantidad)
    // }

    return(
        <div className="popup" id={id}>
            <h2 style={{marginBottom: 0}}>{title}</h2>
            <img style={{margin: 1.5 + 'rem'}} src={pictureUrl} alt="iphone-img"></img>
            <div className="info-container">
                <span>From $29.12/mo. for 24 mo. <br></br> or ${price} before trade-in</span>
            </div>
        {items.length !== 0 ? <><Link to='/cart'><button className="add-to-cart" style={{marginTop: 0.8 + 'rem'}}>TERMINAR MI COMPRA</button></Link><button className="add-to-cart" onClick={() => {clear()}} style={{marginTop: 0.8 + 'rem'}}>LIMPIAR CARRITO</button></> : <ItemCount stock="10" initial="0" item={{id, title, price}}/>}
        </div>
    );

}

export default ItemDetail;