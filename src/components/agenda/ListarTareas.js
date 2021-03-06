import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Button, Form, Modal } from 'react-bootstrap';
import { editAsyn } from '../../redux/actions/actionTask';
import Editar from './Editar';
import "../../styles/agenda/style.css"
import toast, { Toaster } from 'react-hot-toast';

export const ListarTareas = () => {

  const dispatch = useDispatch();
  const [añadir, setAñadir] = useState({})

  const { task } = useSelector(store => store.tarea);
  const [compl, setCompl] = useState(0)
  const [nocompl, setNocompl] = useState(0)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  let evaluar

  const [modal, setModal] = useState(false)
  const uids = JSON.parse(localStorage.getItem("users"))
  const codigo = uids.codigo
  const data = task.filter(user => user.idUser === codigo)
  const [enviarDatosModal, setEnviarDatosModal] = useState([])
  const [eva, setEva] = useState("")
  const [datas, setDatas] = useState({})
  const [daas, setDaas] = useState(0)
  const [codigos, setCodigos] = useState("")
  const fecha = new Date();
  const day = fecha.getUTCDate();
  const det = data.filter(user => user.dia === day)

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
    toast.success('Recompensa alcanzada!')
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
  let completado = 0
  let nocompletado = 0

  const conteo = () => {
    // let datas = task.filter(user => user.idUser === users.codigo);
    task.forEach(element => {
      const { evalue, idUser } = element
      if (evalue === "Completado" && codigo === idUser) {
        completado++
      } else if (evalue === "No completado" && codigo === idUser) {
        nocompletado++
      }
    })
    setCompl(completado)
    setNocompl(nocompletado)
  }
  localStorage.setItem("dato", JSON.stringify({
    compl: compl,
    nocompl: nocompl,
    total: compl + nocompl
  }));
  const cargarDate = () => {
    setDaas(data)
  }
  const cargarDataDay = () => {
    setDaas(det)
  }

  useEffect(() => {
    setDaas(det)
    conteo()
  }, [task])
  return (
    <div className='juju'>
      <div className="opcionesaged">
        <Button className="botonAgen" active={false} onClick={cargarDataDay}>Actividades de hoy</Button>
        <Button className="botonAgend" onClick={cargarDate}>Todas las actividades</Button>
      </div>
      <div>
        {
          (daas.length !== 0) ? (
            <div>
              {
                (daas) ?
                  (
                    daas.map((element, index) => (
                      <div className="card mb-3 cardsdf tareaP" key={index}>
                        <div className="row g-0">
                          <div className="col-md-4 imgagendas">
                            <img src="https://res.cloudinary.com/dsnsjqasu/image/upload/v1648913032/deberes_2_hl8dhm.png" className="imgAgenda img-fluid rounded-start" alt="..."></img>
                          </div>
                          <div className="col-md-10">
                            <div className="cardsagenda">
                              <div className="contsAgenda">
                                <h5 className="titleagenda titulo-tarea"><b>Nombre: </b>{element.actividad}</h5>
                                <h6 className="sub"><b>Fecha:</b> {element.dia}/{element.mes}/{element.año}</h6>
                                <h6 className="sub"><b>Hora:</b> {element.hora}:{element.minutos}</h6>
                              </div>
                              <div className="busagnda">
                                <Button className="botonAgenda" onClick={() => buscar(element.codigo)}>{element.evalue}</Button>
                                <Button variant='light' className="botoneditars" onClick={() => editar(element.codigo)}><img className='ico' alt="editar" src="https://res.cloudinary.com/dsnsjqasu/image/upload/v1648826022/editar_ztqaqc.png" /> Editar</Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Modal show={show} onHide={handleClose} className='complet'>
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
                              <div className='boton-modal-agenda'>
                                <Button type="submit" className='boton-completadi' onClick={guarda}>Guardar cambios</Button>
                              </div>
                            </Form>

                          </Modal.Body>
                        </Modal>
                      </div>
                    )
                    )
                  ) :
                  <p>Datos no disponibles</p>
              }
            </div>
          ) : <div className='agenda-vacia'>
            <h3>No hay actividades registradas</h3>
            <img alt='sin resultados' src='https://res.cloudinary.com/paolavbm/image/upload/v1649338537/documento_tv30cb.png' width={100} />
          </div>
        }
      </div>

      {
        modal === true ? <Editar modal={enviarDatosModal} /> : ''
      }
      <Toaster />
    </div >
  )
}