import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data, title, size }) => {
  return (
    <div>
        <h1 className="text-lg text-center capitalize">{title}</h1>
        <div style={{height: size}}>
            <Pie data={data} options={{ maintainAspectRatio: false}} />
        </div>
    </div>
  )
}

export default PieChart