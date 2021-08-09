import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

class CartWidget extends React.Component {
    render(){
        return (
            <FontAwesomeIcon icon={faShoppingBag} />
        )
    }
}

export default CartWidget;