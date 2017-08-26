import geolocator from './geolocator';

function getListings(callback) {
	geolocator(function(params) {
		fetch('https://quiky.herokuapp.com/listings?lat=' + params.lat + '&long=' + params.long)
		.then(function(response) {
			return response.json();
		}).then(function(json) {
			callback(json);
		});
	});
}

export default getListings;
