import React, { useEffect, useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { listQuiz } from '../../redux/actions/actionQuiz';

export const Questions = ({ modal }) => {
    const dispatch = useDispatch();

    const red = (e) => {
        dispatch(listQuiz());
    }
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    const { quiz } = useSelector(store => store.quiz)

    const [eva, setEva] = useState(0)
    const [eva1, setEva1] = useState(0)
    const [eva2, setEva2] = useState(0)
    const [eva3, setEva3] = useState(0)
    const [eva4, setEva4] = useState(0)
    const [total, setTotal] = useState(0)

    let evaluar
    let evaluar1
    let evaluar2
    let evaluar3
    let evaluar4

    const handleEvalue = (e) => {
        evaluar = e.target.value
        setEva(evaluar)
    }
    const handleEvalue1 = (e) => {
        evaluar1 = e.target.value
        setEva1(evaluar1)
    }
    const handleEvalue2 = (e) => {
        evaluar2 = e.target.value
        setEva2(evaluar2)
    }
    const handleEvalue3 = (e) => {
        evaluar3 = e.target.value
        setEva3(evaluar3)
    }
    const handleEvalue4 = (e) => {
        evaluar4 = e.target.value
        setEva4(evaluar4)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTotal( eva + eva1 + eva2 + eva3 + eva4)
        if (total > 5) {
            if(total >6 && total < 10){
                alert("pasa")
            } else{
                alert("poco urgente") 
            }
        } else {
            alert("nada urgente")
        }
    }
    useEffect(() => {
        red()
    }, [dispatch])


    return (
        <div>
            {
                (quiz) ? (
                    quiz.map((e, index) => (
                        <Modal show={show} onHide={handleClose} className="modal-quizz">
                            <Modal.Header closeButton>
                                <Modal.Title>Encuesta actividad:</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form onSubmit={handleSubmit}>
                                    <h3>1. {quiz[0].a}</h3>
                                    <Form.Group className="quits">
                                        <Form.Check
                                            className="checks"
                                            onClick={handleEvalue}
                                            type="radio"
                                            value={1}
                                            name="pregunta1"
                                            label={`Nada`}
                                            id={`disabled-default`}
                                        />
                                        <Form.Check
                                            className="checks"
                                            onClick={handleEvalue}
                                            type="radio"
                                            value={2}
                                            name="pregunta1"
                                            label={`Un poco`}
                                            id={`disabled-default`}
                                        />
                                        <Form.Check
                                            className="checks"
                                            onClick={handleEvalue}
                                            type="radio"
                                            value={3}
                                            name="pregunta1"
                                            label={`Bastante`}
                                            id={`disabled-default`}
                                        />
                                        <Form.Check
                                            className="checks"
                                            onClick={handleEvalue}
                                            type="radio"
                                            value={4}
                                            name="pregunta1"
                                            label={`Mucho`}
                                            id={`disabled-default`}
                                        />
                                    </Form.Group>
                                    <h3>2. {quiz[0].b}</h3>
                                    <Form.Group className="quits">
                                        <Form.Check
                                            className="checks"
                                            onClick={handleEvalue1}
                                            type="radio"
                                            value={1}
                                            name="pregunta2"
                                            label={`Nada`}
                                            id={`disabled-default`}
                                        />
                                        <Form.Check
                                            className="checks"
                                            onClick={handleEvalue1}
                                            type="radio"
                                            value={2}
                                            name="pregunta2"
                                            label={`Un poco`}
                                            id={`disabled-default`}
                                        />
                                        <Form.Check
                                            className="checks"
                                            onClick={handleEvalue1}
                                            type="radio"
                                            value={3}
                                            name="pregunta2"
                                            label={`Bastante`}
                                            id={`disabled-default`}
                                        />
                                        <Form.Check
                                            className="checks"
                                            onClick={handleEvalue1}
                                            type="radio"
                                            value={4}
                                            name="pregunta2"
                                            label={`Mucho`}
                                            id={`disabled-default`}
                                        />
                                    </Form.Group>
                                    <h3>3. {quiz[0].c}</h3>
                                    <Form.Group className="quits">
                                        <Form.Check
                                            className="checks"
                                            onClick={handleEvalue2}
                                            type="radio"
                                            value={1}
                                            name="pregunta3"
                                            label={`Nada`}
                                            id={`disabled-default`}
                                        />
                                        <Form.Check
                                            className="checks"
                                            onClick={handleEvalue2}
                                            type="radio"
                                            value={2}
                                            name="pregunta3"
                                            label={`Un poco`}
                                            id={`disabled-default`}
                                        />
                                        <Form.Check
                                            className="checks"
                                            onClick={handleEvalue2}
                                            type="radio"
                                            value={3}
                                            name="pregunta3"
                                            label={`Bastante`}
                                            id={`disabled-default`}
                                        />
                                        <Form.Check
                                            className="checks"
                                            onClick={handleEvalue2}
                                            type="radio"
                                            value={4}
                                            name="pregunta3"
                                            label={`Mucho`}
                                            id={`disabled-default`}
                                        />
                                    </Form.Group>
                                    <h3>4. {quiz[0].d}</h3>
                                    <Form.Group className="quits">
                                        <Form.Check
                                            className="checks"
                                            onClick={handleEvalue3}
                                            type="radio"
                                            value={1}
                                            name="pregunta4"
                                            label={`Nada`}
                                            id={`disabled-default`}
                                        />
                                        <Form.Check
                                            className="checks"
                                            onClick={handleEvalue3}
                                            type="radio"
                                            value={2}
                                            name="pregunta4"
                                            label={`Un poco`}
                                            id={`disabled-default`}
                                        />
                                        <Form.Check
                                            className="checks"
                                            onClick={handleEvalue3}
                                            type="radio"
                                            value={3}
                                            name="pregunta4"
                                            label={`Bastante`}
                                            id={`disabled-default`}
                                        />
                                        <Form.Check
                                            className="checks"
                                            onClick={handleEvalue3}
                                            type="radio"
                                            value={4}
                                            name="pregunta4"
                                            label={`Mucho`}
                                            id={`disabled-default`}
                                        />
                                    </Form.Group>
                                    <h3>5. {quiz[0].c}</h3>
                                    <Form.Group className="quits">
                                        <Form.Check
                                            className="checks"
                                            onClick={handleEvalue4}
                                            type="radio"
                                            value={1}
                                            name="pregunta5"
                                            label={`Nada`}
                                            id={`disabled-default`}
                                        />
                                        <Form.Check
                                            className="checks"
                                            onClick={handleEvalue4}
                                            type="radio"
                                            value={2}
                                            name="pregunta5"
                                            label={`Un poco`}
                                            id={`disabled-default`}
                                        />
                                        <Form.Check
                                            className="checks"
                                            onClick={handleEvalue4}
                                            type="radio"
                                            value={3}
                                            name="pregunta5"
                                            label={`Bastante`}
                                            id={`disabled-default`}
                                        />
                                        <Form.Check
                                            className="checks"
                                            onClick={handleEvalue4}
                                            type="radio"
                                            value={4}
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
                    ))
                ) : ''
            }
        </div >
    )
}
