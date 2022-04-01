import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Table, Button, Form, Modal } from 'react-bootstrap';
import { editAsyn } from '../../redux/actions/actionTask';
import Editar from './Editar';
import "../../styles/agenda/style.css"

export const ListarTareas = () => {

  const dispatch = useDispatch();
  const [añadir, setAñadir] = useState({})

  const { task } = useSelector(store => store.tarea);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  let evaluar

  const [modal, setModal] = useState(false)
  const uids = JSON.parse(localStorage.getItem("users"))
  const data = task.filter(user => user.idUser === uids.codigo)
  const [enviarDatosModal, setEnviarDatosModal] = useState([])
  const [eva, setEva] = useState("")
  const [datas, setDatas] = useState({})
  const [codigos, setCodigos] = useState("")

  const buscar = (codigo) => {
    const traertarea = task.find(t => t.codigo === codigo)
    setShow(true)
    setDatas(traertarea)
    setCodigos(codigo)
  }

  const handleEvalue = (e) => {
    evaluar = e.target.value
    setEva(evaluar)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(editAsyn(codigos, añadir))
    setShow(false)
  }


  const guarda = () => {
    setAñadir({
      dia: datas.dia,
      mes: datas.mes,
      año: datas.año,
      hora: datas.hora,
      minutos: datas.minutos,
      actividad: datas.actividad,
      selecEvent: datas.selecEvent,
      idUser: datas.idUser,
      codigo: datas.codigo,
      evalue: eva
    })
  }

  const editar = (codigo) => {
    const traertarea = task.find(t => t.codigo === codigo)
    setModal(true)
    setEnviarDatosModal(traertarea)
  }
  useEffect(() => {

  }, [task])
  return (
    <div  className='juju'>
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
            (data) ?
              (
                data.map((element, index) => (
                  <tr key={index}>
                    <td>{element.hora}:{element.minutos}</td>
                    <td>{element.dia}/{element.mes}/{element.año}</td>
                    <td>{element.actividad}</td>
                    <td>
                      <Button onClick={() => buscar(element.codigo)}>{element.evalue}</Button>
                    </td>
                    <td><Button variant='light' onClick={() => editar(element.codigo)}><img className='ico' alt="editar" src="https://res.cloudinary.com/donoutoby/image/upload/v1648323245/iconos/32355_p2dpn1.png" /></Button></td>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Editar completado</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                          <Form.Check
                            onClick={handleEvalue}
                            type="radio"
                            value="Completado"
                            name={element.codigo}
                            label={`Completado `}
                            id={`disabled-default`}
                          />
                          <Form.Check
                            onClick={handleEvalue}
                            type="radio"
                            value="No completado"
                            name={element.codigo}
                            label={`No completado`}
                            id={`disabled-default`}
                          />
                          <Button type="submit" onClick={guarda}>Guardar cambios</Button>
                        </Form>
                      </Modal.Body>
                    </Modal>
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
    </div >
  )
}