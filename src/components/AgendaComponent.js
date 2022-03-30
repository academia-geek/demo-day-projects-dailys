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
      mes: fechas.getUTCMonth(),
      año: fechas.getUTCFullYear(),
      hora: fechas.getHours(),
      minutos: fechas.getMinutes(),
      actividad: values.nombre,
      selecEvent: selector,
      idUser: uids.codigo
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(registertarea(añadir))
    reset()
  }

  const mostrar = () => {
    setActive(true)
  }
  useEffect(() => {
    dispatch(listTasks());
  }, [dispatch])

  return (
    <div className="contentAgenda">
      <div className="botonagenda">
        <Button onClick={() => mostrar()} className="botonperfil">Agregar a la agenda</Button>
      </div>
      <div className="content-Agenda">

        {
          active === true ? <Form onSubmit={handleSubmit} className="form-agenda">
            <h1 className="title-Agenda">Agrega tu actividad</h1>
            <Form.Group className="mb-3 inputs">
              <Form.Label>Nombre de la actividad</Form.Label>
              <Form.Control type="text" name="nombre" placeholder="ingrese el nombre" value={nombre} onChange={handleInputChange} />
            </Form.Group>
            <div className="mb-3 inputs">
              <Form.Select aria-label="Default select example" value={selec} onChange={cambioDias} >
                <option>Seleciona el tipo de evento</option>
                <option>Especial</option>
                <option>metas</option>
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
              <Button onClick={() => setActive(false)} className="boton2">Cancelar</Button>
              <Button type="submit" onClick={guarda} className="boton1">Agregar</Button>
            </div>
          </Form> : ''
        }
      </div>
      <ListarTareas />
    </div>
  )
}
