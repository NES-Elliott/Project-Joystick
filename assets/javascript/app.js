    $(document).ready(function(){
      $('.carousel').carousel();



  // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();


	var platform = "linux";
	var queryURL = "https://rcb-igdb.herokuapp.com/platform/" + platform;

	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {
		console.log(response);
	})
});