import React, { useState, useEffect } from "react";
import firebaseFunctions from "../firebase";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/Kitchen.css";
import Card from "../components/Card";
import Header from "../components/Header";

export default function Orders() {
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
        },
      },
    ],
  };

  let [pedido, setPedido] = useState([]);

  useEffect(() => {
    firebaseFunctions.db
      .collection("Orders")
      .where("status", "==", "pronto")
      .orderBy("hora_fim", "asc")
      .onSnapshot(function (querySnapshot) {
        let pedidoList = [];

        querySnapshot.docs.forEach(function (doc) {
          pedidoList.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setPedido(pedidoList);
      });
  }, []);
  const updateOrder = (id) => {
    firebaseFunctions.db.collection("Orders").doc(id).update({
      status: "entregue",
    });
  };

  return (
    <main className="kitchen-main">
      <Header isHome={true} />
      <p>
        <img alt="title4" className="imgProntos" src="./images/pedidos.png" />
        <br></br>
        <img alt="title4" className="imgProntos" src="./images/prontos.png" />
      </p>
      <Slider {...settings} className="carrossel">
        {pedido.map((item, index) => {
          //Tempo de preparo
          const diff = Math.round(
            (item.hora_fim.toDate().getTime() -
              item.hora_inicio.toDate().getTime()) /
              60 /
              1000
          );

          return (
            <Card
              key={index}
              button={() => updateOrder(item.id)}
              textButton={"Entregue"}
              mesa={item.mesa}
              horario={item.hora_fim.toDate().toLocaleString("pt-BR")}
              tempo={diff}
              nome={item.nome}
              pedido={
                item.pedido &&
                item.pedido
                  .map((item) => `${item.quantidade} ${item.descricao}`)
                  .join()
              }
            />
          );
        })}
      </Slider>

      <a href= "javascript:history.back()">
        <button className="btnSaloon btnTest">Voltar</button>
      </a>
    </main>
  );
}
