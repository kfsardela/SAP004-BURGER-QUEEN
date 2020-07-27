import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../style/reset.css";
import logo from '../images/logo2.png';
import Button from "@material-ui/core/Button";
import CardapioItem from "../components/CardapioItem";
import CafeManha from "../Json/CafeDaManha.json";
import AlmocoJantar from "../Json/AlmocoJantar.json";
import Bebidas from "../Json/Bebidas.json";
import Acompanhamento from "../Json/Acompanhamento.json";

class Saloon extends Component {

  state = {
    pedido: [],
    total: 0,
  };

  atualizaPedido = (pedido, valor) => {
    const novoItem = {
      descricao: pedido,
      preco: valor
    };

    this.setState({pedido:[...this.state.pedido, novoItem]}, ()=>{console.log(this.state)})
    this.setState({total: this.state.total + valor});    
  };

  renderizaCardapio = (tipoCardapio) => {
    const cardapio = document.getElementById("containerCardapio");    
    
    ReactDOM.render(
      <ul>
        {tipoCardapio.map((item, index) => (
          <CardapioItem
            onClick={()=> this.atualizaPedido(item.descricao, item.preco)}
            key={index}
            item={item.descricao}
            valor={item.preco}
          />
        ))}
      </ul>,
      cardapio
    );
  }

  selectMenu = (opcao) => {
    switch (opcao) {
      case "manha":
        this.renderizaCardapio(CafeManha);
        break;
      case "almoco":
        this.renderizaCardapio(AlmocoJantar);
        break;
      case "acompanhamento":
        this.renderizaCardapio(Acompanhamento);
        break;
      case "bebida":
        this.renderizaCardapio(Bebidas);
        break;
    } 
  };

  render() {
    return (
      <main className="kitchen-main">
        <header>
          <h1>
            <img src={logo} className="img-kichen"></img>
          </h1>
        </header>
        <section>
          <h2><img src="./images/menu.png"/></h2>
          <div className="containerButtons">
            <Button
              className="btn"
              onClick={() => {
                this.selectMenu("manha");
              }}
            >
              CAFÉ DA MANHÃ
            </Button>
            <Button
              className="btn"
              onClick={() => {
                this.selectMenu("almoco");
              }}
            >
              ALMOÇO E JANTAR
            </Button>
            <Button
              className="btn"
              onClick={() => {
                this.selectMenu("acompanhamento");
              }}
            >
              ACOMPANHAMENTOS
            </Button>
            <Button
              className="btn"
              onClick={() => {
                this.selectMenu("bebida");
              }}
            >
              BEBIDAS
            </Button>
          </div>
          <div id="containerCardapio" className="containerManha"></div>
            <Button className="btn">Pedidos prontos</Button>
            <Button className="btn">Sair</Button>
        </section>
      </main>
    );
  }
}

export default Saloon;
