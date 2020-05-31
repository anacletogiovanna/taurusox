window.onload = function(){
    var ctx3 = document.getElementById("indicadores").getContext('2d');

var myChart3 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ["Zas",	"Amonia",	"Co2",	"Origênio"],
        datasets: [{    
            data: [500,	50,	2424,	14040], // Specify the data values array
          
            borderColor: ['#2196f38c', '#f443368c', '#3f51b570', '#00968896'], // Add custom color border 
            backgroundColor: ['#2196f38c', '#f443368c', '#3f51b570', '#00968896'], // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        }]},         
    options: {
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
    }
});

var chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(231,233,237)'
  };
  
  window.randomScalingFactor = function() {
    return (Math.random() > 0.5 ? 1.0 : 1.0) * Math.round(Math.random() * 100);
  };
  
  var ctx4 = document.getElementById("barchart").getContext("2d");
  var myBar = new Chart(ctx4, {
    type: 'bar',
    data: {
      labels: ["Car", "Bike", "Walking"],
      datasets: [{
        label: 'Fuel',
        backgroundColor: [
          chartColors.red,
          chartColors.blue,
          chartColors.yellow],
        data: [
          randomScalingFactor(), 
          randomScalingFactor(), 
          randomScalingFactor(), 
        ]
      }]
    },
    options: {
      title: {
        display: true,
        text: "Chart.js - Different Bar Colors"
      },
      tooltips: {
        mode: 'index',
        intersect: false
      },
      legend: {
        display: false,
      },
      responsive: true,
    }
  });
}
