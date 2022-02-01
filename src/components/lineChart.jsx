import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  {
    day: 1,
    sessionLength: 30
},
{
    day: 2,
    sessionLength: 23
},
{
    day: 3,
    sessionLength: 45
},
{
    day: 4,
    sessionLength: 50
},
{
    day: 5,
    sessionLength: 0
},
{
    day: 6,
    sessionLength: 0
},
{
    day: 7,
    sessionLength: 60
}
];

function LineChartGraph() {
  return (
    <div className="linechart">
      <h2>Durée moyenne des sessions</h2>
      <LineChart
        width={260}
        height={200}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}>
        <XAxis axisLine="" tickLine="" tick={{stroke: 'white', strokeWidth: 1}}  dataKey="day" />
        <Tooltip contentStyle={{  color: "black" }} itemStyle={{ color: "black" }}/>
        <Line
          type="monotone"
          dataKey="sessionLength"
          strokeWidth={2}
          stroke="white"
          activeDot={{ r: 8 }}
        />
      </LineChart>      
    </div>
  );
}

export default LineChartGraph;
