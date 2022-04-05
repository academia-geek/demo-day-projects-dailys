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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const Rangoe = () => {
const emocion = {emo: [3, 5, 1, 3, 9]}


    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            },
        },
    };

    const datas = {
        labels: ["Muy Feliz", "Feliz", "Normal", "Triste", "Deprimido/a"],
        datasets: [{
            label: "completados",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
            data: [12, 19, 3, 5, 2]
        }]
    }

  return (
    <div>
          <div><Bar options={options} data={datas} /></div>
    </div>
  )
}
