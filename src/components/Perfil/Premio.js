import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import { ComponentToPrint } from './ComponentToPrint';

export const Premio = () => {
    const componentRef = useRef();
    return (
        <div>
            <Link to="/perfil">Volver</Link>
            <div className="simssdf">
                <img src="https://stsa.org.hk/wp-content/uploads/2021/05/gold-trophy-icon-golden-goblet-with-star-reward-icon-white-isolated_138676-497.jpg" alt="" className="imgres"></img>
                <ComponentToPrint ref={componentRef} />
            </div>
            <div className="compar">
                <ReactToPrint

                    trigger={() => <button className="imprimir">Guardar premio</button>}
                    content={() => componentRef.current}
                />
                <a href="https://api.whatsapp.com/send?text=https://res.cloudinary.com/dsnsjqasu/image/upload/v1649178883/premio_ot6i2r.png" target="_blank" className="imprimir2">Compartir whatsapp</a>
            </div>
        </div>
    );
};