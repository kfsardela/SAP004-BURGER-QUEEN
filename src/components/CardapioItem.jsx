import React, { Component } from 'react';
import "../style/Saloon.css"


class CardapioItem extends Component {

    render() {
        const { item, valor, onClick, imagem } = this.props;
        console.log(imagem);
        return (
           
                <li className="itemMenu"><img alt="title3" className="imgMenu" src={imagem}/><button onClick={onClick} className="btnItems btnTest"> {item}  <br/>  R$ {valor}</button></li>

        );
    }
}

export default CardapioItem;