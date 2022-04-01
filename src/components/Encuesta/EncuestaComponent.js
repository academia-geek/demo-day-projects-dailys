import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { HomeComponent } from '../Navbar/Home/HomeComponent'
import { useDispatch, useSelector } from 'react-redux'
import { listTasks } from '../../redux/actions/actionTask'
import { Questions } from './Questions'

export const EncuestaComponent = () => {
    const red = (e) => {
        dispatch(listTasks());
    }
    const dispatch = useDispatch();
    const { task } = useSelector(store => store.tarea);

    const [selec, setSelec] = useState({})
    const [data, setData] = useState("")
    const [modal, setModal] = useState(false);

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
    const [dat, setDat] = useState("")
    const actualizar = () => {
        const uids = JSON.parse(localStorage.getItem("users"))
        let datas = task.filter(user => user.idUser === uids.codigo);
        setData(datas)
        const ir = datas.filter(s => s.codigo === selector)
        setDat(ir)
    }

    const handleMostrar = (e) => {
        e.preventDefault()
        setModal(true)
    }

    useEffect(() => {
        red()
    }, [dispatch])
    return (
        <div>
            <HomeComponent />
            <div>
                <h1>Encuenta para identificar las actividades con mas prioridad</h1>
            </div>
            <div>
                <Form onSubmit={handleMostrar}>
                    <div onClick={actualizar}>
                        <Form.Select aria-label="Default select example" value={selec} onChange={cambioDias} onClick={actualizar}>
                            <option>Seleciona la actividad</option>
                            {
                                data !== "" ? (
                                    data.map(element => (
                                        <option value={element.codigo} key={element.codigo}>{element.actividad}</option>
                                    ))
                                ) : ''
                            }
                        </Form.Select>
                    </div>
                    <Button variant="outline-success" type="submit">Realizar encuenta</Button>
                </Form>
            </div>
            {
                modal === true ? <Questions modal={dat} /> : ''
            }
        </div>
    )
}
