import React, {useState, useEffect} from 'react';
import iPhonePicture from '../assets/iphone12producto.png';
import ItemDetail from './ItemDetail';
    
function getItems(data){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 2000)
    })
}

function ItemDetailContainer(){

    const data = [
        {id: '1', title: 'iPhone 12 Pro', price: '$699', pictureUrl: iPhonePicture}
    ]

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        getItems(data)
        .then(setProducts)
    }, []);

    console.log(...products);

    return (
        products.map((product) => (
            <ItemDetail key={product.id} {...product}></ItemDetail>
        ))

    )
    



}

export default ItemDetailContainer;


