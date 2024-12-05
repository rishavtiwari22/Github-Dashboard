import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./DoughnutChart.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({userData}) => {

  const forks = userData.reduce((acc, repo) => acc + repo.forks, 0);
  const open_issues = userData.reduce((acc, repo) => acc + repo.open_issues, 0);
  const watchers = userData.reduce((acc, repo) => acc + repo.watchers, 0);
  const size = userData.reduce((acc, repo) => acc + repo.size, 0);
  const stargazers_count = userData.reduce((acc, repo) => acc + repo.stargazers_count, 0);  

  const data = {
    labels: ["forks", "open_issues", "watchers", "size%", "stargazers_count"],
    datasets: [
      {
        label: "Languages Used",
        data: [forks, open_issues, watchers, size/100, stargazers_count],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="doughnut-container">
      <h3>Repositories Details</h3>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
