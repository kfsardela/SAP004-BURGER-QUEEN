import React, { Component } from 'react';
import BtnSaloon from "../components/Btn-Saloon"


class Card extends Component {
    render() {
        const {mesa, horario, nome, pedido, tempo, button} = this.props;
        return (
            <div className="cardPedido">
                <p>Feito em: {horario}</p>
                {tempo?<p>Tempo de preparo: {tempo} min</p>:""}
                <h4>Mesa: {mesa}</h4>
                <p>Nome: {nome}</p>
                <p className= "pedido">Pedido: {pedido}</p>
                {/* <Button className= "btn btn-pronto" onClick={button}>Pronto</Button> */}
                <BtnSaloon className="btnModal btnTest btnPronto" onClick={button} text="Pronto"/>
            </div>
        );
    }
}

export default Card;