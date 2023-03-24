var dataPieChart ={
    options : {
  responsive: true,
 
    
},

data : {
  labels: ['Sinalizador 1', 'Sinalizador 2', 'Sinalizador 3'],
  datasets: [
    {
      label: 'Quantidade de Acionamentos',
      data: [10, 25, 25],
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

}

export default dataPieChart;