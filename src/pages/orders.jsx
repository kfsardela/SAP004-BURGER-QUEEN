import React from 'react'
import logo from '../images/logo.jpg'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../style/Kitchen.css';
import Logout from '../components/Logout';

export default function Orders() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
    };

    return (
      <main className= "kitchen-main">
        <header>
          <h1 ><img  src= {logo} className="img-kichen"></img></h1>
        </header>
        <h2>Pedidos Prontos</h2>
        {/* criar componentes para cards*/}
        <Slider {...settings} className="carrossel">
          <div className="card-pedido">
            <h4>Mesa:1</h4>
            <p>Data/ Horário</p>
            <p>Nome:</p>
            <p>Pedido:</p>
            <button>Entregue</button>            
          </div>
          <div className="card-pedido">
            <h4>Mesa:2</h4>
            <p>Data/ Horário</p>
            <p>Nome:</p>
            <p>Pedido:</p>
            <button>Entregue</button>            
          </div>
          <div className="card-pedido">
            <h4>Mesa:3</h4>
            <p>Data/ Horário</p>
            <p>Nome:</p>
            <p>Pedido:</p>
            <button>Entregue</button>            
          </div>
          <div className="card-pedido">
            <h4>Mesa:4</h4>
            <p>Data/ Horário</p>
            <p>Nome:</p>
            <p>Pedido:</p>
            <button>Entregue</button>            
          </div>
        </Slider>  
        <button>Voltar</button>  
        <Logout></Logout>
      </main>

    );
  }