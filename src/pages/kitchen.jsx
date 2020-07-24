import React from 'react';
import logo from '../images/logo.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../style/Kitchen.css';
import Card from '../components/Card';

export default function Kitchen() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
    };

    return (
      <main className= "kitchen-main">
        <header>
          <h1 ><img  src= {logo} className="img-kichen"></img></h1>
        </header>
        <h2>Pedidos Pendentes</h2>
        <Slider {...settings} className="carrossel">
          <Card mesa= "1" horario= "18:20" nome= "Beatriz" pedido= "água"/>
          <Card mesa= "2" horario= "18:21" nome= "Bianca" pedido= "refrigerante"/>
          <Card mesa= "3" horario= "18:20" nome= "Beatriz" pedido= "água"/>
          <Card mesa= "4" horario= "18:21" nome= "Bianca" pedido= "refrigerante"/>
          
        </Slider>  
        <button>Pedidos entregues</button>  
        <button>Sair</button>    
      </main>

    );
  }