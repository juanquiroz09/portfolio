//Responsive navBar
document.querySelector('.btn-menu').addEventListener('click', () => {
	document.querySelector('.navbar').classList.toggle('show');
});

function myFunction() {
	location.reload();
}

//Modals Functions
var modalBtns = document.querySelectorAll(".modal-open");

modalBtns.forEach(function(btn){
  btn.onclick = function() {
	  var modal = btn.getAttribute("data-modal");
	  document.getElementById(modal).style.display = "block";
  };
});

var closeBtns = document.querySelectorAll(".modal-close");

closeBtns.forEach(function(btn) {
	btn.onclick = function() {
		var modal = (btn.closest(".modal").style.display = "none");
	};
});

window.onclick = function(e) {
	if(e.target.className == "modal"){
		e.target.style.display = "none";
	}
};

//Functions Contact Form
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
	}).then(swal("Mensaje Enviado!", "Gracias por Contactarme!", "success"));
}

document.addEventListener('DOMContentLoaded', function(){
    let formulario = document.getElementById('formul');
    formulario.addEventListener('submit', function() {
      formulario.reset();
    });
  });