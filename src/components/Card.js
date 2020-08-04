import React, { Component } from 'react';
import BtnSaloon from "../components/Btn-Saloon"


class Card extends Component {
    render() {
        const {mesa, horario, nome, pedido} = this.props;
        return (
            <div className="cardPedido">
                <p>Hora: {horario}</p>
                <h4>Mesa: {mesa}</h4>
                <p>Nome: {nome}</p>
                <p className= "pedido">Pedido: {pedido}</p>
                <BtnSaloon className="btnModal btnTest btnPronto" text="Pronto"/>
            </div>
        );
    }
}

export default Card;