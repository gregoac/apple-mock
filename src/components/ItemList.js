import React from 'react';
import Item from './Item';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';

function ItemList({items}){

    const {categoryId} = useParams();

    const [category, setCategory] = useState([]);

    useEffect(() => {
        if(categoryId === "iPhone"){
            setCategory(items.map((item) => (<Item key={item.id} {...item}></Item>)))
        } else {
            setCategory('')
        }

    }, [categoryId])

    return (
    <div className="item-list-container">
        {category}
    </div>
    )
}

export default ItemList;