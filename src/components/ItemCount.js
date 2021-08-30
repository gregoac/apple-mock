import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/CartContext';

function ItemCount(props) {
    const {addItem} = useContext(CartContext);

    const [contador, setContador] = useState(parseInt(props.initial));

    const onSumarNumero = () => {
            setContador(contador >= props.stock ? contador : contador + 1)
    }
    
    const onRestarNumero = () => {
            setContador(contador <= 0 ? contador : contador -1)
    }
    
    return (<>
        <div className="item-count-container">
            <button><FontAwesomeIcon icon={faMinus} onClick={onRestarNumero} /></button>
            <input type="number" readOnly value={contador}></input>
            <button><FontAwesomeIcon icon={faPlus} onClick={onSumarNumero}/></button>
        </div>
        <button className="add-to-cart" onClick={() => addItem({item: {...props.item}, quantity: contador})}>AÑADIR AL CARRITO</button>
    </>
    )
    
}

export default ItemCount;