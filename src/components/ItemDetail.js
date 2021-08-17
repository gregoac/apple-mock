import React from 'react';

function ItemDetail({id, title, price, pictureUrl}){

    return(
        <div className="popup" id={id}>
            <h2>{title}</h2>
            <img src={pictureUrl} alt="iphone-img"></img>
            <span>From $29.12/mo. for 24 mo. or {price} before trade-in</span>
        </div>
    );

}

export default ItemDetail;