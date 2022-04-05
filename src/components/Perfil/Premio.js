import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import { ComponentToPrint } from './ComponentToPrint';

export const Premio = () => {
    const componentRef = useRef();
    return (
        <div>
            <Link to="/perfil">Volver</Link>
            <ReactToPrint
            
                trigger={() => <button className="imprimir">Guardar premio</button>}
                content={() => componentRef.current}
            />
            <ComponentToPrint ref={componentRef} />
        </div>
    );
};