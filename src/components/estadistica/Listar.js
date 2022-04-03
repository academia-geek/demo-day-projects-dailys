import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import "../../styles/estadistica/est.css"
import { listEstadist } from '../../redux/actions/actionTask';

ChartJS.register(ArcElement, Tooltip, Legend);

export const Listar = () => {
    const dispatch = useDispatch();

    const [estado, setEstado] = useState()
    const [compl, setCompl] = useState(0)
    const [nocompl, setNocompl] = useState(0)
    const [total, setTotal] = useState(0)
    const tareasusers= {}

    const { task } = useSelector(store => store.tarea)

    useEffect(() => {
        dispatch(listEstadist())
        conteo()
    }, [task])

    console.log(task)
    let completado = 0
    let nocompletado = 0

    const users = JSON.parse(localStorage.getItem('users'));
    const codigo = users.codigo
    

    const conteo = () => {
        let datas = task.filter(user => user.idUser === users.codigo);
        console.log(datas)
        task.forEach(element => {
            
            const { evalue, idUser, actividad } = element
            if (evalue === "Completado" && codigo === idUser) {
                completado++
            } else if (evalue === "No completado" && codigo === idUser) {
                nocompletado++
            }
            
            setEstado(evalue)
        })
        setCompl(completado)
        setNocompl(nocompletado)
        setTotal(completado + nocompletado)
    }

    const data = {
        labels: ['Completado', 'No Completado'],
        datasets: [
            {
                label: '# of Votes',
                data: [compl, nocompl],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'

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
            <div claName="grafica">
                <Pie data={data} options={opciones} />
            </div>
        </div>
    )
}