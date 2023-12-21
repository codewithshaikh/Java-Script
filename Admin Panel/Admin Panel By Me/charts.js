		var xValues = ["Jan", "Feb", "March", "April", "May", "June","July","August","Sept" , "October", "Nov" , "Dec"];
		var yValues = [4000,3500,7000,6500,5500,5000,7900,3900,12500,4500,9000,10000];
		var barColors = ["red", "blue","cyan","green","violet" , "orange" , "pink" , "blue" , "cyan" , "green" , "violet" , "orange"];

		new Chart("myChart1", {
		  type: "bar",
		  data: {
		    labels: xValues,
		    datasets: [{
		      backgroundColor: barColors,
		      data: yValues
		    }]
		  },
		  options: {
		    legend: {display: false},
		    title: {
		      display: true,
		      text: "Sales of Year 2022"
		    },
		    scales: {
      		y: { // defining min and max so hiding the dataset does not change scale range
		        min: 0,
		        max: 13000
		      }
		    }
		  }
		});



		var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
		var yValues = [55, 49, 44, 24, 15];
		var barColors = [
		  "#b91d47",
		  "#00aba9",
		  "#2b5797",
		  "#e8c3b9",
		  "#1e7145"
		];

		new Chart("myChart2", {
		  type: "pie",
		  data: {
		    labels: xValues,
		    datasets: [{
		      backgroundColor: barColors,
		      data: yValues
		    }]
		  },
		  options: {
		    title: {
		      display: true,
		      text: "World Wide Product Sales 2022"
		    },
		  }
		});


		var xValues = [1,2,3,4,5,6,7,8,9,10,11,12];

		var yValues = [38,32,100,180,120,100,250,50,450,150,300,350];

		new Chart("myChart3", {
		  type: "line",
		  data: {
		    labels: xValues,
		    datasets: [{
		      fill: true,
		      lineTension: 0,
		      borderColor: "blue",
		      data: yValues
		    }]
		  },
		  options: {
		    legend: {display: false},
		    scales: {
		    	xAxes :  [{ticks: {min: 0, max:13}}],
		      yAxes: [{ticks: {min: 0, max: 500}}],
		    }
		  }
		});