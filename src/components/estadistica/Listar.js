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
<<<<<<< HEAD

    useEffect(() => { conteo() }, [task])

    console.log(task)
=======
>>>>>>> e9a4b8322461f21a8bf484b676f8510f4338986f
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
<<<<<<< HEAD

    const opciones = {
        responsive: true,
        maintainAspectRatio: false
    }
=======
    const pepe = localStorage.setItem("data", JSON.stringify({
        comple: compl,
        nocompl: nocompl,
        total: total
    }))
>>>>>>> e9a4b8322461f21a8bf484b676f8510f4338986f

    return (
        <div>
            <div claName="grafica">
                <Pie data={data} options={opciones} />
            </div>
<<<<<<< HEAD
=======

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
                        <td>{total}</td>
                    </tr>
                </tbody>
            </Table>
>>>>>>> e9a4b8322461f21a8bf484b676f8510f4338986f
        </div>
    )
}