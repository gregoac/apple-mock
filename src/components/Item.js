import React from 'react'; 
import ItemCount from './ItemCount';

function Item({id, title, price, pictureUrl}){
    return(
        <div className="shop-card" id={id}>
        <h2>{title}</h2>
        <img src={pictureUrl} alt="iphone-img"></img>
        <span>From $29.12/mo. for 24 mo. or {price} before trade-in</span>
        <ItemCount stock="10" initial="4" onAdd={function(){console.log(this.state.contador)}}></ItemCount>
    </div>
    );
}

export default Item;