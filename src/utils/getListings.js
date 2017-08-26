import geolocator from './geolocator';

export default function getListings() {
	return new Promise((resolve, reject) => {
		geolocator()
			.then(({ lat, long }) => 
				fetch(`https://quiky.herokuapp.com/listings?lat='${lat}&long=${long}`)
			)
			.then(res => resolve(res.json()))
			.catch(reject)
	})
}