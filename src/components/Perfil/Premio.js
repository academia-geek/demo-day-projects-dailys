import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { ComponentToPrint } from './ComponentToPrint';

export const Premio = () => {
    const componentRef = useRef();
    return (
        <div>
            <ComponentToPrint ref={componentRef} />
            <ReactToPrint
                trigger={() => <button>Print this out!</button>}
                content={() => componentRef.current}
            />
        </div>
    );
};