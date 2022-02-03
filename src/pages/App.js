import {React, useState, useEffect} from "react";
import Header from "../components/header"
import Aside from "../components/aside"
import FoodData from "../components/foodData"
import BarChartGraph from "../components/barChart.jsx"
import LineChart from "../components/lineChart"
import RadarChart from "../components/radarChart"
import RadialChart from "../components/radialBarChart"
import calorieLogo from "../images/calories-icon.png"
import carbLogo from "../images/carbs-icon.png"
import proteinLogo from "../images/protein-icon.png"
import fatLogo from "../images/fat-icon.png"



function App() {
  const [graphData, setGraphData] = useState(null);
  let dataSet = [];

  const formatData = (data) => {
    data.data.sessions.forEach(el => {
      if (el.day === 1) {
        el.day = "L";
        return dataSet.push(el);
      }
      if (el.day === 2) {
        el.day = "M";
        return dataSet.push(el);
      }
      if (el.day === 3) {
        el.day = "M";
        return dataSet.push(el);
      }
      if (el.day === 4) {
        el.day = "J";
        return dataSet.push(el);
      }
      if (el.day === 5) {
        el.day = "V";
        return dataSet.push(el);
      }
      if (el.day === 6) {
        el.day = "S";
        return dataSet.push(el);
      }
      if (el.day === 7) {
        el.day = "D";
        return dataSet.push(el);
      }
    });
    console.log(dataSet)
    setGraphData(dataSet)
  };
  console.log(graphData)


  useEffect(() => {
    fetch(`http://localhost:3000/user/12/average-sessions`)
      .then((response) => response.json()
      .then((res) => formatData(res))
      .catch((error) => console.log(error))
    )
  }, [])

  return (
    <div className="App">
      <Header />
      <div className="app-body">
        <Aside />
        <div className="dashboard">
          <header className="dashboard-header">
            <h1>Bonjour <span className="red-name">Thomas</span></h1> 
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </header>
          <div className="dashboard-body">
            <div className="graphs-list">
              <div className="barchart-container">
                <BarChartGraph />
              </div>
              <div className="bottom-graphs">
                <div className="linechart-container">
                  { graphData === null ? null : <LineChart dataSet={graphData} />} 
                </div>
                <div className="radarchart-container">
                  <RadarChart/>
                </div>
                <div className="radialchart-container">
                  <RadialChart/>
                </div>
              </div>
            </div>
            <div className="food-data-list">
              <FoodData logo={ calorieLogo }/>
              <FoodData logo={ proteinLogo }/>
              <FoodData logo={ carbLogo }/>
              <FoodData logo={ fatLogo }/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
