import React, { Component } from 'react';
import "../style/Saloon.css";
import ReactDOM from 'react-dom';

class ModalBurger extends Component {

    radio = document.getElementsByName("tipoCarne");
    checkOvo = document.getElementsByName("ovo");
    checkQueijo = document.getElementsByName("queijo");

    atualizaDescricao = descricao => {
        let hamburguer = "";
        let ovo = "";
        let queijo = ""
        console.log(this.checkOvo);
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
        preco = this.checkOvo[0].checked ? preco+=1 : preco;

        preco = this.checkQueijo[0].checked ? preco+=1 : preco;

        return preco;
    }

    render() {
        const { item, valor, atualizaPedido } = this.props;
        return (

            <div className="modal-burgers">
                <p>Tipo do Hambúrguer</p>
                <input type="radio" value="bovino" name="tipoCarne" />
                <label>Bovino</label>
                <input type="radio" value="frango" name="tipoCarne" />
                <label>Frango</label>
                <input type="radio" value="vegetariano" name="tipoCarne" />
                <label>Vegetariano</label>

                <p>Adicionais</p>
                <input type="checkbox" name="ovo" value="com ovo"/>
                <label>Ovo</label>
                <input type="checkbox" name="queijo" value="com queijo"/>
                <label>Queijo</label>           

                <button onClick={() => {
                    const textoFinal = this.atualizaDescricao(item);
                    const valorFinal = this.atualizaPreco(valor);
                    atualizaPedido(textoFinal, valorFinal);
                    var container = ReactDOM.findDOMNode(this).parentNode;    
                    ReactDOM.unmountComponentAtNode(container);
                }}>Finalizar Hamburguer</button>
            </div>

        );
    }
}

export default ModalBurger;