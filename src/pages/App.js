import Header from "../components/header"
import Aside from "../components/aside"
import FoodData from "../components/foodData"
import BarChartGraph from "../components/barChart.jsx"
import LineChart from "../components/lineChart"
import RadarChart from "../components/radarChart"
import calorieLogo from "../images/calories-icon.png"
import carbLogo from "../images/carbs-icon.png"
import proteinLogo from "../images/protein-icon.png"
import fatLogo from "../images/fat-icon.png"

function App() {
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
                  <LineChart /> 
                </div>
                <div className="radarchart-container">
                  <RadarChart/>
                </div>
                <div className="radialchart-container"></div>
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
