$(document).ready(function(){
	console.log("ready")
	console.log(sessionStorage.getItem("ID"));
	$.ajax({
		url: "https://rcb-igdb.herokuapp.com/games/" + JSON.stringify(sessionStorage.getItem("ID")),
		method: "GET",
	}).done(function(response){
		console.log(response);
		sessionStorage.setItem("name", response.body[0].name);
		sessionStorage.setItem("cover", response.body[0].cover.url);
		sessionStorage.setItem("releaseDate", response.body[0].first_release_date);
		sessionStorage.setItem("rating", response.body[0].rating);
		sessionStorage.setItem("summary", response.body[0].summary);
		sessionStorage.setItem("storyline", response.body[0].storyline);
		//screenshots
		for (i = 0; i < response.body[0].screenshots.length; i++) {
			sessionStorage.setItem("screenshot" + i, response.body[0].screenshots[i].url);
		}
	})

	// var coverImg = $("<img>").attr({src: sessionStorage.getItem("cover")});
	// var parallax = $("<div>").attr({class: "parallax"});
	// $(".parallax-container").append(parallax);
	// $(".parallax").append(coverImg);

	//var coverImg = "<img src=" + sessionStorage.getItem("cover") + " width='100%'>"

	var coverImg = $("<img>").attr({src: sessionStorage.getItem("cover"), width: "100%"})
	console.log(coverImg)
	$("#cover").html(coverImg);
	// Initialize
	$(document).ready(function(){
		$('.parallax').parallax();
	});
});