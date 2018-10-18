$(document).ready(function(){
    $("#result").html('<figure class="quote"><p class="loader">Hang On! Your quote will appear soon!</p><figcaption class="quote__credits" >Made by Vinit Shahdeo</figcaption></figure>')
});
setTimeout(function(){
$.ajax({
	url: 'https://talaikis.com/api/quotes/random/',
	type: 'GET',
	success: function(data){
		console.log(data);
        $('#result').html("");
        $('#result').append('<figure class="quote"><blockquote class="quote__body" id="text"></blockquote><figcaption class="quote__credits" id="author"></figcaption></figure>');
        $('#text').html(data.quote);
        $('#author').html(data.author);
	},
	error: function(data){
		console.log(data);
	}
});
    },500);