import React, { useEffect, useRef, useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { useForm } from '../../hook/useForm'

export const Temporizador = () => {
    ///Temporizador
    const [num, setNum] = useState(0);
    const [minu, setMinu] = useState(1);
    const [hora, setHora] = useState(0);

    const [pause, setPause] = useState(true);

    let intervalRef = useRef();

    const decreaseNum = () => setNum((prev) => prev - 1);

    const cuent = () => {
        if (num === 60) {
            intervalRef.current = setInterval(decreaseNum, 1000);
            return () => clearInterval(intervalRef.current);
        }
    }
    const restCuent = () => {
        if (num === -1) {
            clearInterval(intervalRef.current);
            setNum(60)
            setMinu((prev) => prev - 1);
        }
    }
    const restCuentHora = () => {
        if (minu === -1) {
            clearInterval(intervalRef.current);
            setMinu(60)
            setHora((prev) => prev - 1);
        }
    }
    useEffect(() => {
        restCuentHora();
        restCuent();
        cuent();
    });
    const handleClick = () => {
        if (!pause) {
            clearInterval(intervalRef.current);
        } else {
            intervalRef.current = setInterval(decreaseNum, 1000);
        }
        setPause((prev) => !prev);
    };
    ///Modal Configuracion
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [values, handleInputChange, reset] = useForm({
        hor: 0,
        min: 0,
        seg: 0
    })
    const { hor, min, seg } = values

    const handleConfig = (e) => {
        e.preventDefault();
        setNum(seg)
        setMinu(min)
        setHora(hor)
    }
    return (
        <div className="contens">
            <div className="contTempori">
                <div className="contes">
                    <div className="texts">
                        <h2>{hora}</h2>
                        <h3>horas</h3>
                    </div>
                </div>
                <div className="contes">
                    <div className="texts">
                        <h2 >{minu}</h2>
                        <h3 >Minutos</h3>
                    </div>

                </div>
                <div className="contes">
                    <div className="texts">
                        <h2>{num}</h2>
                        <h3>Segundos</h3>
                    </div>

                </div>
            </div>
            <Button onClick={handleShow} className="boton">Configurar</Button>
            <Button onClick={handleClick} className="boton">{pause ? "Iniciar" : "Pausar"}</Button>
            <div className="modals">
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Configurar temporizador</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleConfig}>
                            <Form.Group className="mb-3" controlId="Horas">
                                <Form.Label>Hora</Form.Label>
                                <Form.Control
                                    type="Number"
                                    placeholder="00 Horas"
                                    name="hor"
                                    value={hor}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="minutos">
                                <Form.Label>Minutos</Form.Label>
                                <Form.Control
                                    type="Number"
                                    placeholder="00 Minutos"
                                    name="min"
                                    value={min}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="Horas">
                                <Form.Label>Segundos</Form.Label>
                                <Form.Control
                                    type="Number"
                                    placeholder="00 Segundos"
                                    name="seg"
                                    value={seg}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" type="submit" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}
