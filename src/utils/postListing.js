export default function postListing(listing) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://quiky.herokuapp.com/listings');
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onload = resolve;
    xhr.onerror = reject;
    xhr.send(JSON.stringify(listing));
  });
}