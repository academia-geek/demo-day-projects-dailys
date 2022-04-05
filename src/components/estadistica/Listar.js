import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import "../../styles/estadistica/est.css"
import { Table } from 'react-bootstrap';

ChartJS.register(ArcElement, Tooltip, Legend);

export const Listar = () => {

    const [compl, setCompl] = useState(0)
    const [nocompl, setNocompl] = useState(0)
    const { task } = useSelector(store => store.tarea)
    const fecha = new Date();
    const month = fecha.getUTCMonth() + 1;
    const day = fecha.getUTCDate() - 1;
    const year = fecha.getUTCFullYear();

    let completado = 0
    let nocompletado = 0

    const users = JSON.parse(localStorage.getItem('users'));
    const codigo = users.codigo
    const firtes = task.filter(user => {
        if (user.dia < day && user.mes <= month ) {
            return user
        }
    })

    const conteo = () => {
        // let datas = task.filter(user => user.idUser === users.codigo);
        task.forEach(element => {
            const { evalue, idUser } = element
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
    useEffect(() => { conteo() }, [task])

    return (
        <div>
            <div className="grafica">
                <Pie data={data} options={opciones} />
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>complidos</th>
                        <th>No Cumplidos</th>
                        <th>total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{compl}</td>
                        <td>{nocompl}</td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}