import React, { Component } from "react";
import ReactDOM from "react-dom";
import firebaseFunctions from "../firebase";
import "../style/reset.css";
import CardapioItem from "../components/CardapioItem";
import CafeManha from "../Json/CafeDaManha.json";
import AlmocoJantar from "../Json/AlmocoJantar.json";
import Tabela from "../components/Tabela";
import BtnSaloon from "../components/Btn-Saloon"
import Input from "../components/Input"
import ModalBurger from "../components/ModalBurger"
import Header from "../components/Header";
import swal from 'sweetalert';


const PedacoCardapio = props => {
  return (
    <ul className="menuFlex">
      <h3 className="titleMenu">{props.itens.titulo}</h3>
      {props.itens.conteudo.map((item, index) => (
        <CardapioItem
          onClick={()=> item.descricao.includes('hambúrguer') ? 
            props.atualizaBurger(item.descricao, item.preco) : props.atualizaPedido(item.descricao, item.preco)}
          key={index}
          item={item.descricao}
          valor={item.preco}
          imagem={item.imagem}
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
  
  initialState = {
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
      <ul className="menuMenu">
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
    this.setState({ ...this.initialState });
if (this.state.nome === "" || this.state.mesa === ""){
  swal({
    text: "Por favor, preencha o nome e o numero da mesa",
    icon: "warning",
    button: "Ok",
  });
}

else{
    firebaseFunctions.db.collection("Orders").doc().set({
      nome: this.state.nome,
      mesa: this.state.mesa,
      pedido: this.state.pedido,
      total: this.state.total,
      hora_inicio: firebaseFunctions.firestore.Timestamp.fromDate(new Date()),
      status: "pendente"
    })
    }}
  render() {
    return (
      <main className="kitchen-main">
        <Header isHome={false}/>
          <h2><img className="menu" src="./images/menu.png"/></h2>
        <section className= "containerOrder">  
          <div>        
          <div className="containerButtons">
            <BtnSaloon className="btnSaloon btnTest" onClick={() => {
                this.selectMenu("manha");
              }}
              text="CAFÉ DA MANHÃ"/>
            <BtnSaloon className="btnSaloon btnTest" onClick={() => {
                this.selectMenu("almoco");
              }}
              text="ALMOÇO E JANTAR"/>
          </div>
          <div id="containerCardapio" className="containerManha"></div> 
          </div>
          <div  className="orderSummary">   
          <Input placeholder= "Mesa" type="number" className= "inputSaloon" onChange={e=> this.setState({mesa: e.target.value})}/>
          <Input placeholder= "Nome" type="text" className= "inputSaloon"  onChange={e=> this.setState({nome:  e.target.value})}/>    
            <Tabela pedido={this.state.pedido} remove={this.remove} total={this.state.total}/>
            <BtnSaloon className="btnSaloon btnTest" text="Enviar" onClick={this.submitOrders}/>
            <BtnSaloon className="btnSaloon btnTest" text="Pedidos prontos"/>
          </div> 
          
        </section>
        <div id="divModal"></div>
      </main>
    );
    
  }

 
}

export default Saloon;
