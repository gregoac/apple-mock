import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import data from '../extras/dataArray';
    
function getItems(data){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 2000)
    })
}

function ItemDetailContainer(){

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        getItems(data)
        .then(setProducts)
    }, []);

    return (
        products.map((product) => (
            <ItemDetail key={product.id} {...product}></ItemDetail>
        ))
    )



}

export default ItemDetailContainer;


