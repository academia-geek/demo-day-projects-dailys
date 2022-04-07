import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import "../../styles/estadistica/est.css"

ChartJS.register(ArcElement, Tooltip, Legend);

export const Listar = () => {
    const dispatch = useDispatch();

    const [compl, setCompl] = useState(0)
    const [nocompl, setNocompl] = useState(0)

    const { task } = useSelector(store => store.tarea)

    useEffect(() => { conteo() }, [task])

    console.log(task)
    let completado = 0
    let nocompletado = 0

    const users = JSON.parse(localStorage.getItem('users'));
    const codigo = users.codigo
    

    const conteo = () => {
        let datas = task.filter(user => user.idUser === users.codigo);
        console.log(datas)
        task.forEach(element => {
            
            const { evalue, idUser} = element
            if (evalue === "Completado" && codigo === idUser) {
                completado++
            } else if (evalue === "No completado" && codigo === idUser) {
                nocompletado++
            }
            
        })
        setCompl(completado)
        setNocompl(nocompletado)
    }

    const data = {
        labels: ['Completado', 'No Completado'],
        datasets: [
            {
                label: '# of Votes',
                data: [compl, nocompl],
                backgroundColor: [
                    '#b99fdf',
                    '#f3bbff'
                ],
                borderColor: [
                    '#b99fdf',
                    '#f3bbff'

                ],
                borderWidth: 1,
            },
        ],
    }

    const opciones = {
        responsive: true,
        maintainAspectRatio: false
    }

    return (
        <div>
            <div className="grafica">
                <div className="w-50 mx-auto">
                <Pie className='w-100' data={data} options={opciones} />
                </div>
            </div>
        </div>
    )
}