import React from 'react';
import { Line } from 'react-chartjs-2';
import { SectionWrapper } from "../hoc";
import 'chart.js/auto';

const LineChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Time (in months) vs Labours (numbers)',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Labours (in numbers)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Time (in months)',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: 'Time and Labour Project Estimation',
      },
      annotation: {
        annotations: {
          point1: {
            type: 'point',
            xValue: 2,
            yValue: 3,
            backgroundColor: 'red',
            radius: 10,
          },
        },
      },
    },
    maintainAspectRatio: false, // Allows custom dimensions without maintaining the aspect ratio
  };

  return (
      <div className='flex items-center justify-between w-full lg:w-2/5 lg:h-[400px]' >
        <Line data={data} options={options} />
      </div>    
  );
};

export default SectionWrapper(LineChart, "analysis");