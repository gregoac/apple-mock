import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import productMock from '../extras/productMock';
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

    const [products, setProducts] = useState(null);
    
    useEffect(() => {
        getItems(productMock)
        .then(() => {
            if(itemId === '1'){
                setProducts(productMock)
            } else {
                setProducts(null)
            }
        })
        return () => {
            setProducts([])
        }
    }, [itemId]);

    return (
        <>
            {products  && <ItemDetail {...products} />}
        </>
    )



}

export default ItemDetailContainer;


