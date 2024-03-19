import React,{useState} from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { productivitys } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import "./GenButton.css";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        {/* <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        /> */}
        <h1> {icon} </h1>
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const GenButton2 = () => {
  // State to hold and display the output text
  const [outputText, setOutputText] = useState('');

  // Handler for the button click event
  const handleButtonClick = () => {
    // Generate the output text. You can modify this logic based on your actual output generation needs.
    const generatedText = "50 Bricks per Hour";
    setOutputText(generatedText);
  }

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
      </div>

      </motion.div>

      
      {/* <div className='mt-20 flex flex-wrap gap-10'>
        {productivities.map((productivity, index) => (
          <ServiceCard key={productivity.title} index={index} {...productivity} />
        ))}
      </div> */}

       <div className='mt-20 flex flex-wrap gap-10'>
        {productivitys.map((productivity, index) => (
          <ServiceCard key={productivity.title} index={index} {...productivity} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(GenButton2, "result");
// export default SectionWrapper(GenButton2, "GenButton2");
 