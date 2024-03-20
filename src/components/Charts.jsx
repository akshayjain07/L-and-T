import React from 'react'
import LineChart from './lineChart'
import PieChart from './PieChart'

const Charts = () => {
  return (
          <>
                <LineChart />
          <PieChart />
          </>
  )
}

export default SectionWrapper(Charts, "analysis");