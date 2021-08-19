import React, { useState, useEffect } from 'react';
import iPhonePhoto from '../assets/iphone12.png';
import ItemList from './ItemList';
import mockRequest from '../extras/mockRequest';
import {useParams} from 'react-router-dom';
import NavBar from './NavBar';

function ItemListContainer(props) {

    const {categoryId} = useParams()
    console.log(categoryId)

    // const { categoryId } = useParams();

    // console.log(categoryId);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        mockRequest()
        .then(setProducts)
    }, []);

  
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
            <ItemList items={products}></ItemList>
            </>
        )
    
}

export default ItemListContainer;

// From $29.12/mo. for 24 mo. or $699 before trade-in