import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../style/reset.css";
import logo from '../images/logo2.png';
import Logout from '../components/Logout';
import Button from "@material-ui/core/Button";
import CardapioItem from "../components/CardapioItem";
import CafeManha from "../Json/CafeDaManha.json";
import AlmocoJantar from "../Json/AlmocoJantar.json";
import Bebidas from "../Json/Bebidas.json";
import Acompanhamento from "../Json/Acompanhamento.json";
import Tabela from "../components/Tabela";
import BtnSaloon from "../components/Btn-Saloon"
import Input from "../components/Input"

class Saloon extends Component {

  state = {
    pedido: [],
    total: 0,
    nome: '',
    mesa: 0,
  };

  atualizaPedido = (pedido, valor) => {
    console.log(this.state);
    
    let existe = false;
    
    this.state.pedido.map((item, index) => {
      if(item.descricao === pedido){
        this.state.pedido[index].quantidade++;
        this.state.pedido[index].preco += valor; 
        existe = true;
      }      
    });
    
    if(!existe){
      const novoItem = {
        descricao: pedido,
        preco: valor,
        quantidade: 1
      };
  
      this.setState({pedido:[...this.state.pedido, novoItem]}, ()=>{console.log(this.state)});   
    }
    this.setState({total: this.state.total + valor});  
  };

  remove = (index, valor) => {
    const item = this.state.pedido[index];
    const precoUnit = valor/item.quantidade;

    if(item.quantidade > 1){
      item.preco -= precoUnit;
      item.quantidade--;
    }
    else {
      const {pedido}= this.state
      this.setState(
        {
          pedido: pedido.filter((item, posAtual) => {
            return posAtual !== index;
          }),
        }
      );
    }
    this.setState({total: this.state.total - precoUnit}); 
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
          <h2><img src="./images/menu.png"/></h2>
        <section className= "containerPedido">          
          <div className="containerButtons">
            <BtnSaloon className="btnSaloon" onClick={() => {
                this.selectMenu("manha");
              }}
              text="CAFÉ DA MANHÃ"/>
            <BtnSaloon className="btnSaloon" onClick={() => {
                this.selectMenu("almoco");
              }}
              text="ALMOÇO E JANTAR"/>
            <BtnSaloon className="btnSaloon" onClick={() => {
                this.selectMenu("acompanhamento");
              }}
              text="ACOMPANHAMENTO"/>
            <BtnSaloon className="btnSaloon" onClick={() => {
                this.selectMenu("bebida");
              }}
              text="BEBIDAS"/>
          </div>
          <div id="containerCardapio" className="containerManha"></div> 
          <div  className="resumoPedido">   
          <Input placeholder= "Mesa" type="number" className= "inputSaloon" onChange={e=> this.setState({mesa: e.target.value})}/>
          <Input placeholder= "Nome" type="text" className= "inputSaloon"  onChange={e=> this.setState({nome:  e.target.value})}/>    
            <Tabela pedido={this.state.pedido} remove={this.remove} total={this.state.total}/>
          </div> 
        </section>
            <Button className="btn">Pedidos prontos</Button>
            <Logout></Logout>
      </main>
    );
  }
}

export default Saloon;
