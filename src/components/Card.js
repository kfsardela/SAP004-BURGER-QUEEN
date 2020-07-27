import React, { Component } from 'react';
import Button from "@material-ui/core/Button";


class Card extends Component {
    render() {
        const {mesa, horario, nome, pedido} = this.props;
        return (
            <div className="card-pedido">
                <h4>Mesa: {mesa}</h4>
                <p>Hora: {horario}</p>
                <p>Nome: {nome}</p>
                <p className= "pedido">Pedido: {pedido}</p>
                <Button className= "btn btn-pronto">Pronto</Button>
            </div>
        );
    }
}

export default Card;