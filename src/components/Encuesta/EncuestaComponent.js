import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { HomeComponent } from '../Navbar/Home/HomeComponent'
import { useDispatch, useSelector } from 'react-redux'
import { listTasks } from '../../redux/actions/actionTask'
import { Questions } from './Questions'

export const EncuestaComponent = () => {

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
    }

    const handleMostrar = (e) => {
        e.preventDefault()
        const ir = data.filter(s => s.codigo === selector)
        setDat(ir)
        setModal(true)
    }
    const red = () => {
        dispatch(listTasks());
    }

    useEffect(() => {
        red()
    }, [dispatch])
    return (
        <div>
            <HomeComponent />
            <div>
                <Form onSubmit={handleMostrar} className="forsSelect">
                    <img src="https://cdn.pixabay.com/photo/2020/10/17/22/27/question-5663412_960_720.png" alt="" className="imagens"></img>
                    <div onClick={actualizar} className="forsSelect1">
                        <h1 className="titles">Encuenta para identificar las actividades con mas prioridad</h1>
                        <Form.Select aria-label="Default select example" value={selec} onChange={cambioDias} onClick={actualizar} className="selecsQuiz">
                            <option>Seleciona la actividad</option>
                            {
                                data !== "" ? (
                                    data.map(element => (
                                        <option value={element.codigo} key={element.codigo}>{element.actividad}</option>
                                    ))
                                ) : ''
                            }
                        </Form.Select>
                        <div className="clsboton">
                            <Button variant="outline-success" type="submit" className="botonencuesta">Realizar encuenta</Button>
                        </div>

                    </div>

                </Form>
            </div>
            {
                modal === true ? <Questions modal={dat} /> : ''
            }
        </div>
    )
}
