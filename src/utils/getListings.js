import geolocator from './geolocator';

export default function getListings() {
	return new Promise((resolve, reject) => {
		geolocator()
			.then(({ lat, long }) => {
				const url = `https://quiky.herokuapp.com/listings?lat=${lat}&long=${long}`;
				console.log(url)
				return fetch(url)
			})
			.then(res => resolve(res.json()))
			.catch(reject)
	})
}