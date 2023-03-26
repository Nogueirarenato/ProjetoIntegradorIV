
import './App.css';
import BarChart from './Charts/BarChart';
import DoughnutChart from './Charts/DoughnutChart';
import LineChart from './Charts/LineChart';
import PieChart from './Charts/PieChart';
function App() {
  return (
    <div className="App">
      <BarChart style={{width: "50vw"}}></BarChart>
      <PieChart></PieChart>
      <DoughnutChart></DoughnutChart>
      <LineChart></LineChart>
    </div>
  );
}

export default App;
