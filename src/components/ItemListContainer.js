import React from 'react';
import iPhonePhoto from '../assets/iphone12.png';

class ItemListContainer extends React.Component {
    render(){
        return(
            <header className="header">
                <div className="greetings">
                    <h1>{this.props.greetings}</h1>
                    <p>{this.props.subtitle}</p>
                    <span>{this.props.span}</span>
                </div>
                <img src={iPhonePhoto} alt="iphones-img"></img>
            </header>
        )
    }
}

export default ItemListContainer;

// From $29.12/mo. for 24 mo. or $699 before trade-in