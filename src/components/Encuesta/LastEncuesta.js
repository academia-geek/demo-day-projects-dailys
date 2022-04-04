import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form, Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { url } from '../../data/url';
import { editAsyn, listTasks, registertarea } from '../../redux/actions/actionTask';
import { HomeComponent } from '../Navbar/Home/HomeComponent'

export const LastEncuesta = () => {
    //traer la data heruku y firebase
    const [g, setG] = useState(0)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    ////data de heroku 
    const [dataQ, setQuiz] = useState([])

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
    let datas = task.filter(user => user.idUser === uids.codigo);
    const fit = datas.filter(use => use.quizDs === 0)



    const [values, setValues] = useState({
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5
    })



    //agregar cambios firebase
    const [añadir, setAñadir] = useState({})
    let numer
    console.log(fit)
    console.log(values)

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        });

    }
    const valdar = () => {
        const numer = Number(values.a) + Number(values.b) + Number(values.c) + Number(values.d) + Number(values.e)
        console.log(numer)
    }

    const guardarDta = (e) => {
        e.preventDefault()
        const numer = g + 1
        setAñadir({
            ...fit[0],
            quizDs: numer
        })
        setShow(true)
        e.target.reset()

    }

    // const callback = (e) => {
    //     e.preventDefault()
    //     valdar()
    //    guardarDta()

    // }
    const hadlenValue = (e) => {
        e.preventDefault()
        dispatch(editAsyn(fit[0].codigo, añadir))
        console.log("juju")
        setShow(false)

    }

    useEffect(() => {
        getData();
        dispatch(listTasks())
        valdar()
    }, [dispatch])

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
                                                            value={values.a}
                                                            name="a"
                                                            label={`Nada`}
                                                            id={`disabled-default`}
                                                            onChange={handleInputChange}
                                                            required
                                                        />
                                                        <Form.Check
                                                            className="checks"
                                                            type="radio"
                                                            value={values.b}
                                                            name="a"
                                                            label={`Poco`}
                                                            id={`disabled-default`}
                                                            onChange={handleInputChange}
                                                            required
                                                        />
                                                        <Form.Check
                                                            className="checks"
                                                            type="radio"
                                                            value={values.c}
                                                            name="a"
                                                            label={`Algo`}
                                                            id={`disabled-default`}
                                                            onChange={handleInputChange}

                                                        />
                                                        <Form.Check
                                                            className="checks"
                                                            type="radio"
                                                            value={values.d}
                                                            name="a"
                                                            label={`Mucho`}
                                                            id={`disabled-default`}
                                                            onChange={handleInputChange}

                                                        />
                                                    </Form.Group>
                                                </div>
                                                <h5>{dataQ[1].pregunata}</h5>
                                                <div className=''>
                                                    <Form.Group className="quits">


                                                        <Form.Check
                                                            className="checks"
                                                            type="radio"
                                                            value={values.a}
                                                            name="b"
                                                            label={`Nada`}
                                                            id={`disabled-default`}
                                                            onChange={handleInputChange}

                                                            required
                                                        />
                                                        <Form.Check
                                                            className="checks"
                                                            type="radio"
                                                            value={values.b}
                                                            name="b"
                                                            label={`Poco`}
                                                            id={`disabled-default`}
                                                            onChange={handleInputChange}
                                                            required
                                                        />
                                                        <Form.Check
                                                            className="checks"
                                                            type="radio"
                                                            value={values.c}
                                                            name="b"
                                                            label={`Algo`}
                                                            id={`disabled-default`}
                                                            onChange={handleInputChange}
                                                            required
                                                        />
                                                        <Form.Check
                                                            className="checks"
                                                            type="radio"
                                                            value={values.d}
                                                            name="b"
                                                            label={`Mucho`}
                                                            id={`disabled-default`}
                                                            onChange={handleInputChange}
                                                            required
                                                        />
                                                    </Form.Group>
                                                </div>
                                                <h5>{dataQ[2].pregunata}</h5>
                                                <Form.Group className="quits">

                                                    <Form.Check
                                                        className="checks"
                                                        type="radio"
                                                        value={values.a}
                                                        name="c"
                                                        label={`Nada`}
                                                        id={`disabled-default`}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                    <Form.Check
                                                        className="checks"
                                                        type="radio"
                                                        value={values.b}
                                                        name="c"
                                                        label={`Poco`}
                                                        id={`disabled-default`}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                    <Form.Check
                                                        className="checks"
                                                        type="radio"
                                                        value={values.c}
                                                        name="c"
                                                        label={`Algo`}
                                                        id={`disabled-default`}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                    <Form.Check
                                                        className="checks"
                                                        type="radio"
                                                        value={values.d}
                                                        name="c"
                                                        label={`Mucho`}
                                                        id={`disabled-default`}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </Form.Group>

                                                <h5>{dataQ[3].pregunata}</h5>
                                                <Form.Group className="quits">

                                                    <Form.Check
                                                        className="checks"
                                                        type="radio"
                                                        value={values.a}
                                                        name="d"
                                                        label={`Nada`}
                                                        id={`disabled-default`}
                                                        onChange={handleInputChange}
                                                        required

                                                    />
                                                    <Form.Check
                                                        className="checks"
                                                        type="radio"
                                                        value={values.b}
                                                        name="d"
                                                        label={`Poco`}
                                                        id={`disabled-default`}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                    <Form.Check
                                                        className="checks"
                                                        type="radio"
                                                        value={values.c}
                                                        name="d"
                                                        label={`Algo`}
                                                        id={`disabled-default`}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                    <Form.Check
                                                        className="checks"
                                                        type="radio"
                                                        value={values.d}
                                                        name="d"
                                                        label={`Mucho`}
                                                        id={`disabled-default`}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </Form.Group>

                                                <h5>{dataQ[4].pregunata}</h5>
                                                <Form.Group className="quits">
                                                    <Form.Check
                                                        className="checks"
                                                        type="radio"
                                                        value={values.a}
                                                        name="e"
                                                        label={`Nada`}
                                                        id={`disabled-default`}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                    <Form.Check
                                                        className="checks"
                                                        type="radio"
                                                        value={values.b}
                                                        name="e"
                                                        label={`Poco`}
                                                        id={`disabled-default`}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                    <Form.Check
                                                        className="checks"
                                                        type="radio"
                                                        value={values.c}
                                                        name="e"
                                                        label={`Algo`}
                                                        id={`disabled-default`}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                    <Form.Check
                                                        className="checks"
                                                        type="radio"
                                                        value={values.d}
                                                        name="e"
                                                        label={`Mucho`}
                                                        id={`disabled-default`}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </Form.Group>

                                                <Button type="submit" className='siguiente' >Siquiente</Button>
                                            </Form>
                                        ) : <h4>encuesta terminada</h4>
                                }
                            </div>
                        ) : 'hola'
                }
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar completado</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Button onClick={hadlenValue} className='siguiente'>Siguiente</Button>
                </Modal.Body>
            </Modal>

        </div>
    )
}