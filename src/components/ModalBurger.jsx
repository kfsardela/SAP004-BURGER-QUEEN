import React, { Component } from 'react';
import "../style/Saloon.css";
import ReactDOM from 'react-dom';
import BtnSaloon from './Btn-Saloon';

class ModalBurger extends Component {

    radio = document.getElementsByName("tipoCarne");
    checkOvo = document.getElementsByName("ovo");
    checkQueijo = document.getElementsByName("queijo");

    atualizaDescricao = descricao => {
        let hamburguer = "";
        let ovo = "";
        let queijo = "";
 
        for (let i = 0; i < this.radio.length; i++) {
            if (this.radio[i].checked) {
                hamburguer = ` ${this.radio[i].value}`;
            }
        }
        ovo = this.checkOvo[0].checked ? ` ${this.checkOvo[0].value}` : "";

        queijo = this.checkQueijo[0].checked ? ` ${this.checkQueijo[0].value}` : "";

        return descricao += `${hamburguer}${ovo}${queijo}`;
    }

    atualizaPreco = preco => {
        preco = this.checkOvo[0].checked ? preco += 1 : preco;

        preco = this.checkQueijo[0].checked ? preco += 1 : preco;

        return preco;
    }

    render() {
        const { item, valor, updatePedido } = this.props;
        return (

            <div className="modalBurgers">
                <p className="titleModal">Tipo do Hambúrguer</p>
                <div className="menuModal">
                    <input className="modalSpace" type="radio" value="bovino" name="tipoCarne" />
                    <label>Bovino</label><br />
                    <input className="modalSpace" type="radio" value="frango" name="tipoCarne" />
                    <label>Frango</label><br />
                    <input className="modalSpace" type="radio" value="vegetariano" name="tipoCarne" />
                    <label>Vegetariano</label><br />
                </div>

                <p className="titleModal">Adicionais</p>
                <div className="menuModal">
                    <input className="modalSpace" type="checkbox" name="ovo" value="com ovo" />
                    <label>Ovo</label><br />
                    <input className="modalSpace" type="checkbox" name="queijo" value="com queijo" />
                    <label>Queijo</label><br />
                </div>

                <BtnSaloon className="btnModal btnTest" text="ok" onClick={() => {
                    const textoFinal = this.atualizaDescricao(item);
                    const valorFinal = this.atualizaPreco(valor);
                    updatePedido(textoFinal, valorFinal);
                    let container = ReactDOM.findDOMNode(this).parentNode;
                    ReactDOM.unmountComponentAtNode(container);
                }}></BtnSaloon>
            </div>

        );
    }
}

export default ModalBurger;