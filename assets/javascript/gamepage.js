function html() { // Creates the HTML page
	// PARALLAX
	$(".parallax-container").html("<div class='cover blur parallax'></div>")
	// GAME TITLE
	$(".game-title").text(sessionStorage.getItem("name"));
	document.title = sessionStorage.getItem("name") + " | Joystick"
	// COVER IMAGE
	var coverImg = "https:" + sessionStorage.getItem("cover").replace(/t_thumb/i, "t_cover_big");
	$(".cover").html("<img src='" + coverImg + "'>")
	// TWITTER
	var twitterName = sessionStorage.getItem("name") + " news";
	console.log(twitterName)
	$.ajax({
		url: "https://rcb-api.herokuapp.com/twitter-search/" + twitterName,
		method: "GET"
	}).done(function(response){
		console.log(response)
		if (response.statuses.length === 0) {
			$(".video-container").append("<p class='centered'>No tweets about this game.</p>")
		} else if (response.statuses.length >= 5) {
			for (var a = 0; a < 5; a++) {
				var newTweet = response.statuses[a].text
				$(".video-container").append(newTweet);
			}
		} else {
			for (var a = 0; a < response.statuses.length; a++) {
				var newTweet = response.statuses[a].text
				$(".video-container").append("<p>" + newTweet + "</p>" + "<hr>");
			}
		}
	})
	// VIDEO TRAILER
	// $(".video-container").html("<iframe width='560' height='315' src='https://www.youtube.com/embed/DqH-iwA0ZmU' frameborder='0' allowfullscreen></iframe>")
	// RATING
	if (sessionStorage.getItem("rating") === "undefined") {
		$("#rating").html("<div class='indeterminate'></div>");
		$("#rating-text").html("<h5>No rating available for this title.</h5>")
	} else {
		var rating = Math.floor(sessionStorage.getItem("rating"));
		$("#rating").html("<div class='determinate' style='width: " + rating + "%'></div>");
		$("#rating-text").html("<h5>Rated: " + rating + " out of 100</h5>")
	}
	// DESCRIPTION
	$("#description").text(sessionStorage.getItem("summary"));
	if (sessionStorage.getItem("summary") === "undefined" && sessionStorage.getItem("storyline") === "undefined") {
		$("#description").text("No description offered.")
	}else if (sessionStorage.getItem("summary") === "undefined") {
		$("#description").text(sessionStorage.getItem("storyline"));
	}
	// IMAGES
	for (var i = 0; i < 5; i++) {
		if (sessionStorage.getItem("screenshot" + i)) {
			var screenshotLink = "https:" + sessionStorage.getItem("screenshot" + i).replace(/t_thumb/i, "t_screenshot_huge");
			var screenshot = "<a class='carousel-item'><img src='" + screenshotLink + "'></a>";
			$(".carousel").append(screenshot);
		}
	}
	// LINKS
	// TRAILERS
	// GAMEPLAY
}
$(document).ready(function(){
	console.log(sessionStorage.getItem("ID"));
	$.ajax({
		url: "https://rcb-igdb.herokuapp.com/games/" + JSON.stringify(sessionStorage.getItem("ID")),
		method: "GET",
	}).done(function(response){
		console.log(response);
		sessionStorage.setItem("name", response.body[0].name);
		sessionStorage.setItem("cover", response.body[0].cover.url);
		sessionStorage.setItem("coverHeight", response.body[0].cover.height);
		sessionStorage.setItem("coverWidth", response.body[0].cover.width);
		sessionStorage.setItem("releaseDate", response.body[0].first_release_date);
		sessionStorage.setItem("rating", response.body[0].rating);
		sessionStorage.setItem("summary", response.body[0].summary);
		sessionStorage.setItem("storyline", response.body[0].storyline);

		for (i = 0; i < response.body[0].screenshots.length; i++) {
			sessionStorage.setItem("screenshot" + i, response.body[0].screenshots[i].url);
		}
	}).done(html())
});