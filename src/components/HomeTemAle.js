import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Home } from './Navbar/Home'
import { Temporizador } from './Herramientas/Temporizador'
import { Alarma } from './Herramientas/Alarma'

export const HomeTemAle = () => {
    const [temp, setTemp] = useState(false)

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
            <Home />
            <Button onClick={OnClickTem}>Temporizador</Button>
            <Button onClick={onClickAlarma}>Alarma</Button>
            {
                temp === true ? <Temporizador /> : ''
            }
            {
                alarma === true ? <Alarma /> : ''
            }
        </div>
    )
}