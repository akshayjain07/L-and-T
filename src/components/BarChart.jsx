import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  // Sample data for the top 5 performers
  const data = {
    labels: ['Player A', 'Player B', 'Player C', 'Player D', 'Player E'],
    datasets: [
      {
        label: 'Performance Score',
        data: [80, 75, 85, 90, 88],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    indexAxis: 'x', // Set to 'x' for vertical bars
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Top 5 Performers',
        font: {
          size: 18,
        },
      },
    },
    responsive: true,
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
