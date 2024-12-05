import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './Chart.css';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Barchart = () => {
  const chartData = {
    labels: ['Repo1', 'Repo2', 'Repo3', 'Repo4', 'Repo5'],
    datasets: [
      {
        label: 'Stars',
        data: [208, 177, 152, 106, 80],
        backgroundColor: '#36A2EB',
      },
    ],
  };

  return (
    <div className="chart-container">
      <h3>Most Popular</h3>
      <Bar data={chartData} />
    </div>
  );
};

export default Barchart;
