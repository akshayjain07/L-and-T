import React from 'react'
import LineChart from './lineChart'
import PieChart from './PieChart'
import { SectionWrapper } from "../hoc";

const AnalysisCharts = () => {
  return (
    <div className="mx-5 flex flex-col lg:flex-row justify-center items-center lg:space-x-8">
      <div className="lg:w-1/2">
        <LineChart />
      </div>
      <div className="lg:w-1/2">
        <PieChart />
      </div>
    </div>
  )
}

export default SectionWrapper(AnalysisCharts, "analysis");