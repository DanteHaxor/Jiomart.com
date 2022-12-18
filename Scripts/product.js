//---------------------------Nav-bar-options--------------------------------//

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

//-------------------------------search-bar----------------------------------//

let items = document.querySelector(".search-items");
function search() {
	let val = document.querySelector(".search-bar input").value.toLowerCase();
	async function getData() {
		let url = await fetch(
			`https://639b037e31877e43d67f1598.mockapi.io/search?title=${val}`
		);
		let data = await url.json();

		let display = data
			.map((item) => {
				return `
            <div class="dropdown-content">
            <p class="prod-title">${item.title} <span class="span">₹ ${item.price}</span></p>
            </div>
           `;
			})
			.join(" ");
		items.innerHTML = display;
		items.style.display = "block";
	}
	getData();
}

items.onclick = () => {
	items.style.display = "none";
};

let main = document.querySelector("body");

main.onclick = () => {
	items.style.display = "none";
};

//-----------------------------search-bar-end--------------------------------//

function order() {
	window.location.href = "cart.html";
}

function pincode() {
	window.location.href = "https://www.google.com/maps";
}

//------------------------------------------------------------//

var coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.display === "block") {
			content.style.display = "none";
		} else {
			content.style.display = "block";
		}
	});
}

//------------------------------------------------------------//
