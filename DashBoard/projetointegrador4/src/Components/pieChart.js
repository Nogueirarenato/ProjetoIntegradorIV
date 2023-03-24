import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import DataPieChart from './pieChartData.js';


ChartJS.register(ArcElement, Tooltip, Legend);


export default function PieChart(props) {
  return <Pie data={DataPieChart.data}  options={DataPieChart.options}/>;
}