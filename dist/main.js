const norris = (() =>{

return {

/* 
The display function is not much code but it helps me
keeping it DRY.
*/

display: (joke) => {
  joke = joke.value.joke;
  $('.joke').html(joke);
},

/*
Fetching a random joke form ICNDB http://api.icndb.com.
The fetchJoke function makes a 'GET' request with the ajax method and
combined with a error catcher as a failsafe.
The success function has 1 parameter, joke(data),
the values will be displayed with the JQuerys equivalent to JavaScript "document.getElement.." 
*/

fetchJoke: () => {
  let url = 'http://api.icndb.com/jokes/random?';
  $.ajax({
    method: 'GET',
    dataType: "json",
    url: url,
  success: function(joke) {
    norris.display(joke);
    },
    error: function() {
      alert('Shit has hit the fan, boss')
      console.log(joke);
    }
});
},

category: () => {
  let url = 'http://api.icndb.com/jokes/random?limitTo=[nerdy]';
  $.ajax({
    method: 'GET',
    dataType: "json",
    url: url,
  success: function(joke) { 
    norris.display(joke);
    },
    error: function() {
      alert('Shit has hit the fan, boss')
      console.log(joke);
    }
}); 
},
/* 
This function stores the given names in "first" and "last".
next step is to chopp the URL and use the first&last name variables.
The values will be transfered from the inputform
*/
yourName: () => {
  let first = $('#firstName').val();
  let last = $('#lastName').val();
  let url = 'http://api.icndb.com/jokes/random?firstName=' + first + '&lastName='+ last + '&amp;json&callback=?';
  $.ajax({
    method: 'GET',
    dataType: "json",
    url: url,
  success: function(joke) { 
    norris.display(joke);
    },
    error: function() {
      alert('Shit has hit the fan, boss')
      console.log(joke);
    }
});
},
/*
an invoking function that renders a joke on start up 
and handeling all the html elements.
*/
init: () => {
  norris.fetchJoke();
  $('.newJoke').on('click', norris.fetchJoke);
  $('.nerdyBtn').on('click', norris.category);
  $('.nameBtn').on('click', norris.yourName);
  },


}; //return


})();
norris.init();


// http://api.icndb.com/jokes/random?firstName=#{firstName}&lastName=#{lastName}&limitTo=[nerdy]")
// http://api.icndb.com/jokes/random?limitTo=[nerdy]
// http://api.icndb.com/jokes/random?limitTo=[explicit]