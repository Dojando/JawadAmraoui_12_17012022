import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    day: '2020-07-01',
    kilogram: 80,
    calories: 240
},
{
    day: '2020-07-02',
    kilogram: 80,
    calories: 220
},
{
    day: '2020-07-03',
    kilogram: 81,
    calories: 280
},
{
    day: '2020-07-04',
    kilogram: 81,
    calories: 290
},
{
    day: '2020-07-05',
    kilogram: 80,
    calories: 160
},
{
    day: '2020-07-06',
    kilogram: 78,
    calories: 162
},
{
    day: '2020-07-07',
    kilogram: 76,
    calories: 390
}
];

function BarChartGraph() {
  return (
    <div className="barchart">
      <p className="barchart-title">Activité quotidienne</p>
      <BarChart width={800} height={300} data={data}>
        <CartesianGrid vertical="" strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis orientation="right"
            />
        <Tooltip contentStyle={{  background: "red", color: "white" }} itemStyle={{ color: "white" }}/>
        <Legend
          verticalAlign="top"
          align="right"
          wrapperStyle={{ lineHeight: "50px" }}
        />

        <Bar name="Poids (kg)" dataKey="kilogram" fill="black" />
        <Bar name="Calories brûlées (kCal)" dataKey="calories" fill="red" />
      </BarChart>
    </div>
  );
}

export default BarChartGraph;