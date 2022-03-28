import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { deleteTask, registerEstadistica } from '../../redux/actions/actionTask';
import Editar from './Editar';
import "../../styles/agenda/style.css"

export const ListarTareas = () => {
  const dispatch = useDispatch();
  const { task } = useSelector(store => store.tarea);
  let estadistica
  let evaluar

  const [modal, setModal] = useState(false)
  const [enviarDatosModal, setEnviarDatosModal] = useState([])

  useEffect(() => { }, [task])

  const estadisticas = (e) => {
    evaluar = e.target.value
    let id = e.target.id
    if (evaluar === "si") {
      estadistica = "cumplido"
    } else {
      estadistica = "no cumplido"
    }

    enviar(estadistica, id)
  }

  const enviar = (estadistica, id) => {
    dispatch(registerEstadistica(estadistica, id))
    dispatch(deleteTask(id))
  }

  const editar = (code) => {
    const traertarea = task.find(t => t.code === code)

    setModal(true)
    setEnviarDatosModal(traertarea)
  }

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>hora</th>
            <th>fecha</th>
            <th>nombre</th>
          </tr>
        </thead>
        <tbody>
          {
            (task) ?
              (

                task.map((element, index) => (

                  <tr key={index}>
                    <td>{element.hora}</td>
                    <td>{element.fecha}</td>
                    <td>{element.nombre}</td>
                    <td>
                      <tr>
                        <td><button value="si" onClick={(e) => estadisticas(e)} id={element.nombre} type="radio" className='btn btn-success'>Completado</button></td>
                        <td><button value="no" onClick={(e) => estadisticas(e)} id={element.nombre} type="radio" className='btn btn-danger' >No Completado</button></td>
                      </tr>
                    </td>
                    <td><Button variant='light' onClick={() => editar(element.code)}><img className='ico' alt="editar" src="https://res.cloudinary.com/donoutoby/image/upload/v1648323245/iconos/32355_p2dpn1.png" /></Button></td>
                  </tr>
                )
                )

              ) :
              <p>Datos no disponibles</p>
          }
        </tbody>
      </Table>
      {
        modal === true ? <Editar modal={enviarDatosModal} /> : ''
      }
    </div>
  )
}
