
$(document).ready(function() {
	$("#weatherSubmit").click(function(e) {
		e.preventDefault();
		var value = $("#weatherInput").val();
	        console.log(value);
	    });

		var myurl= "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=APIKEY";
		$.ajax({
		    url : myurl,
		    dataType : "json",
		    success : function(json) {
			console.log(json);
		    }
		});

		var results = "";
	results += '<h2>Weather in ' + json.name + "</h2>";
	for (var i=0; i<json.weather.length; i++) {
	    results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
	}
	results += '<h2>' + json.main.temp + " &deg;F</h2>"
	results += "<p>"
	for (var i=0; i<json.weather.length; i++) {
	    results += json.weather[i].description
	    if (i !== json.weather.length - 1)
		results += ", "
	}
	results += "</p>";
	$("#weatherResults").html(results);
}