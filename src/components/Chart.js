import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import colors from '../utils/Colors';


const Graph = ({userData}) => {
  // console.log('Graph');
  // console.log(userData);
  // console.log(colors);
  const chartData = userData.coins.map((coin, index) => {
    const coinData = {title: coin.coin_id, value: Math.floor(coin.value), color: colors[index].color}
    return coinData
  })
  // console.log(chartData)
  return (
    <div>
    {userData &&
      <PieChart
        // data={[
        //   { title: 'ethereum', value: 40218, color: '#E38627' },
        //   { title: 'bitcoin', value: 38882, color: '#C13C37' },
        //   { title: 'cardano', value: 27400, color: '#6A2135' }
        // ]}
//         label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} % ${dataEntry.title}`}
            data={chartData}
            
            // label={({ dataEntry }) => dataEntry.value}
      />}
    </div>
  );
};

export default Graph;