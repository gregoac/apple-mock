import React from 'react'; 
import ItemCount from './ItemCount';

function Item({item}){
    return(
        <div className="shop-card" id={item.id}>
        <h2>{item.title}</h2>
        <img src={item.pictureUrl} alt="iphone-img"></img>
        <span>From $29.12/mo. for 24 mo. or {item.price} before trade-in</span>
        <ItemCount stock="10" initial="4" onAdd={function(){console.log(this.state.contador)}}></ItemCount>
    </div>
    );
}

export default Item;