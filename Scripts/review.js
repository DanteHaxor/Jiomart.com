async function getData() {
    let getallData= await fetch(`https://639b1b94d5141501974b716f.mockapi.io/AddCart`,{
      method:"GET",
      headers:{
        "Content_Type":"application/json",
      }
    })
   if(getallData.ok){
    let all_data=await getallData.json()
      displaysum(all_data)
      displaydiscount(all_data)
   }

}

  getData()
  let total_bill_amt=document.getElementById("total_bill_amount")
  let total_bill_disc=document.getElementById("Discounted-Price")
  let sum=0
  let total=document.getElementById("checkout_price")
function displaysum(data){
    
        data.forEach((el)=>{
            sum+=el.price
        })
    total_bill_amt.innerText=`₹${sum}`
}
let discount=0

function displaydiscount(data){  
        data.forEach((el)=>{
            discount+=el.discount
        })
        total_bill_disc.innerText=`- ₹${discount}`       
         total.innerText=`₹${sum-discount-50}`
  
}


        
    
        document.getElementById("CheckOut_Button").addEventListener("click",()=>{
            window.location.href="payment.html"
        })

        