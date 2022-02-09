import React from "react";
import PropTypes from 'prop-types';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

/**
 * render a RadarChart graph
 * @param { array } dataSet
 * return {ReactElement}
 */
function RadarChartGraph(props) {

  const data = props.dataSet;

  return (
    <div className="radarchart">
      <RadarChart
        cx={130}
        cy={130}
        outerRadius={70}
        width={260}
        height={260}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis tick={{fill: 'white'}}  dataKey="kind" />
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

RadarChartGraph.propTypes = {
  dataSet: PropTypes.array.isRequired
}

export default RadarChartGraph;
