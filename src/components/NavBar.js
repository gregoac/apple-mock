import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
    render(){
        return (
            
            <nav>
                <div className="menu">
                    <ul>
                        <li><Link to={`/home`}><FontAwesomeIcon icon={faApple} /></Link></li>
                        <li><p>Mac</p></li>
                        <li><p>iPad</p></li>
                        <li><p>iPhone</p></li>
                        <li><p>Watch</p></li>
                        <li><p>TV</p></li>
                        <li><p>Music</p></li>
                        <li><p>Soporte</p></li>
                        <li><p>Dónde comprar</p></li>
                        <li><FontAwesomeIcon icon={faSearch} /></li>
                        <li><CartWidget></CartWidget></li>
                    </ul>
                </div>
            </nav>
        
        )
    }
}

export default NavBar;