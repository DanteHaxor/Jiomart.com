var span = document.querySelectorAll("#top-trend span");
var div = document.querySelectorAll("#Trending-brands div");
var l = 0;
span[1].onclick = () => {
    l++;
    for (var i of div) {
        if (l == 0) { i.style.left = "0px"; }
        if (l == 1) { i.style.left = "-200px"; }
        if (l == 2) { i.style.left = "-400px"; }
        if (l > 2) { l = 2; }
    }
}
span[0].onclick = () => {
    l--;
    for (var i of div) {
        if (l == 0) { i.style.left = "0px"; }
        if (l == 1) { i.style.left = "-200px"; }
        if (l == 2) { i.style.left = "-400px"; }
        if (l < 0) { l = 0; }
    }
}


var span1 = document.querySelectorAll("#top-cat span");
var div1 = document.querySelectorAll("#top-category div");
var l1 = 0;
span1[1].onclick = () => {
    l1++;
    for (var i of div1) {
        if (l1 == 0) { i.style.left = "0px"; }
        if (l1 == 1) { i.style.left = "-200px"; }
        if (l1 == 2) { i.style.left = "-400px"; }
        if (l1 > 2) { l1 = 2; }
    }
}
span1[0].onclick = () => {
    l1--;
    for (var i of div1) {
        if (l1 == 0) { i.style.left = "0px"; }
        if (l1 == 1) { i.style.left = "-200px"; }
        if (l1 == 2) { i.style.left = "-400px"; }
        if (l1 < 0) { l1 = 0; }
    }
}


