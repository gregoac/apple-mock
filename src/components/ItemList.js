import React from 'react';
import Item from './Item';
import {useParams} from 'react-router-dom';

function ItemList({items}){

    const params = useParams()
    console.log({params})


    // const categoryActual = categoryId.location.pathname;

    // const [category, setCategory] = useState([]);

    // useEffect(() => {
    //     if(categoryId === "/category/iPhone"){
    //         setCategory(items.map((item) => (<Item key={item.id} {...item}></Item>)))
    //     } else {
    //         setCategory(<div></div>)
    //     }

    // }, [categoryId])

    return (
    <div className="item-list-container">
        {items.map((item) => (<Item key={item.id} {...item}></Item>))}
    </div>
    )
}

export default ItemList;