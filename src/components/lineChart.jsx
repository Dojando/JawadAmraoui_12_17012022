import {React} from "react";
import PropTypes from 'prop-types';
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
} from "recharts";

/**
 * function to show custom content in the tooltip
 * @param { boolean } active
 * @param { array } payload
 * return {HTMLElement}
 */
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

/**
 * render a LineChart graph
 * @param { array } dataSet
 * return {ReactElement}
 */
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

LineChartGraph.propTypes = {
  dataSet: PropTypes.array.isRequired
}

export default LineChartGraph;
