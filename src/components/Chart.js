import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import colors from '../utils/Colors';


const Graph = ({userData}) => {
  // console.log('Graph');
  // console.log(userData);
  // console.log(colors);
  const chartData = userData.map((coin, index) => {
    const coinData = {title: coin.coin_id, value: coin.value.toLocaleString(), color: colors[index].color}
    return coinData
  })
  console.log(chartData)
  return (
    <div>
    {/* {userData &&
      <PieChart
//         data={[
//           { title: 'One', value: 10, color: '#E38627' },
//           { title: 'Two', value: 15, color: '#C13C37' },
//           { title: 'Three', value: 20, color: '#6A2135' }
//         ]}
//         label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} % ${dataEntry.title}`}
            data = {chartData}
            label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} % ${dataEntry.title}`}
            // label={({ dataEntry }) => dataEntry.value}
      />} */}
    </div>
  );
};

export default Graph;