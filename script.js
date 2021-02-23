'use strict';
let ctx = document.getElementById('lineChart');
let lineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    datasets: [{
          label: 'Apple',
          backgroundColor: '#1767e081',
          borderWidth: 2,
          borderColor: '#7983CF',
          data: [0,30,60,25,60,25,50,0]
      }, {
          label: 'Samsung',
          backgroundColor: '#DA63A1',
          borderWidth: 2,
          borderColor: '#5c052e54',
          data: [0,60,25,80,35,75,30,0]
      }]
    },
          option: {}
        
});

// barchart...
let ctex = document.getElementById('barChart');
let barChart = new Chart(ctex, {
  type: 'bar',
  data: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    datasets: [{
          label: 'Laptops',
          backgroundColor: '#FFC379',
          data: [40,30,60,35,60,25,50,40]
      }, {
          label: 'Mobiles',
          backgroundColor: '#AF53B3',
          data: [50,60,40,70,35,75,30]
      }]
    },
          option: {
          scales: {
          yAxes: [{
            // ticks: {
            //   beginAtZero: false
            // }
            min: 20
          }]
        }
      }             
});

// bar, 
// 