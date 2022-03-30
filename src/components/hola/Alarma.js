import React, { useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import { DatePicker, TimePicker } from '@material-ui/pickers'

export const Alarma = () => {

    ///fecha a comparar
    const fecha = new Date();
    const month = fecha.getUTCMonth() + 1;
    const day = fecha.getUTCDate();
    const year = fecha.getUTCFullYear();

    ///funcion crear alarma
    const [fechas, setFechas] = useState(new Date())

    const [añadir, setAñadir] = useState({
        dia: fechas.getUTCDate(),
        mes: fechas.getUTCMonth() + 1,
        año: fechas.getUTCFullYear(),
        hora: fechas.getHours(),
        minutos: fechas.getMinutes()
    })
    console.log(añadir)
    const guarda = (e) => {
        e.preventDefault();
        setAñadir({
            dia: fechas.getUTCDate(),
            mes: fechas.getUTCMonth() + 1,
            año: fechas.getUTCFullYear(),
            hora: fechas.getHours(),
            minutos: fechas.getMinutes()
        })
    }
    return (
        <div>
            <div className="fechas">
                <h2>{day} / {month} / {year}</h2>
            </div>
            <div className="añadirAlarmas">
                <Form onSubmit={guarda} className="contAlarm">
                    <div className="alarmafecha">
                        <DatePicker value={fechas} onChange={setFechas} />
                    </div>
                    <div className="alarmafecha">
                        <TimePicker value={fechas} onChange={setFechas} />
                    </div>
                    <Button type="submit" className="boton1">Añadir</Button>
                </Form>
            </div>
            <div className="listarAlarmas">
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}