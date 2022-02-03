import {React, useState, useEffect} from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
} from "recharts";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="linechart-tooltip">
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};

function LineChartGraph(props) {
  
  const graphsetData = props.dataSet;

  return (
    <div className="linechart">
      <h2>Durée moyenne des sessions</h2>
      <LineChart
        width={260}
        height={200}
        data={graphsetData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}>
        <XAxis axisLine="" tickLine="" tick={{fill: 'white'}} dataKey="day"/>
        <Tooltip content={<CustomTooltip />}/>
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
