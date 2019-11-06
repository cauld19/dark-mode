import React from "react";
import moment from "moment";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const Chart = ({ sparklineData, colorMode, tickColor}) => {
  const formattedData = sparklineData
    .map((price, idx) => {
      if (idx % 6 === 0) {
        const timeToSubtract = 168 - idx;
        const date = moment()
          .subtract(timeToSubtract, "hours")
          .format("ddd h:mma");
        return { value: price, date };
      } else if (idx === sparklineData.length - 1) {
        const date = moment().format("ddd h:mma");
        return { value: price, date };
      }
      return null;
    })
    .filter(data => data);

   
    

  return (
    <LineChart width={1100} height={300} data={formattedData}>
      <Line type="monotone" dataKey="value" stroke={!colorMode ? "#00f000" : "#048a95"} />
      <CartesianGrid stroke={!colorMode ? "#ccc" : "#ff00ff"} strokeDasharray="5 5" />
      <XAxis dataKey="date" interval={3} tick={{ fill: tickColor }}/>
      <YAxis tick={{fill: tickColor}}/>
      <Tooltip />
    </LineChart>
  );
};

export default Chart;
