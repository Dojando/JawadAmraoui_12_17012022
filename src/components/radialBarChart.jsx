import React from "react";
import { RadialBarChart, RadialBar } from "recharts";

function RadialChartGraph(props) {

  const data = [
    {
      uv: 1,
      fill: "#8884d8"
    },
    {
      uv: props.dataSet,
      fill: "red"
    }
  ];

  return (
    <div className="radialchart">
      <h2>Score</h2>
      <p className="radialchart-legend"><span className="radialchart-pourcent">{props.dataSet * 100}%</span><br /> de votre objectif</p>
      <RadialBarChart
        width={260}
        height={260}
        cx={130}
        cy={130}
        innerRadius={-7}
        outerRadius={170}
        barSize={15}
        startAngle={90}
        endAngle={450}
        data={data}
      >
        <RadialBar
          background
          dataKey="uv"
        />
      </RadialBarChart>      
    </div>
  );
}

export default RadialChartGraph;