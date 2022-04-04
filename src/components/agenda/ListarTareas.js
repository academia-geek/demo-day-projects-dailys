import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Button, Form, Modal } from 'react-bootstrap';
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
    <div className='juju'>
      <div className="opcionesaged">
        <Button className="botonAgen">Actividades de hoy</Button>
        <Button className="botonAgend">Todas las actividades</Button>
      </div>

      {
        (data) ?
          (
            data.map((element, index) => (
              <div className="card mb-3 cardsdf" key={index}>
                <div className="row g-0">
                  <div class="col-md-4 imgagendas">
                    <img src="https://res.cloudinary.com/dsnsjqasu/image/upload/v1648913032/deberes_2_hl8dhm.png" className="imgAgenda img-fluid rounded-start" alt="..."></img>
                  </div>
                  <div className="col-md-10">
                    <div className="cardsagenda">
                      <div className="contsAgenda">
                        <h5 className="titleagenda"><b>Nombre: </b>{element.actividad}</h5>
                        <h5 className="titleagenda"><b>Fecha:</b> {element.dia}/{element.mes}/{element.año}</h5>
                        <h5 className="titleagenda"><b>Hora:</b> {element.hora}:{element.minutos}</h5>
                      </div>
                      <div className="busagnda">
                        <Button className="botonAgenda" onClick={() => buscar(element.codigo)}>{element.evalue}</Button>
                        <Button variant='light' className="botoneditars" onClick={() => editar(element.codigo)}><img className='ico' alt="editar" src="https://res.cloudinary.com/dsnsjqasu/image/upload/v1648826022/editar_ztqaqc.png" /> Editar</Button>
                      </div>
                    </div>
                  </div>
                </div>
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
              </div>
            )
            )
          ) :
          <p>Datos no disponibles</p>
      }
      {
        modal === true ? <Editar modal={enviarDatosModal} /> : ''
      }
    </div >
  )
}