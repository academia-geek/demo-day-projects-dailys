import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const Listar = () => {
    const [estado, setEstado] = useState()
    const [compl, setCompl] = useState(0)
    const [nocompl, setNocompl] = useState(0)
    const [total, setTotal] = useState(0)

    const { task } = useSelector(store => store.tarea)
    console.log(task)
    let completado = 0
    let nocompletado = 0

    const users = JSON.parse(localStorage.getItem('users'));
    const codigo = users.codigo

    const conteo = () => {
        task.forEach(element => {
            const { evalue, idUser } = element
            if (evalue === "Completado" && codigo === idUser) {
                completado++
            } else if (evalue === "No completado" && codigo === idUser) {
                nocompletado++
            }
            setEstado(evalue)
            console.log(evalue)
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
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }


    useEffect(() => {
        conteo()
    }, [task])
    return (
        <div>
            <div className="grafica">
                <Pie data={data} />
            </div>

            <Table striped bordered hover>
                <thead>
                </thead>
                <tbody>
                    <tr>
                        <th>complidos</th>
                        <th>No Cumplidos</th>
                        <th>total</th>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}