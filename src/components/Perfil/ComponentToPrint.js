import React from "react";

export class ComponentToPrint extends React.PureComponent {

  render() {
    return (
      <div className="premio">
        <img src="https://res.cloudinary.com/dsnsjqasu/image/upload/v1649085947/Pngtree_confetti_and_balloon_gold_light_6228166_gfrvny.png" alt="premio" className="imgPremio" ></img>
        <div>
          <h1 className="title-premio">Premio por lograr alcanzar 5 actividades completas</h1>
          <h5 className="title-premio1">Es necesario enfocarse en los logros pequeños, en lugar de los grandes. Porque al no lograr algo grande se va perdiendo la autoestima. </h5>
          <h5 className="title-premio2">Felicitaciones</h5>
          <h5 className="title-premio3">Descuento de 50% en compra de 5 articulos en olimpica</h5>
         <img src="https://redsisusa.com/wp-content/uploads/2020/09/redsis-c-caso-exito-olimpica.png" alt=""  className="olimpica"></img>
        </div>
      </div>
    );
  }
}