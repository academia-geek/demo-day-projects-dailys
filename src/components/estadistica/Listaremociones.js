import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import "../../styles/estadistica/est.css"

ChartJS.register(ArcElement, Tooltip, Legend);

export const Listaremociones = () => {
    const [happy, setHappy] = useState(0)
    const [veryHappy, setVeryhappy] = useState(0)
    const [mehj, setMehj] = useState(0)
    const [sad, setSad] = useState(0)
    const [hedied, sehedied] = useState(0)

    const { task } = useSelector(store => store.tarea);

    let feliz = 0
    let muyfeliz = 0
    let meh = 0
    let triste = 0
    let semurio = 0

    const users = JSON.parse(localStorage.getItem('users'));
    const dta = task.filter(user => user.name === "emociones")
    const idUser = users.codigo

    const conteo = () => {
        dta.map(element => {
            const { asnwer, codigo } = element
            if (asnwer === 1 && codigo === idUser) {
                feliz++
            } else if (asnwer === 2 && codigo === idUser) {
                muyfeliz++
            } else if (asnwer === 3 && codigo === idUser) {
                meh++
            } else if (asnwer === 4 && codigo === idUser) {
                triste++
            } else if (asnwer === 5 && codigo === idUser) {
                semurio++
            }
        })
        setHappy(feliz)
        setVeryhappy(muyfeliz)
        setMehj(meh)
        setSad(triste)
        sehedied(semurio)
    }

    // ----------------------------grafica

    const data = {
        labels: ['Feliz', 'Muy Feliz', 'Normal', 'Triste', 'Depresivo'],
        datasets: [
            {
                label: '# of Votes',
                data: [happy, veryHappy, mehj, sad, hedied],
                backgroundColor: [
                    '#342a44',
                    '#71628c',
                    '#9389f5',
                    '#b99fdf',
                    '#f3bbff'
                ],
            borderColor: [
                '#342a44',
                '#71628c',
                '#9389f5',
                '#b99fdf',
                '#f3bbff'

            ],
            borderWidth: 1,
            },
        ],
    };
    const opciones = {
        responsive: true,
        maintainAspectRatio: false
    }
    useEffect(() => {
        conteo()
    }, [task])
  return (
    <div>
          <div className="w-50 mx-auto">
              <Pie className='w-100' data={data} options={opciones} />
          </div>
    </div>
  )
}
