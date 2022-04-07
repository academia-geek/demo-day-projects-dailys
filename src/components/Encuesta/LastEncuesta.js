import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form, Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { url } from '../../data/url';
import { editAsyn, listTasks } from '../../redux/actions/actionTask';
import { HomeComponent } from '../Navbar/Home/HomeComponent'

export const LastEncuesta = () => {
    //traer la data heruku y firebase
    let g = 0
    const [show, setShow] = useState(false);
    const [mensaje, setMensaje] = useState('');


    ////data de heroku 
    const [dataQ, setQuiz] = useState([])
    const fecha = new Date();
    const day = fecha.getUTCDate();

    const getData = () => {
        axios.get(url)
            .then(response => {
                setQuiz(response.data);
                console.log()
            }).catch(error => {
                console.log(error)
            })
    }

    ////data de firebase
    const dispatch = useDispatch();
    const { task } = useSelector(store => store.tarea);
    const uids = JSON.parse(localStorage.getItem("users"))
    let datas = task.filter(user => {
        if(user.idUser === uids.codigo && user.dia === day){
            return user
        }
    });
    const fit = datas.filter(use => {
        if(use.quizDs === 0 && use.dia === day){
            return use
        }
    })

    //agregar cambios firebase
    const [eva, setEva] = useState(0)
    const [eva1, setEva1] = useState(0)
    const [eva2, setEva2] = useState(0)
    const [eva3, setEva3] = useState(0)
    const [eva4, setEva4] = useState(0)

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
    const [añadir, setAñadir] = useState({})

    let mensaje2

    const guardarDta = (e) => {
        e.preventDefault()
        const numer = Number(eva) + Number(eva1) + Number(eva2) + Number(eva3) + Number(eva4)
        if (numer >= 15) {
            mensaje2 = '¡Urgente!'
            console.log(mensaje)
        } else if ((numer >= 10) && (numer < 15)) {
            mensaje2 = "Urgencia Media"
            console.log(mensaje)
        } else if (numer < 10) {
            mensaje2 = 'Urgencia Baja'
            console.log(mensaje)
        }
        setMensaje(mensaje2)

        setAñadir({
            ...fit[0],
            quizDs: numer,
            mensaje: mensaje2
        })
        setShow(true)
        console.log(numer)
        e.target.reset()
        console.log(mensaje2)
    }

    const hadlenValue = (e) => {
        e.preventDefault()
        dispatch(editAsyn(fit[0].codigo, añadir))

        setShow(false)
    }

    useEffect(() => {
        getData();
        dispatch(listTasks())
    }, [dispatch])



    datas.sort(function (a, b) {
        if (a.quizDs < b.quizDs) {
            return 1;
        }
        if (a.quizDs > b.quizDs) {
            return -1;
        }
        return 0;
    });





    console.log(datas)

    return (
        <div>
            <HomeComponent />
            <div className='encuestaDiv'>
                {
                    (fit.length !== 0)
                        ?
                        (
                            <div>
                                {
                                    (fit.length !== 0) ? (
                                        <h2>{fit[g].actividad} : {fit[g].quizDs}</h2>
                                    ) : ''
                                }
                                {
                                    (dataQ.length !== 0) ?
                                        (
                                            <Form onSubmit={guardarDta}>
                                                <h5>{dataQ[0].pregunata}</h5>
                                                <div className=''>
                                                    <Form.Group className="quits">
                                                        <Form.Check
                                                            className="checks check1"
                                                            type="radio"
                                                            value={1}
                                                            name="1"
                                                            label={`Nada`}
                                                            id={`disabled-default`}
                                                            onClick={handleEvalue}
                                                            required
                                                        />
                                                        <Form.Check
                                                            className="checks"
                                                            type="radio"
                                                            value={2}
                                                            name="1"
                                                            label={`Poco`}
                                                            id={`disabled-default`}
                                                            onClick={handleEvalue}
                                                            required
                                                        />
                                                        <Form.Check
                                                            className="checks"
                                                            type="radio"
                                                            value={3}
                                                            name="1"
                                                            label={`Algo`}
                                                            id={`disabled-default`}
                                                            onClick={handleEvalue}

                                                        />
                                                        <Form.Check
                                                            className="checks"
                                                            type="radio"
                                                            value={4}
                                                            name="1"
                                                            label={`Mucho`}
                                                            id={`disabled-default`}
                                                            onClick={handleEvalue}

                                                        />
                                                    </Form.Group>
                                                </div>
                                                <h5>{dataQ[1].pregunata}</h5>
                                                <div className=''>
                                                    <Form.Group className="quits">
                                                        <Form.Check
                                                            className="checks"
                                                            type="radio"
                                                            value={1}
                                                            name="2"
                                                            label={`Nada`}
                                                            id={`disabled-default`}
                                                            onClick={handleEvalue1}

                                                            required
                                                        />
                                                        <Form.Check
                                                            className="checks"
                                                            type="radio"
                                                            value={2}
                                                            name="2"
                                                            label={`Poco`}
                                                            id={`disabled-default`}
                                                            onClick={handleEvalue1}
                                                            required
                                                        />
                                                        <Form.Check
                                                            className="checks"
                                                            type="radio"
                                                            value={3}
                                                            name="2"
                                                            label={`Algo`}
                                                            id={`disabled-default`}
                                                            onClick={handleEvalue1}
                                                            required
                                                        />
                                                        <Form.Check
                                                            className="checks"
                                                            type="radio"
                                                            value={4}
                                                            name="2"
                                                            label={`Mucho`}
                                                            id={`disabled-default`}
                                                            onClick={handleEvalue1}
                                                            required
                                                        />
                                                    </Form.Group>
                                                </div>
                                                <h5>{dataQ[2].pregunata}</h5>
                                                <Form.Group className="quits">

                                                    <Form.Check
                                                        className="checks"
                                                        type="radio"
                                                        value={1}
                                                        name="3"
                                                        label={`Nada`}
                                                        id={`disabled-default`}
                                                        onClick={handleEvalue2}
                                                        required
                                                    />
                                                    <Form.Check
                                                        className="checks"
                                                        type="radio"
                                                        value={2}
                                                        name="3"
                                                        label={`Poco`}
                                                        id={`disabled-default`}
                                                        onClick={handleEvalue2}
                                                        required
                                                    />
                                                    <Form.Check
                                                        className="checks"
                                                        type="radio"
                                                        value={3}
                                                        name="3"
                                                        label={`Algo`}
                                                        id={`disabled-default`}
                                                        onClick={handleEvalue2}
                                                        required
                                                    />
                                                    <Form.Check
                                                        className="checks"
                                                        type="radio"
                                                        value={4}
                                                        name="3"
                                                        label={`Mucho`}
                                                        id={`disabled-default`}
                                                        onClick={handleEvalue2}
                                                        required
                                                    />
                                                </Form.Group>

                                                <h5>{dataQ[3].pregunata}</h5>
                                                <Form.Group className="quits">

                                                    <Form.Check
                                                        className="checks"
                                                        type="radio"
                                                        value={1}
                                                        name="4"
                                                        label={`Nada`}
                                                        id={`disabled-default`}
                                                        onClick={handleEvalue3}
                                                        required

                                                    />
                                                    <Form.Check
                                                        className="checks"
                                                        type="radio"
                                                        value={2}
                                                        name="4"
                                                        label={`Poco`}
                                                        id={`disabled-default`}
                                                        onClick={handleEvalue3}
                                                        required
                                                    />
                                                    <Form.Check
                                                        className="checks"
                                                        type="radio"
                                                        value={3}
                                                        name="4"
                                                        label={`Algo`}
                                                        id={`disabled-default`}
                                                        onClick={handleEvalue3}
                                                        required
                                                    />
                                                    <Form.Check
                                                        className="checks"
                                                        type="radio"
                                                        value={4}
                                                        name="4"
                                                        label={`Mucho`}
                                                        id={`disabled-default`}
                                                        onClick={handleEvalue3}
                                                        required
                                                    />
                                                </Form.Group>

                                                <h5>{dataQ[4].pregunata}</h5>
                                                <Form.Group className="quits">
                                                    <Form.Check
                                                        className="checks"
                                                        type="radio"
                                                        value={1}
                                                        name="5"
                                                        label={`Nada`}
                                                        id={`disabled-default`}
                                                        onClick={handleEvalue4}
                                                        required
                                                    />
                                                    <Form.Check
                                                        className="checks"
                                                        type="radio"
                                                        value={2}
                                                        name="5"
                                                        label={`Poco`}
                                                        id={`disabled-default`}
                                                        onClick={handleEvalue4}
                                                        required
                                                    />
                                                    <Form.Check
                                                        className="checks"
                                                        type="radio"
                                                        value={3}
                                                        name="5"
                                                        label={`Algo`}
                                                        id={`disabled-default`}
                                                        onClick={handleEvalue4}
                                                        required
                                                    />
                                                    <Form.Check
                                                        className="checks"
                                                        type="radio"
                                                        value={4}
                                                        name="5"
                                                        label={`Mucho`}
                                                        id={`disabled-default`}
                                                        onClick={handleEvalue4}
                                                        required
                                                    />
                                                </Form.Group>

                                                <Button type="submit" className='siguiente' >Siquiente</Button>
                                            </Form>
                                        ) : <h4>encuesta terminada</h4>
                                }
                            </div>
                        ) : <div> 
                        <h3 className='titulo-encuesta'>Resultados ordenados por prioridad:</h3> 
                        { 
                            datas.map((e, i) => ( 

                                <div key={i} className='resultas' > 
                                    <div className='tablita' > 

                                        <h5 className='name'>{e.actividad}</h5> 

                                        <div className='flex'> 
                                            <h6>{e.mensaje}</h6> 
                                        </div> 
                                    </div> 
                                </div> 
                            )) 
                        } 
                    </div>
                }
            </div>
            <Modal show={show} className="modal-encuesta">
                <Modal.Header closeButton>
                    <Modal.Title>Confirmación</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>¿Desea pasar a la siguiente tarea?</h5>
                    <Button onClick={() => setShow(false)} className='cancelar'>Cancelar</Button>
                    <Button onClick={hadlenValue} className='siguiente'>Siguiente</Button>
                </Modal.Body>
            </Modal>

        </div>
    )
}