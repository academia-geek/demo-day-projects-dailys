import React from 'react'
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


export const Rendimiento = () => {
    // -----------------------------grafica de barras
    const datas = {
        labels: ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"],
        datasets: [{
            label: "completados",
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
          <h2 className='mt-5'>rango de actividades cumplidas en la ultima semana</h2>
          <div claName="grafica">
              <Bar options={options} data={datas} />
          </div>
    </div>
  )
}
