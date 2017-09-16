$(document).ready(function() {
	 $("a").dblclick(function() {
		event.preventDefault();
		sessionStorage.setItem("ID", $(this).attr("hello"));
		var href = $(this).attr('href');
		var platform = $(this).val();
		// window.location.href = "gamepage.html?"+ p + "=";
		// window.location.href = href + "?" + platform + "="
		// var searchCon = window.location.search;

	 });

	

	

// var gameIds = [];
// 				for(var b = 0; b < response.body[a].games.length; b++) {
// 					gameIds.push(response.body[a].games[b]);
// 				}
// 				$.ajax({
// 					url: "https://rcb-igdb.herokuapp.com/games/" + JSON.stringify(gameIds.slice(0, 10).join()),
// 					method: "GET",
// 				}).done(function(response){
// 					console.log(response);
// 					for (var c = 0; c < 10; c++) {
// 						var newCollectionItem = $("#collection").attr({class: "collection-item", href: "gamepage.html", value: JSON.stringify(gameIds[c])}).text(response.body[c].name);
// 						newCollection.append(newCollectionItem);
// 					}
// 				})

// 	var platform = $()

// 	console.log(this)

	
// 	var searchCon = window.location.search
// 	// .replace(/\?search=/g, "/search/");
// 	// searchCon.replace(/\?/g, "/ /");
// 	// searchCon.replace(/\=/g, "/ /");
// 	searchCon = searchCon.replace(/\?/g, "");
		
// 		console.log(searchCon);

// 	console.log(platform)
// 	console.log('working')
// 	var queryURL = "https://rcb-igdb.herokuapp.com/platform/" + searchCon;

// 	$.ajax({
// 		url: queryURL,
// 		method: "GET"
// 	}).done(function(response) {
// 		console.log(response);
// 	})
});