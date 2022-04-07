import React, { useEffect, useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import { DatePicker, TimePicker } from '@material-ui/pickers'
import { useDispatch, useSelector } from 'react-redux';
import { AddAlarmSync, ListAlarmSync } from '../../redux/actions/actionAlarm';

export const Alarma = () => {

    const dispatch = useDispatch();

    ///fecha a comparar
    const fecha = new Date();
    const month = fecha.getUTCMonth() + 1;
    const day = fecha.getUTCDate() - 1;
    const year = fecha.getUTCFullYear();

    ///funcion crear alarma
    const [fechas, setFechas] = useState(new Date())

    const { alarm } = useSelector(store => store.alarm)
    const uids = JSON.parse(localStorage.getItem("users"))

    const [añadir, setAñadir] = useState({
        dia: "",
        mes: "",
        año: "",
        hora: "",
        minutos: ""
    })

    const red = () => {
        if (alarm === undefined) {
            dispatch(ListAlarmSync())
        }
    }

    const guarda = () => {
        setAñadir({
            dia: fechas.getUTCDate(),
            mes: fechas.getUTCMonth(),
            año: fechas.getUTCFullYear(),
            hora: fechas.getHours(),
            minutos: fechas.getMinutes(),
            codigo: uids.codigo
        })
    }
    const handleAdd = (e) => {
        e.preventDefault()
        dispatch(AddAlarmSync(añadir))
    }

    useEffect(() => {
        red()
        console.log("hola")
    }, [])
    return (
        <div>
            <div className="fechas">
                <h2>{day} / {month} / {year}</h2>
            </div>
            <div className="añadirAlarmas">
                <Form onSubmit={handleAdd} className="contAlarm">
                    <div className="alarmafecha">
                        <DatePicker value={fechas} onChange={setFechas} />
                    </div>
                    <div className="alarmafecha">
                        <TimePicker value={fechas} onChange={setFechas} />
                    </div>
                    <Button type="submit" className="boton1" onClick={guarda}>Añadir</Button>
                </Form>
            </div>
            <div className="listarAlarmas">
                <Table striped bordered hover>
                    <thead className='head'>
                        <tr>
                            <th>Hora</th>
                            <th>Fecha</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (alarm) ?
                                (
                                    alarm.map((element, index) => (
<<<<<<< HEAD

                                        <tr key={index} className="alarma">
=======
                                        <tr key={index}>
>>>>>>> e84c27dece8916f9134ee376e0b7c50662990d18
                                            <td>{element.hora}:{element.minutos}</td>
                                            <td>{element.dia}/{element.mes}/{element.año}</td>
                                         
                                        </tr>
                                    )
                                    )
                                ) :
                                <p>Datos no disponibles</p>
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}