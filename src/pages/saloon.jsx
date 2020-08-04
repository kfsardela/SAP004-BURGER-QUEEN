import React, { Component } from "react";
import ReactDOM from "react-dom";
import firebaseFunctions from "../firebase";
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
import ModalBurger from "../components/ModalBurger"

const PedacoCardapio = props => {
  return (
    <ul>
      <h3>{props.itens.titulo}</h3>
      {props.itens.conteudo.map((item, index) => (
        <CardapioItem
          onClick={()=> item.descricao.includes('hambúrguer') ? 
            props.atualizaBurger(item.descricao, item.preco) : props.atualizaPedido(item.descricao, item.preco)}
          key={index}
          item={item.descricao}
          valor={item.preco}
        />
      ))}
    </ul>
  );  
};

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

  atualizaBurger = (burger, preco) => {
    
    const cardapio = document.getElementById("divModal");

    ReactDOM.render(
      <ModalBurger item={burger} valor={preco} atualizaPedido={this.atualizaPedido}/>
      , cardapio
    ) 
   
  }


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
        {tipoCardapio.map((tipo, i) => 
          <PedacoCardapio key={i} itens={tipo} atualizaPedido={this.atualizaPedido} 
            atualizaBurger={this.atualizaBurger}/>
        )}
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
    } 
  };
  submitOrders = () => {
    firebaseFunctions.db.collection("Orders").doc().set({
      nome: this.state.nome,
      mesa: this.state.mesa,
      pedido: this.state.pedido,
      total: this.state.total,
      hora_inicio: firebaseFunctions.firestore.Timestamp.fromDate(new Date()),
      status: "pendente"
    })
    }
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
          </div>
          <div id="containerCardapio" className="containerManha"></div> 
          <div  className="resumoPedido">   
          <Input placeholder= "Mesa" type="number" className= "inputSaloon" onChange={e=> this.setState({mesa: e.target.value})}/>
          <Input placeholder= "Nome" type="text" className= "inputSaloon"  onChange={e=> this.setState({nome:  e.target.value})}/>    
            <Tabela pedido={this.state.pedido} remove={this.remove} total={this.state.total}/>
          </div> 
          
        </section>
        <button className="btn-register" onClick={this.submitOrders}>Enviar</button>
            <Button className="btn">Pedidos prontos</Button>
            <Logout></Logout>
        <div id="divModal"></div>
      </main>
    );
    
  }

 
}

export default Saloon;
