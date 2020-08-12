import React, { useState, useEffect } from 'react';
import firebaseFunctions from "../firebase";
import Header from "../components/Header";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../style/Kitchen.css';
import Card from '../components/Card';


export default function Kitchen() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    };

    let [table, setTable] = useState([]);
   

    useEffect(() => {
      firebaseFunctions.db.collection("Orders")
      .where("status", "==", "pendente")
      .orderBy("hora_inicio", "asc")
      .onSnapshot(function(querySnapshot){
        let tableList = [];
        
        querySnapshot.docs.forEach(function(doc) {
          tableList.push({
            id:doc.id,
            ...doc.data()}
            );

        });
        setTable(tableList)
      })
    })
    const updateOrder = (id) => {
      firebaseFunctions.db.collection("Orders").doc(id).update({
        hora_fim: firebaseFunctions.firestore.Timestamp.fromDate(new Date()),
        status: "pronto"
      
      })
      }
    
    return (
      
      <main className= "kitchen-main">
        <Header isHome={false}/>
        <h2><img alt="title6" className="titleKitchen" src="./images/pedidos.png"/> <br/> <img alt="title7" className="titleKitchen" src="./images/pendentes.png"/></h2>
          <Slider {...settings} className="carrossel">
            {
              table.map((item, index) => 
                <Card key={index} button={()=>updateOrder(item.id)} textButton={"Pronto"} mesa={item.mesa} horario={item.hora_inicio.toDate().toLocaleString('pt-BR')} nome={item.nome} pedido={item.pedido && item.pedido.map(item=>`${item.quantidade} ${item.descricao}`).join()} />
              )
            }
        </Slider>
        <a href="/orders"><button className="btnSaloon btnTest btnOrders">Pedidos prontos</button></a>
      </main>

    );
  }