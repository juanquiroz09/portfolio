document.querySelector('.btn-menu').addEventListener('click', () => {
	document.querySelector('.navbar').classList.toggle('show');
});

function sendEmail() {
	Email.send({
		Host: "smtp.google.com",
		Username: "juan.quiroz1009@gmail.com",
		Password: "C165E7677AC4B2E0817B5C218AE90EE5DCDC",
		To: 'juan.quiroz1009@gmail.com',
		From: document.getElementById("email").value,
		Subject: "New Contact From Enquiry",
		Body: "Name: " + document.getElementById("name").value +
			"<br> Email: " + document.getElementById("email").value +
			"<br> Message: " + document.getElementById("message").value
	}).then(message => alert("Mensaje Enviado"));
}

function myFunction() {
	location.reload();
}

function displayWindow() {

	document.getElementById("window").style.display = "block";

	document.getElementById("shadow").style.display = "block";

}

function hideWindow() {

	document.getElementById("window").style.display = "none";

	document.getElementById("shadow").style.display = "none";

}

function displayWindow2() {

	document.getElementById("window2").style.display = "block";

	document.getElementById("shadow2").style.display = "block";

}

function hideWindow2() {

	document.getElementById("window2").style.display = "none";

	document.getElementById("shadow2").style.display = "none";

}