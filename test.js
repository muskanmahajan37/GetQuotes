$.ajax({
	url: 'https://talaikis.com/api/quotes/random/',
	type: 'GET',
	success: function(data){
		console.log(data);
        $('#result').html('<blockquote><p><strong>'+data.quote+'</p><cite>'+data.author+'</cite></blockquote>');
	},
	error: function(data){
		console.log(data);
	}
});