import React, { useState, useEffect } from 'react';
import firebaseFunctions from "../firebase";
import Logout from '../components/Logout';
import logo from '../images/logo2.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../style/Kitchen.css';
import Card from '../components/Card';

export default function Orders() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
  };

    let [pedido, setPedido] = useState([]);
   

    useEffect(() => {
      firebaseFunctions.db.collection("Orders")
      .where("status", "==", "pronto")
      .orderBy("hora_fim", "asc")
      .onSnapshot(function(querySnapshot){
        let pedidoList = [];

        querySnapshot.docs.forEach(function(doc) {
          pedidoList.push({
            id:doc.id,
            ...doc.data()}
            );

        });
        setPedido(pedidoList)
      })
    }, [])
    const updateOrder = (id) => {
      console.log(id)
      firebaseFunctions.db.collection("Orders").doc(id).update({
        status: "entregue"
      
      })
      }
        

    return (
      <main className= "kitchen-main">
        <header >
        <div></div>
        <h1 ><img  src= {logo} className="logoSaloon"></img></h1>
        <i class="fa fa-home" aria-hidden="true"></i>
            <Logout></Logout>   
        </header>
        <h2><img src="./images/pedidos.png"/></h2>
          <Slider {...settings} className="carrossel">
            {
              pedido.map((item, index) => 
              {
                //Tempo de preparo
                const diff = Math.round((item.hora_fim.toDate().getTime() - item.hora_inicio.toDate().getTime())/60/1000)

                return <Card key={index} button={()=>updateOrder(item.id)} textButton={"Entregue"} mesa={item.mesa} horario={item.hora_fim.toDate().toLocaleString('pt-BR')} tempo={diff} nome={item.nome} pedido={item.pedido && item.pedido.map(item=>`${item.quantidade} ${item.descricao}`).join()} />
              })
              
            }
        </Slider>
      </main>

    );
  }