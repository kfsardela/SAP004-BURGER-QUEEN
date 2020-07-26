import React, { Component } from 'react';
import "../style/Saloon.css"


class CardapioItem extends Component {

    render() {
        const { item, valor, onClick } = this.props;
        return (
           
                <li><button onClick={onClick} className="btn-item"> {item}  -  {valor}</button></li>

        );
    }
}

export default CardapioItem;