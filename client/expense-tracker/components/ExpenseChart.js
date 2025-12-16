// import React from 'react';
// import { Dimensions } from 'react-native';
// import { PieChart } from 'react-native-chart-kit';

// const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#9C27B0'];

// export default function ExpenseChart({ expenses }) {
//   const screenWidth = Dimensions.get('window').width;

//   const grouped = expenses.reduce((acc, item) => {
//     acc[item.category] = (acc[item.category] || 0) + item.amount;
//     return acc;
//   }, {});

//   const data = Object.entries(grouped).map(([key, value], index) => ({
//     name: key,
//     population: value,
//     color: COLORS[index % COLORS.length],
//     legendFontColor: '#000',
//     legendFontSize: 12
//   }));

//   if (data.length === 0) return null;

//   return (
//     <PieChart
//       data={data}
//       width={screenWidth}
//       height={220}
//       accessor="population"
//       backgroundColor="transparent"
//       paddingLeft="15"
//     />
//   );
// }

