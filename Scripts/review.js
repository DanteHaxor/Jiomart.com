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
		displaydiscount(all_data);
	}
}

getData();
let total_bill_amt = document.getElementById("total_bill_amount");
let total_bill_disc = document.getElementById("Discounted-Price");
let sum = 0;
let total = document.getElementById("checkout_price");
function displaysum(data) {
	data.forEach((el) => {
		sum += el.price;
	});
	total_bill_amt.innerText = `₹${sum}`;
}
let discount = 0;

function displaydiscount(data) {
	data.forEach((el) => {
		discount += el.discount;
	});
	total_bill_disc.innerText = `- ₹${discount}`;
	total.innerText = `₹${sum - discount - 50}`;
}

function summary() {
	window.location.href = "review.html";
}

function payment() {
	window.location.href = "payment.html";
}

function cartMain() {
	window.location.href = "cart.html";
}

document.getElementById("make-payment").addEventListener("click", () => {
	window.location.href = "payment.html";
});

let form=document.getElementById("form").addEventListener("submit",(e)=>{
	e.preventDefault()
	Swal.fire({
  title: 'Do you want to save the changes?',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: 'Save',
  denyButtonText: `Don't save`,
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    Swal.fire('Saved!', '', 'success')
  } else if (result.isDenied) {
    Swal.fire('Changes are not saved', '', 'info')
  }
})
})
