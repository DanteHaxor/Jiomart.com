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

async function getData() {
	let getallData = await fetch(
		`https://639b1b94d5141501974b716f.mockapi.io/AddCart`,
		{
			method: "GET",
			headers: {
				Content_Type: "application/json",
			},
		}
	);
	if (getallData.ok) {
		let all_data = await getallData.json();
		displaysum(all_data);
		displayData(all_data);
		displaydiscount(all_data);
		document.getElementById(
			"total_length"
		).innerHTML = `&nbsp;(${all_data.length})`;
	}
}

getData();

async function deletedata(id) {
	let res = await fetch(
		`https://639b1b94d5141501974b716f.mockapi.io/AddCart/${id}`,
		{
			method: "DELETE",
		}
	);
	window.location.reload();
}

let card = document.querySelector(".prdoucts-added");

let total_bill_amt = document.getElementById("total_bill_amount");
let total_bill_disc = document.getElementById("Discounted-Price");
function displayData(data) {
	card.innerHTML = `${data
		.map((el) => {
			return `<div class="abc">
            <div class="card-img"><img src=${el.image}></div>
            <div class="card-disc">
            <span>${el.title}</span>
            <p class="card-price">₹ ${el.price}</p>
            <span style="color:red" data-id="${el.id}" class="del-btn">Remove</span></div>
    </div>
           `;
		})
		.join(" ")}`;

	let del = document.querySelectorAll(".del-btn");

	del.forEach((el) => {
		el.addEventListener("click", (e) => {
			swal("", "product has been removed from the cart", "success");

			let id = e.target.dataset.id;
			deletedata(id);
		});
	});
}

let sum = 0;
let total = document.getElementById("checkout_price");
function displaysum(data) {
	data.forEach((el) => {
		sum += el.price;
	});
	total_bill_amt.innerText = `₹${sum}`;
	document.getElementById("balance").innerText = `₹ ${sum}`;
}

let discount = 0;

function displaydiscount(data) {
	data.forEach((el) => {
		discount += el.discount;
	});
	total_bill_disc.innerText = `- ₹${discount}`;
	total.innerText = `₹${sum - discount}`;
}

let coupen = document.getElementById("discount-coupon-code");
let apllybtn = document.getElementById("apl");
apllybtn.addEventListener("click", () => {
	if ((coupen.value = "masai30")) {
		total.innerText = `₹${sum - discount - 50}`;
	}
});

document.getElementById("CheckOut_Button").addEventListener("click", () => {
	window.location.href = "review.html";
});

function summary() {
	window.location.href = "review.html";
}

function payment() {
	window.location.href = "payment.html";
}

function cartMain() {
	window.location.href = "cart.html";
}
