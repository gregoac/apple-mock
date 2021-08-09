import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import CartWidget from './CartWidget';

class NavBar extends React.Component {
    render(){
        return (
            
            <nav>
                <div className="menu">
                    <ul>
                        <li><FontAwesomeIcon icon={faApple} /></li>
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