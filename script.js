'use strict';
// toggle hamburger menu;
const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');

const showNav = () => {
  if(hamburger.src.endsWith('icon-hamburger.svg')) {
    hamburger.src = './icon-close.svg';
  } else {
    hamburger.src = './icon-hamburger.svg';
  }

  navUl.classList.toggle('show');
}
hamburger.addEventListener('click', showNav);

// side navbar js
let toggle1 = document.querySelector('.toggle1');
let toggle2 = document.querySelector('.toggle2');
let menu1 = document.querySelector('#subMenu1');
let menu2 = document.querySelector('#subMenu2');
let menu3 = document.querySelector('#subMenu3');
let menu4 = document.querySelector('#subMenu4');
let menu5 = document.querySelector('#subMenu5');
let menu6 = document.querySelector('#subMenu6');
let arrow1 = document.querySelector('#downArrow');
let arrow2 = document.querySelector('#leftArrow1');

arrow1.addEventListener('click', ()=> {
  if(menu1.style.display === 'block' 
  || menu2.style.display === 'block' 
  || menu3.style.display === 'block') {
    menu1.style.display === 'none';
    menu2.style.display === 'none';
    menu3.style.display === 'none';
  }
  else {
    menu1.style.display === 'block';
    menu2.style.display === 'block';
    menu3.style.display === 'block';
  }
});


// 

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