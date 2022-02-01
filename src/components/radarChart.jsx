import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

const data = [
  {
    value: 80,
    kind: 1
},
{
    value: 120,
    kind: 2
},
{
    value: 140,
    kind: 3
},
{
    value: 50,
    kind: 4
},
{
    value: 200,
    kind: 5
},
{
    value: 90,
    kind: 6
}
];

function RadarChartGraph() {
  return (
    <div className="radarchart">
      <RadarChart
        cx={130}
        cy={130}
        outerRadius={90}
        width={260}
        height={260}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis tick={{stroke: 'white'  }}  dataKey="kind" />
        <PolarRadiusAxis />
        <Radar
          dataKey="value"
          stroke="red"
          fill="red"
          fillOpacity={0.5}
        />
      </RadarChart>
    </div>

  );
}

export default RadarChartGraph;
