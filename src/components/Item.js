import React from 'react'; 
import ItemCount from './ItemCount';
import {Link} from 'react-router-dom';

function Item({id, title, price, pictureUrl}){

    

    // useEffect(() => {
    //     mockRequestCategory(categoryActual)
    //     .then(setCategory)
    // }, [categoryId]);


    return(
        <Link className="shop-card" to={`/item/${id}`}>
            <div id={id}>
                <h2>{title}</h2>
                <img src={pictureUrl} alt="iphone-img"></img>
                <span>From $29.12/mo. for 24 mo. or {price} before trade-in</span>
                <ItemCount stock="10" initial="4" onAdd={function(){console.log(this.state.contador)}}></ItemCount>
            </div>
        </Link>
    );


    
}

export default Item;