import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Temporizador } from './Herramientas/Temporizador'
import { Alarma } from './Herramientas/Alarma'
import { HomeComponent } from './Navbar/Home/HomeComponent'

export const HomeTemAle = () => {
    const [temp, setTemp] = useState(true)
    const [alarma, setAlarma] = useState(false)
    const OnClickTem = () => {
        setTemp(true)
        setAlarma(false)
    }
    const onClickAlarma = () => {
        setTemp(false)
        setAlarma(true)
    }
    return (
        <div>
            <HomeComponent />
            <div className="opciones">
                <Button onClick={OnClickTem} className="boton1">Temporizador</Button>
                <Button onClick={onClickAlarma} className="boton2">Alarma</Button>
            </div>
            {
                temp === true ? <Temporizador /> : ''
            }
            {
                alarma === true ? <Alarma /> : ''
            }
        </div>
    )
}