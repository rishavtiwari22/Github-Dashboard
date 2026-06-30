import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './Chart.css';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Barchart = ({ userData = [] }) => {
  // Sort repositories by star count in descending order and grab the top 5
  const topRepos = [...userData]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 5);

  const labels = topRepos.map(repo => repo.name);
  const data = topRepos.map(repo => repo.stargazers_count);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Stars',
        data: data,
        backgroundColor: '#3b82f6', // Matching our --accent color
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide legend since it's obvious it's stars from the tooltip/title
      }
    },
    scales: {
      x: {
        ticks: { color: '#94a3b8' },
        grid: { color: 'rgba(255,255,255,0.05)' }
      },
      y: {
        ticks: { color: '#94a3b8' },
        grid: { color: 'rgba(255,255,255,0.05)' }
      }
    }
  };

  return (
    <div className="chart-container">
      <h3>Most Popular Repos (Stars)</h3>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default Barchart;
