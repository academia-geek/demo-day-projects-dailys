import { DatePicker, TimePicker } from '@material-ui/pickers';
import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hook/useForm';
import { editAsyn } from '../../redux/actions/actionTask';

const Editar = ({ modal }) => {

    const dispatch = useDispatch()
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const [selec, setSelec] = useState(modal.selecEvent);
    const meses = modal.mes - 1
    const horas = modal.hora + 5
    const [fechaUTC, setFechaUTC] = useState(new Date(Date.UTC(modal.año, meses, modal.dia, horas, modal.minutos, 0)))
    const [añadir, setAñadir] = useState({})

    const selector = selec[0]

    function cambioDias(e) {
        const opciones = e.target.options
        const seleccionadas = []
        for (let i = 0; i < opciones.length; i++) {
            if (opciones[i].selected) {
                seleccionadas.push(opciones[i].value)
            }
        }
        setSelec(seleccionadas)
    }

    const [values, handleInputChange] = useForm({
        actividad: modal.actividad,
        codigo: modal.codigo,
        idUser: modal.idUser,
    })
    const { actividad, codigo } = values

    const guarda = () => {
        setAñadir({
            dia: fechaUTC.getUTCDate(),
            mes: fechaUTC.getUTCMonth() + 1,
            año: fechaUTC.getUTCFullYear(),
            hora: fechaUTC.getHours(),
            minutos: fechaUTC.getMinutes(),
            actividad: values.actividad,
            idUser: values.idUser,
            codigo: values.codigo,
            selecEvent: selector
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(editAsyn(codigo, añadir))
        setShow(false)
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
                            <Form.Group className="mb-3 inputs">
                                <Form.Label>Nombre de la actividad</Form.Label>
                                <Form.Control type="text" name="actividad" placeholder="Ingrese el nombre" value={actividad} onChange={handleInputChange} />
                            </Form.Group>
                            <div className="mb-3 inputs">
                                <Form.Select aria-label="Default select example" value={selec} onChange={cambioDias} >
                                    <option>Seleciona el tipo de evento</option>
                                    <option>Normal</option>
                                    <option>Especial</option>
                                    <option>Metas</option>
                                </Form.Select>
                            </div>

                            <div className="fechass">
                                <div className="alarmafecha">
                                    <Form.Label>Fecha </Form.Label>
                                    <DatePicker value={fechaUTC} onChange={setFechaUTC} />
                                </div>

                                <div className="alarmafecha">
                                    <Form.Label>Hora </Form.Label>
                                    <TimePicker value={fechaUTC} onChange={setFechaUTC} />
                                </div>
                            </div>
                            <div className='boton-modal-agenda'>
                            <Button type="submit" className='boton-completadi' onClick={guarda} onHide={handleClose}>Guardar</Button>
                            </div>
                        </Form>
                    </Modal.Body>
                </Modal>
            </>
        </div>
    );
};

export default Editar;
