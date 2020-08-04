import React, { useState, useEffect } from 'react';
import firebaseFunctions from "../firebase";
import Logout from '../components/Logout';
import logo from '../images/logo2.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../style/Kitchen.css';
import Card from '../components/Card';
import BtnSaloon from "../components/Btn-Saloon"


export default function Kitchen() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: false,
      autoplaySpeed: 4000,
    };

    let [table, setTable] = useState([]);
   

    useEffect(() => {
      firebaseFunctions.db.collection("Orders").orderBy("hora_inicio", "asc")
      .onSnapshot(function(querySnapshot){
        let tableList = [];
        
        querySnapshot.docs.forEach(function(doc) {
          tableList.push(doc.data());
        });
        
        setTable(tableList)
      })
    })
    
    return (
      
      <main className= "kitchen-main">
        <header className="headerSaloon">
          <div></div>
          <h1 ><img  src= {logo} className="logoSaloon"></img></h1>
            <Logout></Logout>   
        </header>
        <h2><img src="./images/pedidos.png"/> <br></br> <img src="./images/pendentes.png"/></h2>
          <Slider {...settings} className="carrossel">
            {
              table.map((item, index) => 
                <Card key={index} mesa={item.mesa} horario={item.hora_inicio.toDate().toLocaleString('pt-BR')} nome={item.nome} pedido={item.pedido && item.pedido.map(item=>`${item.quantidade} ${item.descricao}`).join()} />
              )
            }
        </Slider>
        <BtnSaloon className="btnSaloon btnTest" text="Pedidos prontos"/>
      </main>

    );
  }