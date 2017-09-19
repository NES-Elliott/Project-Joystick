$(document).ready(function(){
	//double click on carousel to be brought to gamepage.html page
	$("a").dblclick(function() {
		event.preventDefault();
		// var gameSite = $(this).attr('href');

		var platform = $(this).attr("value");
		

		sessionStorage.setItem("ID", company);

		window.location.href = "gamepage.html?" + platform + "=";
				
		
		// console.log(href);

		//opens gamepage.html
		
		// window.location.href = href + "?" + platform + "="
		// var searchCon = window.location.search;
		
		// console.log(searchCon);
		
	
	 });

	//on click function for nav bar options
	$(".console").on("click", function(){
		event.preventDefault();
		var company = $(this).attr("value");

			//currently unavailable items until we get the api to work with them. adds alert for user. 
			if (company === "PC" || company === "Nintendo Switch" || company === "Nintendo 3DS" || company === "Nintendo WiiU" ||
				company === "Android" || company === "Apple IOS" || company === "Steam") {
				alert("This platform is unavailable. It will be added in next update.")
			};


			//working api endpoints brings user to gamepage.html for that endpoint.
			if (company === "Playstation 4" || company === "Xbox") {
		
				sessionStorage.setItem("ID", company);

				window.location.href = "gamepage.html?" + company + "=";
			};	
		

	});

	//Adds on click function for genre options in the nav bar.
	$(".genres").on("click", function(){
		event.preventDefault();
		var genre = $(this).attr("value");
		console.log(company)
		sessionStorage.setItem("ID", genre);

		window.location.href = "gamepage.html?" + company + "="
		

	});


});