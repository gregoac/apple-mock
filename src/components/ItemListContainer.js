import React, { useState, useEffect } from 'react';
import iPhonePhoto from '../assets/iphone12.png';
import ItemList from './ItemList';
import mockRequest from '../extras/mockRequest';
import {useParams} from 'react-router-dom';
import NavBar from './NavBar';

function ItemListContainer(props) {

    const [products, setProducts] = useState([]);

    const { categoryId } = useParams(); 

    useEffect(() => {
        mockRequest()
        .then((data) => {
			if(categoryId === 'iPhone') {
				setProducts(<ItemList items={data}></ItemList>)
			} else {
				setProducts('');
			}
		})

        return () => {
            setProducts([])
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
            {products}
            </>
        )
    
}

export default ItemListContainer;

// From $29.12/mo. for 24 mo. or $699 before trade-in