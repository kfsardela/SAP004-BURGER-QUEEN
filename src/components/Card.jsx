import React, { Component } from 'react';
import BtnSaloon from "./Btn-Saloon"


class Card extends Component {
    render() {
        const {mesa, horario, nome, pedido, tempo, button, textButton} = this.props;
        return (
            <div className="cardPedido">
                <div className="dadosPedido">
                <h4>Mesa: {mesa}</h4>
                <p>Nome: {nome}</p>
                <p >Feito às: {horario.substring(11)}</p>
                <p className= "time">Tempo de preparo: {tempo} min</p>
                </div>
                <p className= "pedido">Pedido: {pedido}</p>
                <BtnSaloon className="btnModal btnTest btnPronto" onClick={button} text={textButton}/>
            </div>
        );
    }
}

export default Card;