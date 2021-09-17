import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';
import menuItems from '../extras/menu';

function NavBar() {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(true);
    }

    const offHover = () => {
        setHover(false);
    }
    
    return (
            <nav>
                <div className="menu">
                    <ul>
                        <li><Link to={`/`}><FontAwesomeIcon icon={faApple} /></Link></li>
                        {menuItems.map((item) => (
                            <Link key={item} to={`/category/${item}`}>
                                <li><p>{item}</p></li>
                            </Link>
                        ))}
                        <li><FontAwesomeIcon icon={faSearch} /></li>
                        {/* <Link to={`/cart`}> */}
                            <li key='cart-icon' onClick={!hover ? () => {onHover()} : () => {offHover()}}><FontAwesomeIcon icon={faShoppingBag} /></li>
                        {/* </Link> */}
                        {hover && <CartWidget/>}
                    </ul>
                </div>
            </nav>
    )
}


export default NavBar;