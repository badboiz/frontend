const imageInputId = 'imageInput'

export default function getPhoto(callback) {
	let imageFile = document.getElementById(imageInputId).files[0]
	let reader = new FileReader()
	reader.addEventListener('load', function() {
		callback(reader.result)
	}, false)
	reader.readAsDataURL(imageFile)
}