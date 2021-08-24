import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

class ItemCount extends React.Component {
    constructor(props) {
        super(props);
        this.state = { contador: parseInt(this.props.initial)};
    }

    onSumarNumero() {
        this.setState({ contador: this.state.contador >= this.props.stock ? this.state.contador : this.state.contador + 1 });
      }
    
      onRestarNumero() {
        this.setState({ contador: this.state.contador <= 0 ? this.state.contador : this.state.contador - 1 });
      }

    render(){
        return (<>
            <div className="item-count-container">
                <button><FontAwesomeIcon icon={faMinus} onClick={this.onRestarNumero.bind(this)} /></button>
                <input type="number" readOnly value={this.state.contador}></input>
                <button><FontAwesomeIcon icon={faPlus} onClick={this.onSumarNumero.bind(this)} /></button>
            </div>
            <button className="add-to-cart" onClick={() => this.props.onAdd(this.state.contador)}>AÑADIR AL CARRITO</button>
        </>
        )
    }
}

export default ItemCount;