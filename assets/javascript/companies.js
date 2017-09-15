$(document).ready(function(){
	var platform;
	var queryURL

	$(".carousel-item").on("click", function () {
		platform = $(this).attr("value");
		queryURL = "https://rcb-igdb.herokuapp.com/platform/" + platform;
		console.log(platform);
		console.log(queryURL);
		$("#chips-platform").html(
			"<div class='chip chip-padding'>" + platform + "<i class='close material-icons'>close</i></div>"
		);
		$("#platform-collection").html("");
		var newCollection = $("<ul>").attr("class", "collection");
		$("#platform-collection").append(newCollection);

		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response) {
			console.log(response);
			for (var i = 0; i < response.body.length; i++) {
				if ("logo" in response.body[i]) {
					console.log(response.body[i].logo.url);
					var newCollectionItem = $("<li>").attr("class", "collection-item")
					newCollection.append(newCollectionItem);
					newCollectionItem.text(response.body[i].name)
					//newCarouselItem.html("<img src=" + response.body[i].logo.url + " width='100%'>");
				} else {
					console.log("no url")
				}
			}
		})
	})

// <div class="chip chip-padding">
// Tag
// <i class="close material-icons">close</i>
// </div>




	// platform = xbox
	// platform = sega
	// platform = linux;
	// platform = nintendo;

	// $.ajax({
	// 	url: queryURL,
	// 	method: "GET"
	// }).done(function(response) {
	// 	console.log(response)
	// 	for (var i = 0; i < response.body[0].games.length; i++) {
	// 		// console.log(response.body[0].games[i]);
	// 	}
	// })

	// var requestObj = {
 //    gameIds: [34911].join() 
 // 	}
	// $.ajax({
	// 	url: "https://rcb-igdb.herokuapp.com/games/" + JSON.stringify(requestObj.gameIds),
	// 	method: "GET",
	// }).done(function(response){
	// 	console.log(response)
	// })

// 	$("#test-button").on("click", function() {
// // PlayStation 4
// 		console.log($("#test-button").attr("value"));
// 	})
});