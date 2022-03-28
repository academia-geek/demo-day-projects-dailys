import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hook/useForm';
import { editAsyn } from '../../redux/actions/actionTask';

const Editar = ({ modal }) => {

    console.log(modal)
    const dispatch = useDispatch()
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    const [values, handleInputChange, reset] = useForm({
        nombre: modal.nombre,
        hora: modal.hora,
        fecha: modal.fecha,
        code: modal.code
    })
    const { nombre, hora, fecha, code } = values

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(editAsyn(code, values))

        reset()
    }


    return (
        <div>
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar producto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nombre de la Tarea</Form.Label>
                                <Form.Control type="text" name="nombre" placeholder="ingrese el nombre de la tarea" value={nombre} onChange={handleInputChange} />

                                <Form.Label>Hora</Form.Label>
                                <Form.Control type="time" name="hora" value={hora} onChange={handleInputChange} />

                                <Form.Label>Fecha</Form.Label>
                                <Form.Control type="date" name="fecha" value={fecha} onChange={handleInputChange} />

                            </Form.Group>

                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button type="submit" variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Form>

                    </Modal.Body>


                </Modal>
            </>
        </div>
    );
};

export default Editar;
