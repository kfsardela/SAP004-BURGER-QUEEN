import React from "react";
import '../style/reset.css';
import logo from "../images/logo.jpg";
import Button from '@material-ui/core/Button';
import CardapioItem from "../components/CardapioItem"
import CafeManha from "../Json/CafeDaManha.json"

export default function Saloon() {
  console.log(CafeManha);
  
  return (
    <main className="kitchen-main">
      <header>
        <h1>
          <img src={logo} className="img-kichen"></img>
        </h1>
      </header>
      <section>
        <h2>Cardápio</h2>
        <div className="containerManha">
        <Button className="btn">CAFÉ DA MANHÃ</Button>
          <ul>
          {CafeManha.map(item => (<CardapioItem item={item.descricao} valor={item.preco}/>))}
          </ul>
        </div>

        <h2>Almoço e jantar</h2>
      </section>
    </main>
  );
}
