import React from 'react'
import PieChart from './PieChart'
import { SectionWrapper } from "../hoc";
import BarChart from './BarChart';
import LineChart from './LineChart';
import { motion } from "framer-motion";
import { styles } from "../styles";
import LineChart2 from './LineChart2';
import Buttons2 from './Buttons2';
import Buttons from './buttons';

const AnalysisCharts = () => {
  return (
    <div>
      <div className='mb-10'>
        {/* <motion.div variants={textVariant()}> */}
          <p className={`${styles.sectionSubText} text-center`}>
            Some interesting
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            TRENDS
          </h2>
        {/* </motion.div> */}
      </div>
      <div className="mx-5 flex flex-col lg:flex-row justify-center items-center lg:space-x-8 ">
        <div className="lg:w-1/2">
          <BarChart />
        </div>
        <div className="lg:w-1/2">
          <PieChart />
        </div>
      </div>

      <div className="mx-5 flex flex-col lg:flex-row justify-center items-center lg:space-x-8 ">
        <div className="lg:w-1/2">
          <LineChart2 />
        </div>
        <div className="lg:w-1/2">
          <Buttons/>
        </div>
      </div>
      
      <div className="mx-5 flex flex-col lg:flex-row justify-center items-center lg:space-x-8 ">
        <div className="lg:w-1/2">
          <LineChart />
        </div>
        <div className="lg:w-1/2">
          <Buttons2 />
        </div>
      </div>


    </div>
  )
}

export default SectionWrapper(AnalysisCharts, "analysis");