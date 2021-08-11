import React from 'react';
import Item from './Item';

function ItemList({items}){

    return (
    <div className="item-list-container">
        {items.map((item) => (
            <Item item={item}></Item>
        ))}
    </div>
    )
}

export default ItemList;