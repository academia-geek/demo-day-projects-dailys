import React from "react";

export class ComponentToPrint extends React.PureComponent {

  render() {
    return (
      <div className="premio">
        <img src="https://res.cloudinary.com/dsnsjqasu/image/upload/v1649085947/Pngtree_confetti_and_balloon_gold_light_6228166_gfrvny.png" alt="premio" className="imgPremio"></img>
        <div>
          <h1 className="title-premio">Premio por lograr alcanzar 5 actividades completas</h1>
          <h5 className="title-premio1">Es necesario enfocarse en los logros pequeños, en lugar de los grandes. Porque al no lograr algo grande se va perdiendo la autoestima.</h5>
          <h5 className="title-premio2">Felicitaciones <b className="nombres">daily daylis</b></h5>
        </div>
      </div>
    );
  }
}