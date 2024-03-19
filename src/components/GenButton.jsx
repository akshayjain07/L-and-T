import React, { useState } from 'react';
import { SectionWrapper } from "../hoc";
import "./GenButton.css"

const GenButton = () => {
  // State to hold and display the output text
  const [outputText, setOutputText] = useState('');

  // Handler for the button click event
  const handleButtonClick = () => {
    // Generate the output text. You can modify this logic based on your actual output generation needs.
    const generatedText = "50 Bricks per Hour";
    setOutputText(generatedText);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Button */}
      {/* <button
        onClick={handleButtonClick}
        className="btn mb-5 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        Generate
      </button> */}
        <button
            onClick={handleButtonClick}
            className="btn mb-5 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            style={{ borderRadius: '14px 50px' }} // Add this inline style
            >
            LABOUR PRODUCTIVITY
        </button>

      {/* Output Text Display */}
      {outputText && (
        <div className="max-w-xl px-4 py-3 bg-white shadow-lg rounded-lg">
          <p className="text-gray-800">{outputText}</p>
        </div>
      )}
    </div>
  );
}

// Wrap the GenButton component with SectionWrapper HOC for consistency with your project structure.
export default SectionWrapper(GenButton, "genButton");
