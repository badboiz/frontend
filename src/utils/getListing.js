export default function getListing(listingid) {
  return new Promise((resolve, reject) => {
    fetch(`https://quiky.herokuapp.com/listing?id=${listingid}`)
      .then(res => res.json())
      .then(resolve)
      .catch(reject);
  });
}