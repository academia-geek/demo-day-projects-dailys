import React from 'react'
import { useForm } from '../../hook/useForm';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { registertarea } from '../../redux/actions/actionTask';

export const Agregar = () => {

  const dispatch = useDispatch()

  let [values, handleInputChange, reset] = useForm({
    hora: "", 
    fecha: "", 
    nombre: "",
    code: parseInt(Math.random() * (50 - 1) + 1)
  })
  const { hora, fecha, nombre, code} = values

  const handleSubmit = (e) => {
    e.preventDefault()
    
    dispatch(registertarea(values))
    reset()
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId={code}>
          <Form.Label>Nombre de la tarea</Form.Label>
          <Form.Control type="text" name="nombre" placeholder="ingrese el nombre" value={nombre} onChange={handleInputChange} />

          <Form.Label>Hora</Form.Label>
          <Form.Control type="time" name="hora" placeholder="ingrese la hora" value={hora} onChange={handleInputChange} />

          <Form.Label>Fecha</Form.Label>
          <Form.Control type="date" name="fecha" placeholder="ingrese la fecha" value={fecha} onChange={handleInputChange} />

        </Form.Group>

        <Button type="submit">Agregar</Button>

      </Form>
    </div>
  );
}
