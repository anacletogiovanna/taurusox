window.onload = function(){
  var ctx = document.getElementById("room2chart").getContext('2d');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["6:00AM",	"7:00AM",	"8:00AM",	"9:00AM",	"10:00AM",	"11:00AM",	"12:00PM","1:00PM",	"2:00PM","3:00PM"],
      datasets: [{
            label: 'Co2 Levels', // Name the series
            data: [123321,	123,	34,	5665,	234,	76,	4545,	12,	8, 6811], // Specify the data values array
            fill: false,
            borderColor: '#FF5733', // Add custom color border (Line)
            backgroundColor: '#FF5733', // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        },
                  {
            label: 'Ammonia Levels', // Name the series
            data: [87,	8842,	44545,	7588,	99,	242,	1417,	55024,	12, 5656], // Specify the data values array
            fill: false,
            borderColor: '#FFC300', // Add custom color border (Line)
            backgroundColor: '#FFC300', // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        },
        {
          label: 'Benzene Levels', // Name the series
          data: [123,	54545,	2324,	57657,	2332,	22,	567,	5665,	454, 5656], // Specify the data values array
          fill: false,
          borderColor: '#DAF7A6', // Add custom color border (Line)
          backgroundColor: '#DAF7A6', // Add custom color background (Points and Fill)
          borderWidth: 1 // Specify bar border width
      },
      {
        label: 'Nitric Oxide Levels', // Name the series
        data: [4545,	42545,	4545,	676,	56,	232,	5656,	889,	56, 99], // Specify the data values array
        fill: false,
        borderColor: '#C70039', // Add custom color border (Line)
        backgroundColor: '#C70039', // Add custom color background (Points and Fill)
        borderWidth: 1 // Specify bar border width
    },
    {
      label: 'Alcohol Levels', // Name the series
      data: [878,	565,	88,	9889,	5445,	33,	123,	2,	1232, 2], // Specify the data values array
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
        labels: ["Co2","Nitric", "Alcohol"],
        datasets: [{    
            data: [500,	2343, 1212], // Specify the data values array
          
            borderColor: ['#FF5733',  '#C70039', '#00C72B'], // Add custom color border 
            backgroundColor: ['#FF5733', '#C70039', '#00C72B'], // Add custom color background (Points and Fill)
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
      labels: ["Ammonia", "Oxygen", "Benzene"],
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
