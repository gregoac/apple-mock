import React from 'react';

function ItemDetail({id, title, price, pictureUrl}){

    return(
        <div className="popup" id={id}>
            <img src={pictureUrl} alt="iphone-img"></img>
            <div className="info-container">
                <h2>{title}</h2>
                <span>From $29.12/mo. for 24 mo. <br></br> or {price} before trade-in</span>
            </div>
        </div>
    );

}

export default ItemDetail;