function geolocator(callback) {
	if (navigator.geolocation) {
		var startPos;
		var geoSuccess = function(position) {
			startPos = position;
			callback({"lat": startPos.coords.latitude, "long": startPos.coords.longitude});
			// console.log(startPos.coords.latitude + " " + startPos.coords.longitude);
		};
		navigator.geolocation.getCurrentPosition(geoSuccess);
	}
	else {
		console.log('Geolocation is not supported for this Browser/OS.');
	}
}

export default geolocator;
