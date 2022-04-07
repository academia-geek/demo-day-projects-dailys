import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { listTasks, registertarea } from '../redux/actions/actionTask';
import { ListarTareas } from './agenda/ListarTareas'
import { Button, Form } from 'react-bootstrap'
import { useForm } from '../hook/useForm';
import { DatePicker, TimePicker } from '@material-ui/pickers'

export const AgendaComponent = () => {
  const [active, setActive] = useState(false);
  const [selec, setSelec] = useState({});
  const [fechas, setFechas] = useState(new Date())
  const [añadir, setAñadir] = useState({})
  const [conAgenda, setConAgenda] = useState("content-Agenda")
  const dispatch = useDispatch();
  const uids = JSON.parse(localStorage.getItem("users"))
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
  const [values, handleInputChange, reset] = useForm({ nombre: "" })
  const { nombre } = values
  
  const guarda = () => {
    setAñadir({
      dia: fechas.getUTCDate(),
      mes: fechas.getUTCMonth() + 1,
      año: fechas.getUTCFullYear(),
      hora: fechas.getHours(),
      minutos: fechas.getMinutes(),
      actividad: values.nombre,
      selecEvent: selector,
      idUser: uids.codigo,
      codigo: Date.now(),
      evalue: "No completado",
      quizDs: 0
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(registertarea(añadir))
    reset()
  }
  const mostrar = () => {
    setActive(true)
    setConAgenda("content-Agenda2")
  }
  const hes = () => {
    setActive(false)
    setConAgenda("content-Agenda")
  }

  useEffect(() => {
    dispatch(listTasks());
  }, [dispatch])

  return (
    <div className="contentAgenda">
      <div className="botonagenda">
        <button onClick={() => mostrar()} className="botonAgendss"><img width={70} alt="editar" src="https://res.cloudinary.com/paolavbm/image/upload/v1649186767/boton-agregar_fxgcar.png" /></button>
      </div>
      <div className={conAgenda} >
        <div>

          {
            active === true ? <Form onSubmit={handleSubmit} className="form-agenda">
              <div className='uno'>
                <h3 className="title-Agenda citrus">Agrega tu actividad</h3>
              </div>
              <Form.Group className="mb-3 inputs">
                <Form.Label>Nombre de la actividad</Form.Label>
                <Form.Control type="text" className="input-arreglo" name="nombre" placeholder="Ingrese el nombre" value={nombre} onChange={handleInputChange} />
              </Form.Group>
              <div className="mb-3 inputs">
                <Form.Select aria-label="Default select example" value={selec} onChange={cambioDias} >
                  <option selected hidden>Seleccione un tipo de evento</option>
                  <option>Normal</option>
                  <option>Especial</option>
                  <option>Metas</option>
                </Form.Select>
              </div>

              <div className="fechass">
                <div className="alarmafecha">
                  <Form.Label>Fecha </Form.Label>
                  <DatePicker value={fechas} onChange={setFechas} />
                </div>

                <div className="alarmafecha">
                  <Form.Label>Hora </Form.Label>
                  <TimePicker value={fechas} onChange={setFechas} />
                </div>
              </div>
              <div className="buton-agenda">
                <Button onClick={() => hes()} className="boton00">Cancelar</Button>
                <Button type="submit" onClick={guarda} className="boton01">Agregar</Button>
              </div>
            </Form> : ''
          }
        </div>
      </div>
      <ListarTareas />
    </div>
  )
}
