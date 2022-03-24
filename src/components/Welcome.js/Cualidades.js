
import React from 'react'
import { Qualities, SubQualities, H5 } from "../../styles/landing/styledLanding"
const Cualidades = () => {
  return (
    <div>
            <Qualities>
                <SubQualities>
                    <img src="https://res.cloudinary.com/paolavbm/image/upload/v1647746656/cuaderno_2_szskdd.png" width={100} />
                    <H5> Agenda</H5>
                    <p>
                       Cuenta con una agenda y un sistema de tareas que te permitirán organizarte, establecer prioridadez y estructrurar ideas.
                    </p>
                </SubQualities>

                <SubQualities>
                    <img src="https://res.cloudinary.com/paolavbm/image/upload/v1647746854/reloj_hxlxyc.png" width={100} />
                    <H5>Manejo de tiempos</H5>
                    <p>
                       Cuenta con distintas herramientas como reloj, temporizador y alarmas para programar tus tiempos y llevar control del mismo.
                    </p>
                </SubQualities>
            </Qualities>

            <Qualities >
                <SubQualities>
                    <img src="https://res.cloudinary.com/paolavbm/image/upload/v1647747122/calendario_ia6vj9.png" width={100}/>
                    <H5>Calendario</H5>
                    <p>Cuenta con un calendario integrado para llevar control de fechas tanto como futuras como llevar registro de las pasadas.
                    </p>
                </SubQualities>

                <SubQualities>
                    <img src="https://res.cloudinary.com/paolavbm/image/upload/v1647747213/barra-grafica_yqegb2.png" width={100}/>
                    <H5>Estadisticas</H5>
                    <p>
                         Permite ver tu rendimiento, identificar nuestras ventajas, carencias y prioridades para organizarnos mejor para futuras actividades. 
                    </p>
                </SubQualities>
            </Qualities>


    </div>
  )
}

export default Cualidades