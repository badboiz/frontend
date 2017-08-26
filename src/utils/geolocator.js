export default function geolocator() {
	return new Promise((resolve, reject) => {	
		if (navigator.geolocation) {
			const geoSuccess = (position) => {
				resolve({
					lat: position.coords.latitude, 
					long: position.coords.longitude
				});
			};
			navigator.geolocation.getCurrentPosition(geoSuccess)
		}
		else {
			reject('Geolocation is not supported for this Browser/OS.');
		}
	})
}