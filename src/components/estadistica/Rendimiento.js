import React, { useEffect } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import "../../styles/estadistica/est.css"
import { useSelector } from 'react-redux';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


export const Rendimiento = () => {
const fecha = new Date();
    const month = fecha.getUTCMonth() + 1;
    const day = fecha.getUTCDate() - 1;
    const year = fecha.getUTCFullYear();
    const semana = fecha.getDay()
    const hoy = year + "-" + month + "-" + day 

    console.log(semana)
    const { task } = useSelector(store => store.tarea)
    useEffect(() => {  }, [task])
    // let dat = task.filter(user => user.idUser === users.codigo);
    

    // -----------------------------grafica de barras
    const datas = {
        labels: ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"],
        datasets: [{
            label: "completados",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
            data: [44546, 45684, 4844, 48646, 8431, 5484, 48464]
        },{

            label: "no completados",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
            data: [44546, 45684, 4844, 48646, 8431, 5484, 48464]
        }]
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false
    }

  return (
    <div>
          <h2 className='mt-5'>Rendimiento de los ultimos 7 dias</h2>
          <div claName="grafica">
              <Bar options={options} data={datas} />
          </div>
    </div>
  )
}
