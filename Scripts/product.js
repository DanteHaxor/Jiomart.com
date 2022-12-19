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

//-------------------------products card render start----------------------------------------//

let DealsSection = document.getElementById("top-deals");
async function products() {
	let res = await fetch("https://639b037e31877e43d67f1598.mockapi.io/crud");
	let data = await res.json();
	renderData(data);
}
products();

//---------------------------------------sort by price-----------------------------------------------//

function priceSort() {
	let mrp = document.querySelector("#sortPrice").value;
	let str = "";

	if (mrp == "asc") {
		str = "MRP";
		SortPriceLTH(str);
	}
	if (mrp == "dsc") {
		str = "MRP";
		SortPriceHTL(str);
	}

	if (mrp == "") {
		products();
	}
}

async function SortPriceLTH(MRP) {
	let res = await fetch(
		`https://639b037e31877e43d67f1598.mockapi.io/crud?sortBy=${MRP}`
	);
	let data = await res.json();
	renderData(data);
}

async function SortPriceHTL(MRP) {
	let res = await fetch(
		`https://639b037e31877e43d67f1598.mockapi.io/crud?sortBy=${MRP}&order=desc`
	);
	let data = await res.json();
	renderData(data);
}

//---------------------------------------sort by type-----------------------------------------------//

function nameSort() {
	let mrp = document.querySelector("#sortName").value;
	let str = "";

	if (mrp == "asc") {
		str = "type";
		SortPriceLTH(str);
	}
	if (mrp == "dsc") {
		str = "type";
		SortPriceHTL(str);
	}

	if (mrp == "") {
		products();
	}
}

async function SortPriceLTH(type) {
	let res = await fetch(
		`https://639b037e31877e43d67f1598.mockapi.io/crud?sortBy=${type}`
	);
	let data = await res.json();
	renderData(data);
}

async function SortPriceHTL(type) {
	let res = await fetch(
		`https://639b037e31877e43d67f1598.mockapi.io/crud?sortBy=${type}&order=desc`
	);
	let data = await res.json();
	renderData(data);
}

//------------------------------------------------------------//

function renderData(data) {
	DealsSection.innerHTML = `${data
		.map((el) => {
			return `<div>
			<a><div class="prod-img"><img src=${el.image}></div>
			<div class="prod-disc">
			<span>${el.type}</span>
			<p class="pro-price">₹ ${el.MRP}</p>
			</div>
			</a>
			<div class="add-cart"><p>Add to Cart</p><span>+</span></div>
			</div>`;
		})
		.join(" ")}`;
	let addCart = document.querySelectorAll(".add-cart");
	addCart.forEach((el) => {
		el.addEventListener("click", (e) => {
			swal("", "Product added to Cart!", "success");
		});
	});
}
//---------------------------------------products card render end------------------------------------//

//-----------------------------cart page----------------------------------//
