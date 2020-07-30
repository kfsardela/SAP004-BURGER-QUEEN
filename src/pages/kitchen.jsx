import React, { useState, useEffect } from 'react';
import firebaseFunctions from "../firebase";
import Logout from '../components/Logout';
import logo from '../images/logo2.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../style/Kitchen.css';
import Card from '../components/Card';
import Button from "@material-ui/core/Button";

export default function Kitchen() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
    };

    let [table, setTable] = useState([]);
   

    useEffect(() => {
      firebaseFunctions.db.collection("Orders")
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
        <header>
          <h1 ><img  src= {logo} className="img-kichen"></img></h1>
        </header>
        <h2><img src="./images/pedidos.png"/> <br></br> <img src="./images/pendentes.png"/></h2>
          <Slider {...settings} className="carrossel">
            {
              table.map(item => 
                <Card mesa={item.mesa} horario={item.horario} nome={item.nome} pedido={item.pedido && item.pedido.map(item=>`${item.quantidade} ${item.descricao}`).join()} />
              )
            }
        </Slider>
        <Button className="btn">Pedidos prontos</Button>
        <Logout></Logout>   
      </main>

    );
  }