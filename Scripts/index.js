let span = document.querySelectorAll("#top-trend span");
let div = document.querySelectorAll("#Trending-brands div");
let l = 0;
span[1].onclick = () => {
    l++;
    for (let i of div) {
        if (l == 0) { i.style.left = "0px"; }
        if (l == 1) { i.style.left = "-200px"; }
        if (l == 2) { i.style.left = "-400px"; }
        if (l == 3) { i.style.left = "-600px"; }
        if (l > 3) { l = 3; }
    }
}
span[0].onclick = () => {
    l--;
    for (let i of div) {
        if (l == 0) { i.style.left = "0px"; }
        if (l == 1) { i.style.left = "-200px"; }
        if (l == 2) { i.style.left = "-400px"; }
        if (l == 3) { i.style.left = "-600px"; }
        if (l < 0) { l = 0; }
    }
}


let span1 = document.querySelectorAll("#top-cat span");
let div1 = document.querySelectorAll("#top-category div");
let l1 = 0;
span1[1].onclick = () => {
    l1++;
    for (let i of div1) {
        if (l1 == 0) { i.style.left = "0px"; }
        if (l1 == 1) { i.style.left = "-200px"; }
        if (l1 == 2) { i.style.left = "-400px"; }
        if (l1 == 3) { i.style.left = "-600px"; }
        if (l1 == 4) { i.style.left = "-800px"; }
        if (l1 > 4) { l1 = 4; }
    }
}
span1[0].onclick = () => {
    l1--;
    for (let i of div1) {
        if (l1 == 0) { i.style.left = "0px"; }
        if (l1 == 1) { i.style.left = "-200px"; }
        if (l1 == 2) { i.style.left = "-400px"; }
        if (l1 == 3) { i.style.left = "-600px"; }
        if (l1 == 4) { i.style.left = "-800px"; }
        if (l1 < 0) { l1 = 0; }
    }
}

//-------------------------products card render start----------------------------------------//

let DealsSection = document.getElementById("top-deals");
async function products(){
    try {
        let res= await fetch("https://639b1b94d5141501974b716f.mockapi.io/cart")
        let data=await res.json();
        renderData(data)
    } catch (error) {
        alert("Bad Request")
    }
}
products()

function renderData(data){
    DealsSection.innerHTML=`${data.map((el)=>{
        return `<div>
        <a><div class="prod-img"><img src=${el.image}></div>
        <div class="prod-disc">
        <span>${el.title}</span>
        <p class="pro-price">₹ ${el.price}</p>
        <span>Save ₹${el.discount}</div>
        </a>
        <div class="add-cart"><p>Add to Cart</p><span>+</span></div>
        </div>`
    }).join(" ")}`
    let span2 = document.querySelectorAll("#Deals>span");
    let div2 = document.querySelectorAll("#top-deals>div");
    let l2 = 0;
    span2[1].onclick = () => {
        l2++;
        for (let i of div2) {
            if (l2 == 0) { i.style.left = "0px"; }
            if (l2 == 1) { i.style.left = "-185px"; }
            if (l2 == 2) { i.style.left = "-375px"; }
            if (l2 == 3) { i.style.left = "-565px"; }
            if (l2 == 4) { i.style.left = "-755px"; }
            if (l2 == 5) { i.style.left = "-925px"; }
            if (l2 > 5) { l2 = 5; }
            console.log(i)
        }
    }
    span2[0].onclick = () => {
        l2--;
        for (let i of div2) {
            if (l2 == 0) { i.style.left = "0px"; }
            if (l2 == 1) { i.style.left = "-185px"; }
            if (l2 == 2) { i.style.left = "-375px"; }
            if (l2 == 3) { i.style.left = "-565px"; }
            if (l2 == 4) { i.style.left = "-755px"; }
            if (l2 < 0) { l2 = 0; }
        }
    }
}
//---------------------------------------products card render end------------------------------------//

//---------------------------------------daily kitchen start------------------------------------//
let span3 = document.querySelectorAll("#Daily-Kitchen span");
let div3 = document.querySelectorAll("#Kitchen-category div");
let l3 = 0;
span3[1].onclick = () => {
    l3++;
    for (let i of div3) {
        if (l3 == 0) { i.style.left = "0px"; }
        if (l3 == 1) { i.style.left = "-200px"; }
        if (l3 == 2) { i.style.left = "-400px"; }
        if (l3 > 2) { l3 = 2; }
    }
}
span3[0].onclick = () => {
    l3--;
    for (let i of div3) {
        if (l3 == 0) { i.style.left = "0px"; }
        if (l3 == 1) { i.style.left = "-200px"; }
        if (l3 == 2) { i.style.left = "-400px"; }
        if (l3 < 0) { l3 = 0; }
    }
}



//---------------------------------------daily kitchen  end------------------------------------//