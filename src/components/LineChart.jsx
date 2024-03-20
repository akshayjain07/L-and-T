import React from 'react';
import { Line } from 'react-chartjs-2';
import { SectionWrapper } from "../hoc";
import 'chart.js/auto';

const LineChart = () => {
  const data = {
    labels: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20'],
    datasets: [
      {
        label: 'Time (in months) vs Labours (numbers)',
        data: [20, 17, 14, 11, 9, 7, 6, 5, 4, 2, 0],
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
      // <div className='flex items-center justify-between w-full lg:h-[400px]' >
      <div className='flex items-center justify-between w-full h-[400px] px-5 my-12' >
        <Line data={data} options={options} />
      </div>    
  );
};

export default LineChart;
// export default SectionWrapper(LineChart, "analysis");