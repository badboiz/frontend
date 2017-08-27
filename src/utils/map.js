import geolocator from './geolocator'
import getListing from './getListing'
const google = window.google

export function initMap(userPos, callback) {
	var mapOptions = {
		center: new google.maps.LatLng(userPos.lat, userPos.long),
		zoom: 18,
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.DEFAULT,
		},
		disableDoubleClickZoom: true,
		mapTypeControl: false,
		scaleControl: true,
		scrollwheel: true,
		panControl: true,
		streetViewControl: false,
		draggable: true,
		overviewMapControl: false,
		overviewMapControlOptions: {
			opened: false,
		},
	};

	var map = new google.maps.Map(document.getElementById('googlemaps'), mapOptions);
	callback(map)
}


export function addMapMarker(listingId) {
	console.log("adding marker")
	var geoLocation = geolocator()
	geoLocation.then((userPos) => {
		console.log(userPos)
		console.log("a")
		initMap(userPos, function(map) {
			console.log("b")
			var pro = getListing(listingId);

			pro.then(([listing]) => {
				console.log("c")
				console.log(listing.title)
				var lat = parseFloat(listing.lat)
				var long = parseFloat(listing.long)

				var marker1 = new google.maps.Marker({
					position: {lat: lat, lng: long},
					map: map
				});
			})
		});
	})
	/*
	function(userPos) {

	})
	*/
}
