import React, { useState, useEffect } from 'react';
import iPhonePhoto from '../assets/iphone12.png';
import ItemList from './ItemList';
import iPhonePicture from '../assets/iphone12producto.png';

function ItemListContainer(props) {

    const data = [
        {id: '1', title: 'iPhone 12 Pro', price: '$699', pictureUrl: iPhonePicture},
        {id: '2', title: 'iPhone 11 Pro', price: '$799', pictureUrl: iPhonePicture},
        {id: '3', title: 'iPhone X Pro', price: '$899', pictureUrl: iPhonePicture}
    ]

    function mockRequest(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
            }, 3000)
        })
    }

    const [products, setProducts] = useState([]);

    useEffect(() => {
        mockRequest()
        .then(setProducts)
    }, []);

  
        return(
            <>
            <header className="header">
                <div className="greetings">
                    <h1>{props.greetings}</h1>
                    <p>{props.subtitle}</p>
                    <span>{props.span}</span>
                </div>
                <img src={iPhonePhoto} alt="iphones-img"></img>
            </header>
            <ItemList items={products}></ItemList>
            </>
        )
    
}

export default ItemListContainer;

// From $29.12/mo. for 24 mo. or $699 before trade-in