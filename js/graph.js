window.onload = function(){
    var ctx = document.getElementById("sensor1").getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["6:00AM",	"7:00AM",	"8:00AM",	"9:00AM",	"10:00AM",	"11:00AM",	"12:00PM","1:00PM",	"2:00PM","3:00PM"],
            datasets: [{
                label: 'CO2 Sensor', // Name the series
                data: [500,	50,	2424,	14040,	14141,	4111,	4544,	47,	5555, 6811], // Specify the data values array
                fill: false,
                color:'#FCF5F4',
                borderColor: '#2196f3', // Add custom color border (Line)
                backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
                borderWidth: 1 // Specify bar border width
            }]},
        options: {
          responsive: true, // Instruct chart js to respond nicely.
          maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
          scales: {
            xAxes: [{ 
                ticks: {
                  fontColor: "#DACCC9", // this here
                },
            }],
            yAxes: [{
                ticks: {
                    fontColor: "#DACCC9", // this here
                  },
            }],
        }
        }
    });

    var ctx2 = document.getElementById("sensor2").getContext('2d');

    var myChart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ["6:00AM",	"7:00AM",	"8:00AM",	"9:00AM",	"10:00AM",	"11:00AM",	"12:00PM","1:00PM",	"2:00PM","3:00PM"],
            datasets: [{
                label: 'Alchool Sensor', // Name the series
                data: [600,	50,	23234,	76763,	14141,	4111,	4544,	47,	3434, 55], // Specify the data values array
                fill: false,
                borderColor: '#E1411F', // Add custom color border (Line)
                backgroundColor: '#E1411F', // Add custom color background (Points and Fill)
                borderWidth: 1 // Specify bar border width
            }]},
        options: {
          responsive: true, // Instruct chart js to respond nicely.
          maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
          scales: {
            xAxes: [{ 
                ticks: {
                  fontColor: "#DACCC9", // this here
                },
            }],
            yAxes: [{
                ticks: {
                    fontColor: "#DACCC9", // this here
                  },
            }],
        }
        }
    });

    var ctx5 = document.getElementById("sensor3").getContext('2d');

    var myChart2 = new Chart(ctx5, {
        type: 'line',
        data: {
            labels: ["6:00AM",	"7:00AM",	"8:00AM",	"9:00AM",	"10:00AM",	"11:00AM",	"12:00PM","1:00PM",	"2:00PM","3:00PM"],
            datasets: [{
                label: 'Benzeno Sensor', // Name the series
                data: [11,	4564,	23,	123,	23,	33,	55,	88,	345, 55], // Specify the data values array
                fill: false,
                borderColor: '#31E11F', // Add custom color border (Line)
                backgroundColor: '#31E11F', // Add custom color background (Points and Fill)
                borderWidth: 1 // Specify bar border width
            }]},
        options: {
          responsive: true, // Instruct chart js to respond nicely.
          maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
          scales: {
            xAxes: [{ 
                ticks: {
                  fontColor: "#DACCC9", // this here
                },
            }],
            yAxes: [{
                ticks: {
                    fontColor: "#DACCC9", // this here
                  },
            }],
        }
        }
    });

    var ctx6 = document.getElementById("sensor4").getContext('2d');

    var myChart2 = new Chart(ctx6, {
        type: 'line',
        data: {
            labels: ["6:00AM",	"7:00AM",	"8:00AM",	"9:00AM",	"10:00AM",	"11:00AM",	"12:00PM","1:00PM",	"2:00PM","3:00PM"],
            datasets: [{
                label: 'Amonia Sensor', // Name the series
                data: [11,	12350,	232434,	55445,	2323,	343,	65656,	333,	222, 55], // Specify the data values array
                fill: false,
                borderColor: '#E11F5D', // Add custom color border (Line)
                backgroundColor: '#E11F5D', // Add custom color background (Points and Fill)
                borderWidth: 1 // Specify bar border width
            }]},
        options: {
          responsive: true, // Instruct chart js to respond nicely.
          maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
          scales: {
            xAxes: [{ 
                ticks: {
                  fontColor: "#DACCC9", // this here
                },
            }],
            yAxes: [{
                ticks: {
                    fontColor: "#DACCC9", // this here
                  },
            }],
        }
        }
    });


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
