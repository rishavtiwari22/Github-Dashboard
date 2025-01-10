
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './Piechart.css';


ChartJS.register(ArcElement, Tooltip, Legend);

const Piechart = ({userData}) => {

  const JavaScript = userData.filter((data) => data.language === 'JavaScript').length;
  const python = userData.filter((data) => data.language === 'Python').length;
  const html = userData.filter((data) => data.language === 'HTML').length;
  const css = userData.filter((data) => data.language === 'CSS').length;
  const cpp = userData.filter((data) => data.language === 'C++').length;

  
  const dummyData = {
    languages: ['JavaScript', 'Python', 'HTML', 'CSS', 'C++'],
    counts: [JavaScript, python, html, css, cpp],
  };
  console.log('Dummy Data - ',dummyData); 
  
  const chartData = {
    labels: dummyData.languages,
    datasets: [
      {
        label: 'Languages Used',
        data: dummyData.counts,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        hoverOffset: 4,
      },
    ],
  };

  return (
    
    <div className="piechart-container">
      <h3>Most Used Language</h3>
      <Pie className='chart' data={chartData} />
    </div>
  );
};

export default Piechart;
