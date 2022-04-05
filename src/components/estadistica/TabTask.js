import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import "../../styles/estadistica/est.css"

export const TabTask = () => {
    const dispatch = useDispatch();

    const [estado, setEstado] = useState()
    const [compl, setCompl] = useState(0)
    const [nocompl, setNocompl] = useState(0)
    const [total, setTotal] = useState(0)
    const tareasusers = {}

    const { task } = useSelector(store => store.tarea)

    useEffect(() => {
        conteo()
    }, [task])

    console.log(task)

    const users = JSON.parse(localStorage.getItem('users'));
    const codigo = users.codigo


    const conteo = () => {
        let datas = task.filter(user => user.idUser === users.codigo);
        let complet = datas.filter(tareas => tareas.evalue === "Completado");
        let nocomplet = datas.filter(tareas => tareas.evalue === "No completado");

        setCompl(complet)
        setNocompl(nocomplet)
        setTotal(datas)
    }
    return (
        <div>
            <div className="d-flex align-items-start">
                <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button className="nav-link active" id="v-pills-todo-tab" data-bs-toggle="pill" data-bs-target="#v-pills-todo" type="button" role="tab" aria-controls="v-pills-todo" aria-selected="true">todo</button>
                    <button className="nav-link" id="v-pills-completado-tab" data-bs-toggle="pill" data-bs-target="#v-pills-completado" type="button" role="tab" aria-controls="v-pills-completado" aria-selected="false">Completados</button>
                    <button className="nav-link" id="v-pills-ncompletado-tab" data-bs-toggle="pill" data-bs-target="#v-pills-ncompletado" type="button" role="tab" aria-controls="v-pills-ncompletado" aria-selected="false">No Completados</button>
                </div>
                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane table fade show active" id="v-pills-todo" role="tabpanel" aria-labelledby="v-pills-todo-tab">
                        <table className="tab-pane table fade show" id="v-pills-todo" role="tabpanel" aria-labelledby="v-pills-todo-tab">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Hora</th>
                                    <th>Fecha</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    (total) ?
                                        (

                                            total.map((element, index) => (

                                                <tr key={index}>
                                                    <td>{element.actividad}</td>
                                                    <td>{element.hora}:{element.minutos}</td>
                                                    <td>{element.dia}/{element.mes}/{element.año}</td>
                                                    <td>{element.evalue}</td>
                                                </tr>
                                            )
                                            )

                                        ) :
                                        <p>Datos no disponibles</p>
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="tab-pane fade" id="v-pills-completado" role="tabpanel" aria-labelledby="v-pills-completado-tab">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Hora</th>
                                    <th>Fecha</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    (compl) ?
                                        (

                                            compl.map((element, index) => (

                                                <tr key={index}>
                                                    <td>{element.actividad}</td>
                                                    <td>{element.hora}:{element.minutos}</td>
                                                    <td>{element.dia}/{element.mes}/{element.año}</td>
                                                    <td>{element.evalue}</td>
                                                </tr>
                                            )
                                            )

                                        ) :
                                        <p>Datos no disponibles</p>
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="tab-pane fade" id="v-pills-ncompletado" role="tabpanel" aria-labelledby="v-pills-ncompletado-tab">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Hora</th>
                                    <th>Fecha</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    (nocompl) ?
                                        (

                                            nocompl.map((element, index) => (

                                                <tr key={index}>
                                                    <td>{element.actividad}</td>
                                                    <td>{element.hora}:{element.minutos}</td>
                                                    <td>{element.dia}/{element.mes}/{element.año}</td>
                                                    <td>{element.evalue}</td>
                                                </tr>
                                            )
                                            )

                                        ) :
                                        <p>Datos no disponibles</p>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
