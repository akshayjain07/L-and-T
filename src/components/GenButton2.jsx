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

// const GenButton2 = () => {
//   // Initial state setup for all service cards
//   const [productivityValues, setProductivityValues] = useState(
//     productivitys.map((productivity) => ({
//       ...productivity,
//       value: productivity.defaultValue, // Using a new 'value' property to reflect dynamic changes
//     }))
//   );

//   const handleButtonClick = () => {
//     // Update each card's 'value' to be the average of 'lowercap' and 'uppercap'
//     const updatedValues = productivityValues.map((productivity) => ({
//       ...productivity,
//       value: ((productivity.lowercap + productivity.uppercap) / 2).toFixed(2), // Assuming lowercap and uppercap are numbers
//     }));
//     setProductivityValues(updatedValues);
//   };

//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <div className="flex flex-col items-center justify-center my-10">
//           <button
//             onClick={handleButtonClick}
//             className="btn mb-5 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
//             style={{ borderRadius: '14px 50px' }}
//           >
//             CLICK HERE TO GENERATE LABOUR PRODUCTIVITY
//           </button>
//         </div>
//       </motion.div>

//       <div className='mt-20 flex flex-wrap gap-10'>
//         {productivityValues.map((productivity, index) => (
//           <ServiceCard 
//             key={productivity.title} 
//             index={index} 
//             title={productivity.title} 
//             value={productivity.value} 
//           />
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(GenButton2, "result");

const GenButton2 = () => {
  // Initial state setup for all service cards
  const [productivityValues, setProductivityValues] = useState(
    productivitys.map((productivity) => ({
      ...productivity,
      value: productivity.defaultValue, // Using a new 'value' property to reflect dynamic changes
    }))
  );

  const handleButtonClick = () => {
    // Update each card's 'value' incrementally
    productivityValues.forEach((productivity, index) => {
      setTimeout(() => {
        const updatedValue = ((productivity.lowercap + productivity.uppercap) / 2).toFixed(2);
        const updatedValues = [...productivityValues];
        updatedValues[index].value = updatedValue;
        setProductivityValues(updatedValues);
      }, index * 500); // Increase the timeout duration for each card
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
