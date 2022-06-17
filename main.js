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

document
  .querySelector("form")
  .addEventListener("submit", handleSubmit);

const handleSubmit = (e) => {
  e.preventDefault();
  let myForm = document.getElementById("pizzaOrder");
  let formData = new FormData(myForm);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(swal("Mensaje Enviado!", "Gracias por Contactarme!", "success"))
    .catch((error) => alert(error));
};


document.addEventListener('DOMContentLoaded', function(){
    let formulario = document.getElementById('formul');
    formulario.addEventListener('submit', function() {
      formulario.reset();
    });
  });