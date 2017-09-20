function html() { // Creates the HTML page
	// PARALLAX
	$(".parallax-container").html("<div class='cover background parallax'><img src='assets/images/background.jpg'></div>")
	// GAME TITLE
	$(".game-title").text("Mario + Rabbids: Kingdom Battle");
	document.title = "Mario + Rabbids: Kingdom Battle" + " | Joystick"
	// sessionStorage.getItem("name")
	// COVER IMAGE
	$(".cover").html("<img src='https://images.igdb.com/igdb/image/upload/t_cover_big/fdfedir0ruao8xm9qcgq.jpg'>")
	// var coverImg = "https:" + sessionStorage.getItem("cover").replace(/t_thumb/i, "t_cover_big");
	// $(".cover").html("<img src=" + coverImg + " width='100%' height='280'>")
	// VIDEO TRAILER
	$(".video-container").html("<iframe width='560' height='315' src='https://www.youtube.com/embed/DqH-iwA0ZmU' frameborder='0' allowfullscreen></iframe>")
	// RATING
	$("#rating").html("<div class='determinate' style='width: " + JSON.stringify(83) + "%'></div>");
	$("#rating-text").html("<h5>Rated: " + JSON.stringify(83) + " out of 100</h5>")
	// var rating = $("<div>").attr({class: "determinate", style: "width: " + Math.floor(sessionStorage.getItem("rating")) + "%"});

	// IMAGES
	var gameScreenshots = [
	"https://images.igdb.com/igdb/image/upload/t_screenshot_huge/ndsfwcpghdnr2neyatbz.jpg",
	"https://images.igdb.com/igdb/image/upload/t_screenshot_huge/b7o1yjxedzgxarpt86wd.jpg",
	"https://images.igdb.com/igdb/image/upload/t_screenshot_huge/lq4hh7wo4t0oemugsy7r.jpg",
	"https://images.igdb.com/igdb/image/upload/t_screenshot_huge/cdufu6yj9np4mqe8xiw6.jpg",
	"https://images.igdb.com/igdb/image/upload/t_screenshot_huge/ylecl9k09s5ou1kwwuxc.jpg"
	];

	if (gameScreenshots.length > 0) {
		for (var i = 0; i < gameScreenshots.length; i++) {
			var screenshot = "<a class='carousel-item'><img src='" + gameScreenshots[i] + "'></a>";
			$(".carousel").append(screenshot);
		}
	}else {
		$("#screenshot-carousel").html("<h5 class='centered'>No screenshots available for this game.</h5>");
	}
	// var newCarousel = $("<div>").attr({class: "carousel"});
	// $("#screenshotCarousel").append(newCarousel);
	// for (var j = 0; j < gameScreenshots.length; j++) {
	// 	var screenshotLink = "https:" + gameScreenshots[j].replace(/t_thumb/i, "t_screenshot_huge");
	// 	var newCarouselItem = $("<a>").attr({class: "carousel-item", href:"#"});
	// 	var newScreenshot = $("<img>").attr({src: screenshotLink, width: "480", height: "270"});
	// 	console.log(screenshotLink);
	// 	newCarouselItem.append(newScreenshot);
	// 	newCarousel.append(newCarouselItem);
	// }

	// DESCRIPTION
	//if (sessionStorage.getItem("summary")) {
		// $("#description").text()
	//} else if (sessionStorage.getItem("storyline")) {
		// $("#description").text()
	//} else if (both) {
		// $("#description").text("No description offered.")
	// }
	$("#description").text("This is the story of an unexpected encounter between Mario and the irreverent Rabbids. The Mushroom Kingdom has been torn apart by a mysterious vortex, transporting the Rabbids into the once-peaceful area, splintering this beloved land. To bring order back to the Kingdom, Mario, Luigi, Princess Peach, and Yoshi team up with Rabbids heroes in a journey through four different worlds.");
	// $("#description").text(sessionStorage.getItem("summary"));
	// LINKS
	// TRAILERS
	// GAMEPLAY
}

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
	// var gameScreenshots = [];
	// for (i = 0; i < response.body[0].screenshots.length; i++) {
	// 	sessionStorage.setItem("screenshot" + i, response.body[0].screenshots[i].url);
	// 	gameScreenshots.push(response.body[0].screenshots[i].url);
	// }
})

$(document).ready(function(){
	html();
})