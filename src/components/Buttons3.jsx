import React from 'react';

// Additional Background Colors
const backgroundColors = [
  'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)',
  'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)',
  'rgba(75, 192, 192, 0.2)', 'rgba(255, 206, 86, 0.2)', 
  'rgba(255, 99, 224, 0.2)', 'rgba(54, 162, 135, 0.2)',
  'rgba(153, 108, 255, 0.2)', 'rgba(255, 164, 64, 0.2)',
  'rgba(67, 192, 192, 0.2)', 'rgba(255, 209, 102, 0.2)', 
];

// Additional Border Colors
const borderColors = [
  'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)',
  'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)',
  'rgba(75, 192, 192, 1)', 'rgba(255, 206, 86, 1)', 
  'rgba(255, 99, 224, 1)', 'rgba(54, 162, 135, 1)',
  'rgba(153, 108, 255, 1)', 'rgba(255, 164, 64, 1)',
  'rgba(67, 192, 192, 1)', 'rgba(255, 209, 102, 1)', 
];

// Names for the buttons
const btnTitle = [
  'IT', 'Work Space', 'Work Continuity', 'Crew Composition', 'Work Method', 'Rework',
  'Work Delay', 'Safety', 'Work Environment', 'Worker Experience', 'Work Difficulty', 'Work Quantity'
];

const Buttons3 = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-5">
      {backgroundColors.map((bgColor, index) => (
        <button
          key={index}
          style={{ backgroundColor: bgColor, borderColor: borderColors[index], borderWidth: 2 }}
          className="text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
        >
          {btnTitle[index]}
        </button>
      ))}
    </div>
  );
};

export default Buttons3;
