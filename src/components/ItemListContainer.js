import React, { useState, useEffect } from 'react';
import iPhonePhoto from '../assets/iphone12.png';
import ItemList from './ItemList';
// import mockRequest from '../extras/mockRequest';
import {useParams} from 'react-router-dom';
import NavBar from './NavBar';
import { getFirestore } from "../firebase";

function ItemListContainer(props) {

    // const [products, setProducts] = useState([]);
    const [iphones, setIphones] = useState([]);

    // const [prueba, setPrueba] = useState([]);

    const { categoryId } = useParams(); 

    useEffect(() => {
        // mockRequest()
        // .then((data) => {
		// 	if(categoryId === 'iPhone') {
		// 		setProducts(<ItemList items={data}></ItemList>)
		// 	} else {
		// 		setProducts('');
		// 	}
		// })

        ////////////////////

        const db = getFirestore();
        const itemCollection = db.collection("items");
        const iphones = itemCollection.where("categoryId", "==", "iPhone");

        // itemCollection
        // .get()
        // .then((querySnapshot) => {
        //     if (querySnapshot.size === 0) {
        //     console.log("No items");
        //     }
        //     setProducts(
        //     querySnapshot.docs.map((document) => ({
        //         id: document.id,
        //         ...document.data(),
        //     }))
        //     );
        // })
        // .catch((error) => console.log(error))

        if(categoryId == 'iPhone'){

            iphones
            .get()
            .then((querySnapshot) =>
                setIphones(
                querySnapshot.docs.map((document) =>  ({
                    id: document.id,
                    ...document.data()
                }))
                )
            )
            .catch((error) => console.log("error", error));

        }

        return () => {
            setIphones([])
        }

        
    }, [categoryId]);

  
        return(
            <>
            <NavBar></NavBar>
            <header className="header">
                <div className="greetings">
                    <h1>{props.greetings}</h1>
                    <p>{props.subtitle}</p>
                    <span>{props.span}</span>
                </div>
                <img src={iPhonePhoto} alt="iphones-img"></img>
            </header>
            {iphones && <ItemList items={iphones}></ItemList>}
            </>
        )
    
}

export default ItemListContainer;

// From $29.12/mo. for 24 mo. or $699 before trade-in