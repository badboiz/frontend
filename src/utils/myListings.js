export default function myListings(userid) {
  return new Promise((resolve, reject) => {
    fetch(`https://quiky.herokuapp.com/mylistings?${userid}`)
      .then(res => res.json())
      .then(resolve)
      .catch(reject);
  });
}