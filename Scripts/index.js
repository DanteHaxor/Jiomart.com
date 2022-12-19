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

let span = document.querySelectorAll("#top-trend span");
let div = document.querySelectorAll("#Trending-brands div");
let l = 0;
span[1].onclick = () => {
	l++;
	for (let i of div) {
		if (l == 0) {
			i.style.left = "0px";
		}
		if (l == 1) {
			i.style.left = "-200px";
		}
		if (l == 2) {
			i.style.left = "-400px";
		}
		if (l == 3) {
			i.style.left = "-600px";
		}
		if (l > 3) {
			l = 3;
		}
	}
};
span[0].onclick = () => {
	l--;
	for (let i of div) {
		if (l == 0) {
			i.style.left = "0px";
		}
		if (l == 1) {
			i.style.left = "-200px";
		}
		if (l == 2) {
			i.style.left = "-400px";
		}
		if (l == 3) {
			i.style.left = "-600px";
		}
		if (l < 0) {
			l = 0;
		}
	}
};

let span1 = document.querySelectorAll("#top-cat span");
let div1 = document.querySelectorAll("#top-category div");
let l1 = 0;
span1[1].onclick = () => {
	l1++;
	for (let i of div1) {
		if (l1 == 0) {
			i.style.left = "0px";
		}
		if (l1 == 1) {
			i.style.left = "-200px";
		}
		if (l1 == 2) {
			i.style.left = "-400px";
		}
		if (l1 == 3) {
			i.style.left = "-600px";
		}
		if (l1 == 4) {
			i.style.left = "-800px";
		}
		if (l1 > 4) {
			l1 = 4;
		}
	}
};
span1[0].onclick = () => {
	l1--;
	for (let i of div1) {
		if (l1 == 0) {
			i.style.left = "0px";
		}
		if (l1 == 1) {
			i.style.left = "-200px";
		}
		if (l1 == 2) {
			i.style.left = "-400px";
		}
		if (l1 == 3) {
			i.style.left = "-600px";
		}
		if (l1 == 4) {
			i.style.left = "-800px";
		}
		if (l1 < 0) {
			l1 = 0;
		}
	}
};

//-------------------------products card render start----------------------------------------//

let DealsSection = document.getElementById("top-deals");
async function products() {
	let res = await fetch("https://639b1b94d5141501974b716f.mockapi.io/cart");
	let data = await res.json();
	renderData(data);
}
products();

async function test(id) {
	let res = await fetch(
		`https://639b1b94d5141501974b716f.mockapi.io/cart/${id}`
	);
	let data = await res.json();
	sendData(data);
}

async function sendData(data) {
	let res = await fetch("https://639b1b94d5141501974b716f.mockapi.io/AddCart", {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(data),
	});
}

function renderData(data) {
	DealsSection.innerHTML = `${data
		.map((el) => {
			return `<div>
        <a><div class="prod-img"><img src=${el.image}></div>
        <div class="prod-disc">
        <span>${el.title}</span>
        <p class="pro-price">₹ ${el.price}</p>
        <span>Save ₹${el.discount}</div>
        </a>
        <button class="add-cart" data-id="${el.id}">Add to Cart</button>
        </div>`;
		})
		.join(" ")}`;
	let addCart = document.querySelectorAll(".add-cart");
	addCart.forEach((el) => {
		el.addEventListener("click", (e) => {
			swal("", "Product added to Cart!", "success");
		});
	});

	let addCartBtn = document.querySelectorAll(".add-cart");
	addCartBtn.forEach((el) => {
		el.addEventListener("click", (el) => {
			var id = el.target.dataset.id;
			test(id);
		});
	});

	let span2 = document.querySelectorAll("#Deals>span");
	let div2 = document.querySelectorAll("#top-deals>div");
	let l2 = 0;
	span2[1].onclick = () => {
		l2++;
		for (let i of div2) {
			if (l2 == 0) {
				i.style.left = "0px";
			}
			if (l2 == 1) {
				i.style.left = "-185px";
			}
			if (l2 == 2) {
				i.style.left = "-375px";
			}
			if (l2 == 3) {
				i.style.left = "-565px";
			}
			if (l2 == 4) {
				i.style.left = "-755px";
			}
			if (l2 == 5) {
				i.style.left = "-925px";
			}
			if (l2 > 5) {
				l2 = 5;
			}
		}
	};
	span2[0].onclick = () => {
		l2--;
		for (let i of div2) {
			if (l2 == 0) {
				i.style.left = "0px";
			}
			if (l2 == 1) {
				i.style.left = "-185px";
			}
			if (l2 == 2) {
				i.style.left = "-375px";
			}
			if (l2 == 3) {
				i.style.left = "-565px";
			}
			if (l2 == 4) {
				i.style.left = "-755px";
			}
			if (l2 < 0) {
				l2 = 0;
			}
		}
	};
}
//---------------------------------------products card render end------------------------------------//

//---------------------------------------picks card render start------------------------------------//
let picksSection = document.getElementById("top-Picks");
async function picks() {
	let res = await fetch("https://639b037e31877e43d67f1598.mockapi.io/product");
	let data = await res.json();
	renderpicks(data);
}
picks();

