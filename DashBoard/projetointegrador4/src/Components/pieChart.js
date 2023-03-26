import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Url from '../Services/httpAPI'



ChartJS.register(ArcElement, Tooltip, Legend);




var detector1 = 0;
var detector2 = 0;
var detector3 = 0;
function request() {
  fetch(Url, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    }
  }
  ).then(response => response.json())
    .then(response => {

      response.forEach(element => {
        if(element.id_button == 1) detector1++;
        if(element.id_button == 2) detector2++;
        if(element.id_button == 3) detector3++;


      });

    })
    .catch(erro => console.log(erro))
}


request();





  const options = {
    responsive: true,


  }

 var data = {
    labels: ['Sinalizador 1', 'Sinalizador 2', 'Sinalizador 3'],
    datasets: [
      {
        label: 'Quantidade de Acionamentos',
        data: [detector1, detector2, detector3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(75, 192, 192, 0.2)',

        ],
        borderColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderWidth: 1,
      },
    ],
  }











export default function PieChart(props) {
  return <Pie data={data}  options={options}/>;
}