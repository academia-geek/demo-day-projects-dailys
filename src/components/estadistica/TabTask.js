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
        <div className='p-5'>
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button class="nav-link active botones" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Todo</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button className="nav-link botones" id="v-pills-completado-tab" data-bs-toggle="pill" data-bs-target="#v-pills-completado" type="button" role="tab" aria-controls="v-pills-completado" aria-selected="false">Completados</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button className="nav-link botones" id="v-pills-ncompletado-tab" data-bs-toggle="pill" data-bs-target="#v-pills-ncompletado" type="button" role="tab" aria-controls="v-pills-ncompletado" aria-selected="false">No Completados</button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <table className="table">
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
    )
}
