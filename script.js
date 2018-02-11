
$(document).ready(function() {
	$("#weatherSubmit").click(function(e) {
		e.preventDefault();
		var value = $("#weatherInput").val();
	        console.log(value);

	    var myurl= "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=762f14fd60d3a3b0587bcc310aeb6e06";
		$.ajax({
		    url : myurl,
		    dataType : "json",
		    success : function(json) {
			console.log(json);
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
				results += "<p>Humidity: " + json.main.humidity + "</p>";	
				results += "<p>Pressure: " + json.main.pressure + "</p>";	
				results += "<p>Wind Speed: " + json.wind.speed + "</p>";	
				results += "<p>Lattitude: " + json.coord.lat + "</p>";		
				results += "<p>Longitude: " + json.coord.lon + "</p>";	
				$("#weatherResults").html(results);
		    }
		});
	});




	$("#stackSubmit").click(function(e) {
		e.preventDefault();
		var value = $("#stackInput").val();
	        console.log(value);

	    var myurl= "https://api.stackexchange.com/2.2/search?order=desc&sort=activity&site=stackoverflow&intitle=" 
	    	+ value;
		$.ajax({
		    url : myurl,
		    dataType : "json",
		    success : function(json) {
			console.log(json);
				var results = "";
				//results += '<h2>Answer: ' + json.items[0].link + "</h2>";
				console.log(results);
				results += "<h4>Top 5 results</h4>";
				for (var i=0; i<5; i++) {
					results += "<h2>Question: " + json.items[i].title + "</h2>";
					if (json.items[i].is_answered == true) {
						results += "<p>This question has an answer. Click the link below to see.</p>";
						results += "<p>View Page: </h4><a href=\"" + json.items[i].link + "\">Stack Overflow</a>";
					}
					else {
						results += "<p>We're sorry, this question has not been answered</p>";
					}
					results += "<p>Asked by: " + json.items[i].owner.display_name + "</p>";
					results += "<p>Views: " + json.items[i].view_count + "</p>";
					
					results += "<p>Tags: ";
					for (var k=0; k<json.items[i].tags.length; k++) {
						results += json.items[i].tags[k];
						if (k != (json.items[i].tags.length - 1)) {
							results += ", ";
						}
					}
					results += "</p>";
				}
				$("#stackResults").html(results);
		    }
		});
	});
});

















