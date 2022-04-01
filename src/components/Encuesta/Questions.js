import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'

export const Questions = ({ modal }) => {
    console.log(modal)
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const [eva, setEva] = useState("")
    const [eva1, setEva1] = useState("")
    const [eva2, setEva2] = useState("")
    const [eva3, setEva3] = useState("")
    const [eva4, setEva4] = useState("")
    let evaluar
    let evaluar1
    let evaluar2
    let evaluar3
    let evaluar4
    const handleEvalue = (e) => {
        evaluar = e.target.value
        setEva(evaluar)
        console.log(evaluar)
    }
    const handleEvalue1 = (e) => {
        evaluar1 = e.target.value
        setEva(evaluar1)
        console.log(evaluar1)
    }
    const handleEvalue2 = (e) => {
        evaluar2 = e.target.value
        setEva(evaluar2)
        console.log(evaluar2)
    }
    const handleEvalue3 = (e) => {
        evaluar3 = e.target.value
        setEva(evaluar3)
        console.log(evaluar3)
    }
    const handleEvalue4 = (e) => {
        evaluar4 = e.target.value
        setEva(evaluar4)
        console.log(evaluar4)
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Encuesta actividad: {modal[0].actividad}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <h3>Pregunta # 1</h3>
                        <Form.Group className="quits">
                            <Form.Check
                                className="checks"
                                onClick={handleEvalue}
                                type="radio"
                                value="Nada"
                                name="pregunta1"
                                label={`Nada`}
                                id={`disabled-default`}
                            />
                            <Form.Check
                                className="checks"
                                onClick={handleEvalue}
                                type="radio"
                                value="Un poco"
                                name="pregunta1"
                                label={`Un poco`}
                                id={`disabled-default`}
                            />
                            <Form.Check
                                className="checks"
                                onClick={handleEvalue}
                                type="radio"
                                value="Bastante"
                                name="pregunta1"
                                label={`Bastante`}
                                id={`disabled-default`}
                            />
                            <Form.Check
                                className="checks"
                                onClick={handleEvalue}
                                type="radio"
                                value="Mucho"
                                name="pregunta1"
                                label={`Mucho`}
                                id={`disabled-default`}
                            />
                        </Form.Group>
                        <h3>Pregunta # 2</h3>
                        <Form.Group className="quits">
                            <Form.Check
                                className="checks"
                                onClick={handleEvalue1}
                                type="radio"
                                value="Nada"
                                name="pregunta2"
                                label={`Nada`}
                                id={`disabled-default`}
                            />
                            <Form.Check
                                className="checks"
                                onClick={handleEvalue1}
                                type="radio"
                                value="Un poco"
                                name="pregunta2"
                                label={`Un poco`}
                                id={`disabled-default`}
                            />
                            <Form.Check
                                className="checks"
                                onClick={handleEvalue1}
                                type="radio"
                                value="Bastante"
                                name="pregunta2"
                                label={`Bastante`}
                                id={`disabled-default`}
                            />
                            <Form.Check
                                className="checks"
                                onClick={handleEvalue1}
                                type="radio"
                                value="Mucho"
                                name="pregunta2"
                                label={`Mucho`}
                                id={`disabled-default`}
                            />
                        </Form.Group>
                        <h3>Pregunta # 3</h3>
                        <Form.Group className="quits">
                            <Form.Check
                                className="checks"
                                onClick={handleEvalue2}
                                type="radio"
                                value="Nada"
                                name="pregunta3"
                                label={`Nada`}
                                id={`disabled-default`}
                            />
                            <Form.Check
                                className="checks"
                                onClick={handleEvalue2}
                                type="radio"
                                value="Un poco"
                                name="pregunta3"
                                label={`Un poco`}
                                id={`disabled-default`}
                            />
                            <Form.Check
                                className="checks"
                                onClick={handleEvalue2}
                                type="radio"
                                value="Bastante"
                                name="pregunta3"
                                label={`Bastante`}
                                id={`disabled-default`}
                            />
                            <Form.Check
                                className="checks"
                                onClick={handleEvalue2}
                                type="radio"
                                value="Mucho"
                                name="pregunta3"
                                label={`Mucho`}
                                id={`disabled-default`}
                            />
                        </Form.Group>
                        <h3>Pregunta # 4</h3>
                        <Form.Group className="quits">
                            <Form.Check
                                className="checks"
                                onClick={handleEvalue3}
                                type="radio"
                                value="Nada"
                                name="pregunta4"
                                label={`Nada`}
                                id={`disabled-default`}
                            />
                            <Form.Check
                                className="checks"
                                onClick={handleEvalue3}
                                type="radio"
                                value="Un poco"
                                name="pregunta4"
                                label={`Un poco`}
                                id={`disabled-default`}
                            />
                            <Form.Check
                                className="checks"
                                onClick={handleEvalue3}
                                type="radio"
                                value="Bastante"
                                name="pregunta4"
                                label={`Bastante`}
                                id={`disabled-default`}
                            />
                            <Form.Check
                                className="checks"
                                onClick={handleEvalue3}
                                type="radio"
                                value="Mucho"
                                name="pregunta4"
                                label={`Mucho`}
                                id={`disabled-default`}
                            />
                        </Form.Group>
                        <h3>Pregunta # 5</h3>
                        <Form.Group className="quits">
                            <Form.Check
                                className="checks"
                                onClick={handleEvalue4}
                                type="radio"
                                value="Nada"
                                name="pregunta5"
                                label={`Nada`}
                                id={`disabled-default`}
                            />
                            <Form.Check
                                className="checks"
                                onClick={handleEvalue4}
                                type="radio"
                                value="Un poco"
                                name="pregunta5"
                                label={`Un poco`}
                                id={`disabled-default`}
                            />
                            <Form.Check
                                className="checks"
                                onClick={handleEvalue4}
                                type="radio"
                                value="Bastante"
                                name="pregunta5"
                                label={`Bastante`}
                                id={`disabled-default`}
                            />
                            <Form.Check
                                className="checks"
                                onClick={handleEvalue4}
                                type="radio"
                                value="Mucho"
                                name="pregunta5"
                                label={`Mucho`}
                                id={`disabled-default`}
                            />
                        </Form.Group>
                        <Button className="bton">Cancelar cambios</Button>
                        <Button type="submit" className="bton1">Guardar cambios</Button>
                    </Form>
                </Modal.Body>
            </Modal >
        </div >
    )
}
