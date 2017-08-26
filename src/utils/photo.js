export function getPhoto(imageFile, callback) {
	console.log("getting photo")
	let reader = new FileReader()
    reader.addEventListener('load', () => {
			console.log(reader.result)
			callback(reader.result)
      
      //imageBase64 = reader.result
    }, false)
    reader.readAsDataURL(imageFile)
}

export function handleUpload(e) {
	console.log(e)
}