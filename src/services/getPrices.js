const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ae892c4004msh44f9eb6e9b4441cp13282cjsn9e8bfa4b5636',
		'X-RapidAPI-Host': 'finnhub-realtime-stock-price.p.rapidapi.com'
	}
};

fetch('https://finnhub-realtime-stock-price.p.rapidapi.com/quote?symbol=AAPL', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));