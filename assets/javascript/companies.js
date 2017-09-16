$(document).ready(function(){
	// GLOBAL VARIABLES
	var platform;
	var queryURL;

	// FUNCTIONS
	function addChip() {
		$("#chips-platform").html(
			"<div class='chip chip-padding'>" + platform.charAt(0).toUpperCase() + platform.slice(1) + "<i class='close material-icons'>close</i></div>"
		);
	}

	// ON CLICK
	$(".carousel-item").on("click", function () {
		platform = $(this).attr("value");
		queryURL = "https://rcb-igdb.herokuapp.com/platform/" + platform;

		// console.log(platform);
		// console.log(queryURL);
		addChip();
		//Clear div, then create the collapsible
		$("#platform-collapsible").html("");
		var newCollapsible = $("<ul>").attr({class: "collapsible", 'data-collapsible': "accordion"});
		$("#platform-collapsible").append(newCollapsible);
		//Ajax call for platform endpoint
		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response) {
			console.log(response);

			for (var a = 0; a < response.body.length; a++) { //Cycles through the different systems of that platform
				//Creates the Collapsible from MaterializeCSS
				var newCollapsibleItem = $("<li>")
				var newCollapsibleHeader = $("<div>").attr({class: "collapsible-header"}).text(response.body[a].name).appendTo(newCollapsibleItem);
				var newCollapsibleBody = $("<div>").attr({class: "collapsible-body"}).appendTo(newCollapsibleItem);
				var newCollection = $("<div>").attr({class: "collection"}).appendTo(newCollapsibleBody);
				newCollapsible.append(newCollapsibleItem);
				// Acquires GameIDs for Ajax call to hit games endpoint
				var gameIds = [];
				for(var b = 0; b < response.body[a].games.length; b++) {
					gameIds.push(response.body[a].games[b]);
				}

				$.ajax({
					url: "https://rcb-igdb.herokuapp.com/games/" + JSON.stringify(gameIds.slice(0, 10).join()),
					method: "GET",
				}).done(function(response){
					console.log(response);

					for (var c = 0; c < 10; c++) {

						var newCollectionItem = $("<a>").attr({class: "collection-item", href: "gamepage.html", value: JSON.stringify(gameIds[c])}).text(response.body[c].name);

						var newCollectionItem = $("<a>").attr({class: "collection-item", href: "gamepage.html", value: JSON.stringify(response.body[c].id)}).text(response.body[c].name);

						newCollection.append(newCollectionItem);
					}
				})
			}
	$("body").on("click", ".collection-item", function() {
		sessionStorage.setItem("ID", $(this).attr("value"));

	})

	

	$('.chips').on('chip.delete', function(e, chip){
	// you have the deleted chip here
	});
	//Initialize Collasible
			$(document).ready(function(){
				$('.collapsible').collapsible();
			});
		})
	})

// <div class="chip chip-padding">
// Tag
// <i class="close material-icons">close</i>
// </div>

				
				// if ("logo" in response.body[i]) {	
				// 	newImg = $("<img>").attr({src: "response.body[i].logo.url", width:"100%"})
				// } else {
				// 	console.log("no url")
				// }


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

