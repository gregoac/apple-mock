import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
// import productMock from '../extras/productMock';
import { getFirestore } from "../firebase";
import { useParams } from 'react-router-dom';
    
// function getItems(data){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(data)
//         }, 2000)
//     })
// }

function ItemDetailContainer(){

    const {itemId} = useParams();

    // const [products, setProducts] = useState(null);

    const [item, setItem] = useState(null);
    
    useEffect(() => {
        // getItems(productMock)
        // .then(() => {
        //     if(itemId === '1'){
        //         setProducts(productMock)
        //     } else {
        //         setProducts(null)
        //     }
        // })

        const db = getFirestore();
        const itemCollection = db.collection("items");
        const currentItem = itemCollection.doc(itemId);

        // Call to document
        currentItem.get().then((document) => {
        if (!document.exists) {
            console.log("No item");
            return;
        }
        setItem({ id: document.id, ...document.data() });
        });

        return () => {
            setItem([])
        }
    }, [itemId]);

    return (
        <>
            {item  && itemId ? <ItemDetail {...item} /> : ''}
        </>
    )



}

export default ItemDetailContainer;


