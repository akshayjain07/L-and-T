import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import GenButton from "./components/GenButton";
import GenButton2 from "./components/GenButton2";
import LineChart from "./components/lineChart";
import PieChart from "./components/PieChart";
import AnalysisCharts from "./components/AnalysisCharts";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          {/* <Hero /> */}
        </div>
        <About />
        <Experience />
        {/* <GenButton/> */}
        <GenButton2/>
        <AnalysisCharts/>
        {/* <LineChart/> */}
        {/* <PieChart/> */}
        {/* <Tech /> */}
        {/* <Works /> */}
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
