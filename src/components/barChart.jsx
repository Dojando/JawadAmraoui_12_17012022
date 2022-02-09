import React from "react";
import PropTypes from 'prop-types';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

// function to show custom content in the tooltip
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="barchart-tooltip">
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }
  return null;
};

// function to change legend text color
const renderColorfulLegendText = (value) => {
  return <span style={{ color:"black" }}>{value}</span>;
};

function BarChartGraph(props) {
  
  const data = props.dataSet;

  return (
    <div className="barchart">
      <p className="barchart-title">Activité quotidienne</p>
      <BarChart width={800} height={300} data={data}>
        <CartesianGrid vertical="" strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis orientation="right"
            />
        <Tooltip content={<CustomTooltip />} />
        <Legend formatter={renderColorfulLegendText}
          verticalAlign="top"
          align="right"
          wrapperStyle={{ lineHeight: "50px"}}
        />

        <Bar name="Poids (kg)" dataKey="kilogram" fill="black" />
        <Bar name="Calories brûlées (kCal)" dataKey="calories" fill="red" />
      </BarChart>
    </div>
  );
}

BarChartGraph.propTypes = {
  dataSet: PropTypes.array.isRequired
}

export default BarChartGraph;