import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import "../../styles/estadistica/est.css"

ChartJS.register(ArcElement, Tooltip, Legend);

export const Listaremociones = () => {
    // const [happy, setHappy] = useState(0)
    // const [veryHappy, setVeryhappy] = useState(0)
    // const [mehj, setMehj] = useState(0)
    // const [sad, setSad] = useState(0)
    // const [hedied, sehedied] = useState(0)

    // const dispatch = useDispatch();

    // const { emo } = useSelector(store => store.emocion); 
    // useEffect(() => { 
    //     // dispatch(listEmos());
    //     conteo()
    // }, [dispatch])
    // let feliz, muyfeliz, meh, triste, semurio = 0

    // const users = JSON.parse(localStorage.getItem('users'));
    // const idUser = users.codigo
    // const conteo = () => {
    //     emo.forEach(element => {
    //         const { asnwer, codigo } = element
    //         if (asnwer === 1 && codigo === idUser) {
    //             feliz++
    //         } else if (asnwer === 2 && codigo === idUser) {
    //             muyfeliz++
    //         } else if (asnwer === 3 && codigo === idUser) {
    //             meh++
    //         } else if (asnwer === 4 && codigo === idUser) {
    //             triste++
    //         } else if (asnwer === 5 && codigo === idUser) {
    //             semurio++
    //         }
    //     })
    //     setHappy(feliz)
    //     setVeryhappy(muyfeliz)
    //     setMehj(meh)
    //     setSad(triste)
    //     sehedied(semurio)
    // }

    // ----------------------------grafica

    const data = {
        labels: ['Feliz', 'Muy Feliz', 'Normal', 'Triste', 'Depresivo'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1,
            },
        ],
    };
    const opciones = {
        responsive: true,
        maintainAspectRatio: false
    }
    return (
        <div>
            <div>
                <Pie data={data} options={opciones} />
            </div>
        </div>
    )
}
