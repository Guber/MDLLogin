document.getElementById("loginButton").addEventListener("click", formValidation);

function formValidation() {
	//this prevents automatic form submission
	event.preventDefault();
	var username = document.getElementById("username");
	var password = document.getElementById("password");

	var flag = true;

	if (username.value.length === 0) {
	  //setting mdl form validation fields
	  username.className += " is-invalid";
	  username.parentElement.className += " is-invalid";
	  flag = false;
	}

	if (password.value.length === 0) {
	  //setting mdl form validation fields
	  password.className += " is-invalid";
	  password.parentElement.className += " is-invalid";
	  flag = false;
	}

	if (flag) {
	  //if all passed form is submited
	  document.getElementById("login_form").submit();
	}
}