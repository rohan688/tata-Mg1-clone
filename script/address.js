document.querySelector("#save_btn").addEventListener("click", (e) => {
    e.preventDefault();
    let flag=true;
    let building=document.querySelector("#building_name").value;
    let pin=document.querySelector("#pincode").value;
    let locality=document.querySelector("#locality").value;
    let city=document.querySelector("#city").value;
    let state=document.querySelector("#state").value;
    let customer_name=document.querySelector("#name").value;
    let number=document.querySelector("#mobile").value;
    
    async function addresspost(){
       
    try{
          let prd_body={
  
          building:building,
          pin:pin,
          locality:locality,
          city:city,
          state:state,
          customer_name:customer_name,
          number:number,
         
      }
            let res = await fetch("https://tata1mg.herokuapp.com/products",{
                method:"POST",
                body:JSON.stringify(prd_body),
                headers:{"Content-type":"application/json"}
            });
            let data = await res.json();
            console.log(data);
        }catch(err){
            console.log(err);
        }
      }
  
    
    

    if(building==""){
        alert('Enter Flat Number,Building Name,Street/Locality');
        flag=false;
    }
    if(pin.length<6){
        alert('Enter valid Pincode');
        flag=false;
    }
    if(locality==""){
        alert('Enter locality');
        flag=false;
    }
    if(city==""){
        alert('Enter city Name');
        flag=false;
    }
    if(state==""){
        alert('Enter state Name');
        flag=false;
    }
    if(customer_name==""){
        alert('Enter customer name');
        flag=false;
    }
    if(number.length<10){
        alert('Enter valid Mobile Number');
        flag=false;
    }
    if(flag==true){
        window.location.href="payment.html";
    }
})

document.querySelector("#mg_home").addEventListener("click",() => {
    window.location.href="index.html";
})
document.querySelector("#need_help").addEventListener("click", () => {
    window.location.href="NeedHelp.html";
})