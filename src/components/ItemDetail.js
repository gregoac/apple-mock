import React, { useState } from 'react';
import ItemCount from './ItemCount';

function ItemDetail({id, title, price, pictureUrl}){

    const [carrito, setCarrito] = useState(0);

    function onAdd(cantidad){
        setCarrito(cantidad)
    }
    

    // function setItemsCarrito(itemsCarrito){
    //     return new Promise((resolve) => {
    //             resolve(itemsCarrito)
    //     })
    // }

    // useEffect(() => {
    //     setItemsCarrito(itemsCarrito)
    //     .then(setCarrito).then(console.log(carrito))
    // }, [itemsCarrito])

    return(
        <div className="popup" id={id}>
            <h2 style={{marginBottom: 0}}>{title}</h2>
            <img style={{margin: 1.5 + 'rem'}} src={pictureUrl} alt="iphone-img"></img>
            <div className="info-container">
                <span>From $29.12/mo. for 24 mo. <br></br> or {price} before trade-in</span>
            </div>
        <ItemCount stock="10" initial="0" onAdd={onAdd}/>
        {carrito >= 1 ? <button className="add-to-cart" style={{marginTop: 0.5 + 'rem'}}>TERMINAR MI COMPRA</button> : ''}
        </div>
    );

}

export default ItemDetail;