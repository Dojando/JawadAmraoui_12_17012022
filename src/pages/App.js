import {React, useState, useEffect} from "react";
import Header from "../components/header"
import Error from "../components/error"
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
import * as ApiCall from "../apiCall"


function App() {
  const [lineGraphData, setLineGraphData] = useState(null);
  const [radarGraphData, setRadarGraphData] = useState(null);
  const [barGraphData, setBarGraphData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [validId, setValidId] = useState(true);
  let lineDataSet = [];
  let radarDataSet = [];
  console.log()

  const lineData = (data) => {
    data.data.sessions.forEach(el => {
      if (el.day === 1) {
        el.day = "L";
        return lineDataSet.push(el);
      }
      if (el.day === 2) {
        el.day = "M";
        return lineDataSet.push(el);
      }
      if (el.day === 3) {
        el.day = "M";
        return lineDataSet.push(el);
      }
      if (el.day === 4) {
        el.day = "J";
        return lineDataSet.push(el);
      }
      if (el.day === 5) {
        el.day = "V";
        return lineDataSet.push(el);
      }
      if (el.day === 6) {
        el.day = "S";
        return lineDataSet.push(el);
      }
      if (el.day === 7) {
        el.day = "D";
        return lineDataSet.push(el);
      }
    });
    setLineGraphData(lineDataSet)
  };

  const radarData = (data) => {
    data.data.data.map((el) => {
      el.kind = data.data.kind[el.kind];
      return radarDataSet.push(el);
    })
    setRadarGraphData(radarDataSet)
  }

  useEffect(() => {
    async function apiCallUserData() {
      let result = await ApiCall.getUserData();
      if (result === "can not get user") {
        setValidId(false);
      }
      setUserData(result.data);
    }
    apiCallUserData();
  }, [])

  useEffect(() => {
    async function apiCallAverageSessionsData() {
      let result = await ApiCall.getAverageSessions();
      lineData(result);
    }
    apiCallAverageSessionsData();
  }, [])

  useEffect(() => {
    async function apiCallPerformance() {
      let result = await ApiCall.getPerformance();
      radarData(result);
    }
    apiCallPerformance();
  }, [])
  
  useEffect(() => {
    async function apiCallActivity() {
      let result = await ApiCall.getActivity();
      setBarGraphData(result.data.sessions);
    }
    apiCallActivity();
  }, [])

  return (
    <div className="App">
      <Header />
      <div className="app-body">
        <Aside />
        { validId === false ? <Error /> : 
        <div className="dashboard">
          <header className="dashboard-header">
            <h1>Bonjour <span className="red-name">{userData === null ? null : userData.userInfos.firstName}</span></h1> 
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </header>
          <div className="dashboard-body">
            <div className="graphs-list">
              <div className="barchart-container">
              { barGraphData === null ? null : <BarChartGraph dataSet={barGraphData} />}
              </div>
              <div className="bottom-graphs">
                <div className="linechart-container">
                  { lineGraphData === null ? null : <LineChart dataSet={lineGraphData} />} 
                </div>
                <div className="radarchart-container">
                { radarGraphData === null ? null : <RadarChart dataSet={radarGraphData} />} 
                </div>
                <div className="radialchart-container">
                { userData === null ? null : <RadialChart dataSet={userData.score} />} 
                </div>
              </div>
            </div>
            <div className="food-data-list">
            {userData === null ? null : <FoodData logo={ calorieLogo } value={userData.keyData.calorieCount} type="Calories" unit="kCal" />}
            {userData === null ? null : <FoodData logo={ proteinLogo } value={userData.keyData.proteinCount} type="Proteines" unit="g" />}
            {userData === null ? null : <FoodData logo={ carbLogo } value={userData.keyData.carbohydrateCount} type="Glucides" unit="g" />}
            {userData === null ? null : <FoodData logo={ fatLogo } value={userData.keyData.lipidCount} type="Lipides" unit="g" />}
            </div>
          </div>
        </div>}
      </div>
    </div>
  );
}

export default App;
