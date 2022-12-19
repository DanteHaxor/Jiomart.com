let hiddenDiv = document.querySelectorAll(".subOptions");
let title = document.querySelectorAll(".upArrow");

for (let i = 0; i < hiddenDiv.length; i++) {
	title[i].onmouseover = () => {
		hiddenDiv[i].style.display = "block";
	};
	title[i].onmouseout = () => {
		hiddenDiv[i].style.display = "none";
	};
	hiddenDiv[i].onmouseover = () => {
		hiddenDiv[i].style.display = "block";
	};
	hiddenDiv[i].onmouseout = () => {
		hiddenDiv[i].style.display = "none";
	};
}

//---------------------------Nav-bar-options-end-------------------------------//

//----------------------------side-navbar--------------------------------//

function sidenav() {
	document.getElementById("mysidebar").style.width = "330px";
}

function closenav() {
	document.getElementById("mysidebar").style.width = "0";
}

//---------------------------side-navbar-end--------------------------------//

// --------------------------sign up page-----------------------------------//
let signUp = document.getElementById("sign");
let signUpform = document.querySelector("#afterClick form");

signUp.addEventListener("click", function () {
	Swal.fire({
		icon: "error",
		title: "Oops...",
		text: "You do not have registered yet, Please create an account first.",
	});
	loginForm();
});

function loginForm() {
	document.querySelector("#form").hidden = false;
	document.getElementById("Gotp").hidden = true;
	document.querySelector("#loginbtn").hidden = false;
	document.querySelector("#otp").hidden = false;
	document.querySelector("#name").value = "";
	document.querySelector("#email").value = "";
	document.querySelector("#Date").value = "";
	document.querySelector("#gen").value = "";
	document.querySelector("#otpnum").value = "";
	var mobNum = document.querySelector("#mob").value;
}

signUpform.addEventListener("submit", function (event) {
	event.preventDefault();
	nameValue = document.querySelector("#name").value;
	localStorage.setItem("userName", nameValue);
	localStorage.setItem("logout", "Log Out");
	console.log("worked");
	swal(
		"Account has been succesfully created!",
		"Redirecting you to the main page",
		"success"
	);
	window.location.href = "index.html";
});
