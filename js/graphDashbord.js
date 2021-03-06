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

}
