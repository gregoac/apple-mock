import React from 'react'; 
// import ItemCount from './ItemCount';
import {Link} from 'react-router-dom';

function Item({id, title, price, pictureUrl}){

    
    // var imgTitle = pictureUrl;
    // // useEffect(() => {
    // //     mockRequestCategory(categoryActual)
    // //     .then(setCategory)
    // // }, [categoryId]);

    // var path = require("../assets/"+imgTitle);

    return(
        <Link className="shop-card" to={`/item/${id}`}>
            <div id={id}>
                <h2>{title}</h2>
                <img src={pictureUrl} alt="iphone-img"></img>
                <span>From $29.12/mo. for 24 mo. or ${price} before trade-in</span>
                <button className='checkout-button' style={{width: '40%', borderRadius: 980, display: 'flex', justifyContent: 'space-around'}}>Buy</button>
                {/* <ItemCount stock="10" initial="4" onAdd={function(){console.log(this.state.contador)}}></ItemCount> */}
            </div>
        </Link>
    );


    
}

export default Item;