function renderpicks(data) {
	picksSection.innerHTML = `${data
		.map((el) => {
			return `<div>
        <a><div class="prod-img"><img src=${el.image}></div>
        <div class="prod-disc">
        <span>${el.title}</span>
        <p class="pro-price">₹ ${el.price}</p>
        <span>Save ₹${el.discount}</span></div>
        </a>
        <button class="add-cart" data-id="${el.id}">Add to Cart</button>
        </div>`;
		})
		.join(" ")}`;
	let addCart = document.querySelectorAll(".add-cart");
	addCart.forEach((el) => {
		el.addEventListener("click", (e) => {
			swal("", "Product added to Cart!", "success");
		});
	});

	let span3 = document.querySelectorAll("#Picks>span");
	let div3 = document.querySelectorAll("#top-Picks>div");
	let l3 = 0;
	span3[1].onclick = () => {
		l3++;
		for (let i of div3) {
			if (l3 == 0) {
				i.style.left = "0px";
			}
			if (l3 == 1) {
				i.style.left = "-185px";
			}
			if (l3 == 2) {
				i.style.left = "-375px";
			}
			if (l3 == 3) {
				i.style.left = "-565px";
			}
			if (l3 == 4) {
				i.style.left = "-755px";
			}
			if (l3 == 5) {
				i.style.left = "-925px";
			}
			if (l3 > 5) {
				l3 = 5;
			}
		}
	};
	span3[0].onclick = () => {
		l3--;
		for (let i of div3) {
			if (l3 == 0) {
				i.style.left = "0px";
			}
			if (l3 == 1) {
				i.style.left = "-185px";
			}
			if (l3 == 2) {
				i.style.left = "-375px";
			}
			if (l3 == 3) {
				i.style.left = "-565px";
			}
			if (l3 == 4) {
				i.style.left = "-755px";
			}
			if (l3 < 0) {
				l3 = 0;
			}
		}
	};
}
//---------------------------------------picks card render start------------------------------------//

//---------------------------------------bottom picks card render start------------------------------------//
let botpicksSection = document.getElementById("bot-Picks");
async function botpicks() {
	let res = await fetch("https://639b037e31877e43d67f1598.mockapi.io/jio");
	let data = await res.json();
	renderbotpicks(data);
}
botpicks();

function renderbotpicks(data) {
	botpicksSection.innerHTML = `${data
		.map((el) => {
			return `<div>
        <a><div class="prod-img"><img src=${el.image}></div>
        <div class="prod-disc">
        <span>${el.title}</span>
        <p class="pro-price">₹ ${el.price}</p>
        <span>Save ₹${el.discount}</div>
        </a>
        <button class="add-cart" data-id="${el.id}">Add to Cart</button>
        </div>`;
		})
		.join(" ")}`;
	let addCart = document.querySelectorAll(".add-cart");
	addCart.forEach((el) => {
		el.addEventListener("click", (e) => {
			swal("", "Product added to Cart!", "success");
		});
	});

	let span4 = document.querySelectorAll("#bottom-Picks>span");
	let div4 = document.querySelectorAll("#bot-Picks>div");
	let l4 = 0;
	span4[1].onclick = () => {
		l4++;
		for (let i of div4) {
			if (l4 == 0) {
				i.style.left = "0px";
			}
			if (l4 == 1) {
				i.style.left = "-185px";
			}
			if (l4 == 2) {
				i.style.left = "-375px";
			}
			if (l4 == 3) {
				i.style.left = "-565px";
			}
			if (l4 == 4) {
				i.style.left = "-755px";
			}
			if (l4 == 5) {
				i.style.left = "-925px";
			}
			if (l4 > 5) {
				l4 = 5;
			}
		}
	};
	span4[0].onclick = () => {
		l4--;
		for (let i of div4) {
			if (l4 == 0) {
				i.style.left = "0px";
			}
			if (l4 == 1) {
				i.style.left = "-185px";
			}
			if (l4 == 2) {
				i.style.left = "-375px";
			}
			if (l4 == 3) {
				i.style.left = "-565px";
			}
			if (l4 == 4) {
				i.style.left = "-755px";
			}
			if (l4 < 0) {
				l4 = 0;
			}
		}
	};
}
//---------------------------------------bottom picks card render end------------------------------------//

//---------------------------------------daily kitchen start------------------------------------//
let span5 = document.querySelectorAll("#Daily-Kitchen span");
let div5 = document.querySelectorAll("#Kitchen-category div");
let l5 = 0;
span5[1].onclick = () => {
	l5++;
	for (let i of div5) {
		if (l5 == 0) {
			i.style.left = "0px";
		}
		if (l5 == 1) {
			i.style.left = "-200px";
		}
		if (l5 == 2) {
			i.style.left = "-400px";
		}
		if (l5 > 2) {
			l5 = 2;
		}
	}
};
span5[0].onclick = () => {
	l5--;
	for (let i of div5) {
		if (l5 == 0) {
			i.style.left = "0px";
		}
		if (l5 == 1) {
			i.style.left = "-200px";
		}
		if (l5 == 2) {
			i.style.left = "-400px";
		}
		if (l5 < 0) {
			l5 = 0;
		}
	}
};

//---------------------------------------daily kitchen  end------------------------------------//
let span6 = document.querySelectorAll("#home-living span");
let div6 = document.querySelectorAll("#home-category div");
let l6 = 0;
span6[1].onclick = () => {
	l6++;
	for (let i of div6) {
		if (l6 == 0) {
			i.style.left = "0px";
		}
		if (l6 == 1) {
			i.style.left = "-200px";
		}
		if (l6 == 2) {
			i.style.left = "-400px";
		}
		if (l6 > 2) {
			l6 = 2;
		}
	}
};
span6[0].onclick = () => {
	l6--;
	for (let i of div6) {
		if (l6 == 0) {
			i.style.left = "0px";
		}
		if (l6 == 1) {
			i.style.left = "-200px";
		}
		if (l6 == 2) {
			i.style.left = "-400px";
		}
		if (l6 < 0) {
			l6 = 0;
		}
	}
};
// -------------------------------todo----------------------------------------------------------//

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
