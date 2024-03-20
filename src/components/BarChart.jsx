import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  // Sample data for the factors
  const data = {
    labels: ['IT', 'Work Space', 'Work Continuity', 'Crew Composition', 'Work Method', 'Others'],
    datasets: [
      {
        label: 'Pearson Correlation',
        data: [0.604, 0.544, 0.540, 0.515, 0.497, 0.380],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)' // Added 6th background color
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)' // Added 6th border color
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
    scales: {
      x: {
        title: {
          display: true,
          text: 'Parameters',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Pearson Correlation',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: 'Top 5 Factors Influencing Labour Productivity',
        font: {
          size: 18,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className='flex items-center justify-center w-full lg:h-[400px] sm:mb-12' >
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
