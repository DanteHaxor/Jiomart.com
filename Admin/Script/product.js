async function getData(){
    let res = await fetch("https://639b037e31877e43d67f1598.mockapi.io/crud?page=1&limit=10");
	let data = await res.json();
    displaydata(data)
}
getData()
function displaydata(data){
    data.forEach((el)=>{
        let tr=document.createElement("tr")
        let trcontent=`
            <td>${el.type}</td>
            <td>${el.id}</td>
            <td>${el.MRP}</td>
            <td class="success">Available</td>
            <td class="primary">Details</td>                
        `
        tr.innerHTML=trcontent;
        document.querySelector("tbody").append(tr)
    })
}
let showall=document.querySelector(".showall")
showall.addEventListener("click",()=>{
    getalldata()
})

async function getalldata(){
    let res = await fetch("https://639b037e31877e43d67f1598.mockapi.io/crud");
	let data = await res.json();
    displaydata(data)
}