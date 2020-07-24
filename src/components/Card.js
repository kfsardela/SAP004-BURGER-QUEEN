import React, { Component } from 'react';


class Card extends Component {
    render() {
        const {mesa, horario, nome, pedido} = this.props;
        return (
            <div className="card-pedido">
                <h4>Mesa:{mesa}</h4>
                <p>Hora:{horario}</p>
                <p>Nome:{nome}</p>
                <p>Pedido:{pedido}</p>
                <button>Pronto</button>
            </div>
        );
    }
}

export default Card;