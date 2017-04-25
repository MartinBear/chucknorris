
$(document).ready(function() {

/*
Fetching a random joke form ICNDB http://api.icndb.com.
The fetchJoke function makes a 'GET' request with the ajax method and
combined with a error catcher as a failsafe.
The success function has 2 parameters. joke(data) and status.
The values will be displayed with the JQuerys equivalent to JavaScript "document.getElement.." 
*/
function fetchJoke() {
	let url = 'http://api.icndb.com/jokes/random?';
	$.ajax({
  	dataType: "json",
  	url: url,
 	success: function(joke,status) {
  		joke = joke.value.joke;
  		$('.joke').html(joke); 
  		return (joke);
  	},
  	error: function() {
  		alert('Shit has hit the fan, boss')
  	}
});
}

function category() {
	let url = 'http://api.icndb.com/jokes/random?limitTo=[nerdy]';
	$.ajax({
  	dataType: "json",
  	url: url,
 	success: function(joke,status) {	
  		joke = joke.value.joke;
  		$('.joke').html(joke); 
  		return (joke);
  	},
  	error: function() {
  		alert('Shit has hit the fan, boss')
  	}
});	
}

/* 
This function stores the given names in "first" and "last".
next step is to chopp the URL and use the first&last name variables.
The values will be transfered from the inputform

*/
function yourName () {
	let first = $('#firstName').val();
  	let last = $('#lastName').val();
	let url = 'http://api.icndb.com/jokes/random?firstName=' + first + '&lastName='+ last + '&amp;json&callback=?';
	$.ajax({
  	dataType: "json",
  	url: url,
 	success: function(joke,status) {	
  		joke = joke.value.joke;
  		$('.joke').html(joke); 
  		return (joke);
  	},
  	error: function() {
  		alert('Shit has hit the fan, boss')
  	}
});
}

//Fetching a joke on start up
  fetchJoke();

  $(".newJoke").on("click", function() {
    fetchJoke();
});
  $(".nerdyBtn").on("click", function() {
    category();
});
    $(".nameBtn").on("click", function() {
    yourName();
});

});
// http://api.icndb.com/jokes/random?firstName=#{firstName}&lastName=#{lastName}&limitTo=[nerdy]")
// http://api.icndb.com/jokes/random?limitTo=[nerdy]
// http://api.icndb.com/jokes/random?limitTo=[explicit]