import React from 'react';
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

const HorizontalBarChart = ({ data, title, size }) => {
    let options = {
        indexAxis: 'y',
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
    };

  return (
    <div>
        <h1 className="text-lg text-center capitalize">{title}</h1>
        <div style={{height: size}}>
            <Bar data={data} options={{ maintainAspectRatio: false, ...options}} />
        </div>
    </div>
  )
}

export default HorizontalBarChart