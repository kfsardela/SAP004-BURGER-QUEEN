import React, { Component } from 'react';
import BtnSaloon from "./Btn-Saloon"


class Card extends Component {
    render() {
        const {mesa, horario, nome, pedido, tempo, button, textButton} = this.props;
        return (
            <div className="cardPedido">
                <p className= "time">Feito em: {horario}</p>
                {tempo?<p className= "time">Tempo de preparo: {tempo} min</p>:""}
                <h4>Mesa: {mesa}</h4>
                <p>Nome: {nome}</p>
                <p className= "pedido">Pedido: {pedido}</p>
                <BtnSaloon className="btnModal btnTest btnPronto" onClick={button} text={textButton}/>
            </div>
        );
    }
}

export default Card;