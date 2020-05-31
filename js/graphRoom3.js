window.onload = function(){
  var ctx = document.getElementById("room3chart").getContext('2d');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["6:00AM",	"7:00AM",	"8:00AM",	"9:00AM",	"10:00AM",	"11:00AM",	"12:00PM","1:00PM",	"2:00PM","3:00PM"],
      datasets: [{
            label: 'Co2 Levels', // Name the series
            data: [232,	1232,	4545,	232,	1123,	7677,	123,	12,	4, 123], // Specify the data values array
            fill: false,
            borderColor: '#FF5733', // Add custom color border (Line)
            backgroundColor: '#FF5733', // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        },
                  {
            label: 'Ammonia Levels', // Name the series
            data: [11,	222,	334,	55,	23,	242,	1417,	55024,	12, 2], // Specify the data values array
            fill: false,
            borderColor: '#FFC300', // Add custom color border (Line)
            backgroundColor: '#FFC300', // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        },
        {
          label: 'Benzene Levels', // Name the series
          data: [1321,	23,	233,	23,	123,	123,	33,	33,	12, 1], // Specify the data values array
          fill: false,
          borderColor: '#DAF7A6', // Add custom color border (Line)
          backgroundColor: '#DAF7A6', // Add custom color background (Points and Fill)
          borderWidth: 1 // Specify bar border width
      },
      {
        label: 'Nitric Oxide Levels', // Name the series
        data: [123,	55,	44,	33,	2,	12,	23,	23,	11, 32], // Specify the data values array
        fill: false,
        borderColor: '#C70039', // Add custom color border (Line)
        backgroundColor: '#C70039', // Add custom color background (Points and Fill)
        borderWidth: 1 // Specify bar border width
    },
    {
      label: 'Alcohol Levels', // Name the series
      data: [123,	32,	12,	321,	44,	23,	1233,	123,	1233, 2], // Specify the data values array
      fill: false,
      borderColor: '#00C72B', // Add custom color border (Line)
      backgroundColor: '#00C72B', // Add custom color background (Points and Fill)
      borderWidth: 1 // Specify bar border width
  }]
    },
    options: {
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
    }
});

    var ctx3 = document.getElementById("indicadores").getContext('2d');

var myChart3 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ["Co2",	"Amonia",	"Benzene"],
        datasets: [{    
            data: [9889,	123,	323], // Specify the data values array
          
            borderColor: ['#FF5733', '#FFC300', '#DAF7A6'], // Add custom color border 
            backgroundColor: ['#FF5733', '#FFC300', '#DAF7A6'], // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        }]},         
    options: {
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
      title: {
        display: true,
        text: "Analysis Air"
      },
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
      labels: ["Ammonia", "Origen", "Benzene"],
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
        text: "Ammount of day"
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
