import React,{useState} from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { productivitys } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import "./GenButton.css";

const ServiceCard = ({ index, title, value }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <h1 className="text-[40px] font-bold">{value}</h1>
        <h3 className='text-white text-[20px] text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const GenButton2 = () => {
  
  const [productivityValues, setProductivityValues] = useState(
    productivitys.map((productivity) => ({
      ...productivity,
      value: productivity.defaultValue, 
    }))
  );

  const [output, setOutput] = useState('0');

  const handleButtonClick = () => {
    const randomProductivityValue = (50 + Math.random() * 30).toFixed(2);
    setOutput(randomProductivityValue);
    productivityValues.forEach((productivity, index) => {
      setTimeout(() => {
        // Generates a random number between 1 to 2
        const randomMultiplier = 0.8 + Math.random() * 0.4; // Math.random() generates a number between 0 and 1, so adding 1 ensures the range is between 1 and 2.
        // Calculate the average and multiply by the random number, then format
        // const updatedValue = (((productivity.lowercap + productivity.uppercap) / 2) * randomMultiplier).toFixed(2);
        const updatedValue = ((productivity.lowercap + (productivity.uppercap-productivity.lowercap)*randomProductivityValue/100)).toFixed(2);
        const updatedValues = [...productivityValues];
        updatedValues[index].value = updatedValue; // Update the value with the new calculation
        setProductivityValues(updatedValues); // Update state with the new values
      }, index * 500); // Delay to stagger the updates for visual effect
    });
  };


  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="flex flex-col items-center justify-center my-10">
          <button
            onClick={handleButtonClick}
            className="btn mb-5 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            style={{ borderRadius: '14px 50px' }}
          >
            CLICK HERE TO GENERATE LABOUR PRODUCTIVITY
          </button>
        <div className="text-white bg-gray-800 py-2 px-4 rounded-lg shadow-md mx-96">
          Labour Productivity Value : {output} / 100
        </div>
        </div>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {productivityValues.map((productivity, index) => (
          <ServiceCard 
            key={productivity.title} 
            index={index} 
            title={productivity.title} 
            value={productivity.value} 
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(GenButton2, "result");
