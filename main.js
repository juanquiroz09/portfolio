document.querySelector('.btn-menu').addEventListener('click', () => {
	document.querySelector('.navbar').classList.toggle('show');
});

function sendEmail() {
	Email.send({
		Host: "smtp.google.com",
		Username: "juan.quiroz1009@gmail.com",
		Password: "60946560303F708E0B30BB0EEBE160D9181D",
		To: 'juan.quiroz1009@gmail.com',
		From: document.getElementById("email").value,
		Subject: "New Contact From Enquiry",
		Body: "Name: " + document.getElementById("name").value +
			"<br> Email: " + document.getElementById("email").value +
			"<br> Message: " + document.getElementById("message").value
	}).then(message => alert("Mesaje Enviado"));
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