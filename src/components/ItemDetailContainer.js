import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import data from '../extras/dataArray';
import { useParams } from 'react-router-dom';
    
function getItems(data){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 2000)
    })
}

function ItemDetailContainer(){

    const {itemId} = useParams();

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        getItems(data)
        .then(() => {
            if(itemId === '1'){
                setProducts(data.map((product) => (
                    <ItemDetail key={product.id} {...product}></ItemDetail>
                )))
            } else {
                setProducts('')
            }
        })
    }, [itemId]);

    return (
        <>
            {products}
        </>
    )



}

export default ItemDetailContainer;


