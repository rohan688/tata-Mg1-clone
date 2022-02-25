//api fetch
multi();
async function multi(){
  try{
      
       let res= await fetch("https://tata1mg.herokuapp.com/products/vitamins")

       let data= await res.json();
       console.log(data)
        
      displaymg(data);
  }
  catch(e){
      console.log("err:",e);
  }
  }

    function displaymg(mg_data){
    
    mg_data.map(function(ele){
    let div1= document.createElement("div");
    let img= document.createElement("img")
    img.setAttribute("src",ele.image);
    img.setAttribute("class","proClass")
    let name_div=document.createElement("div")
    name_div.setAttribute("class","name_pro_div");
    let name=document.createElement("h2");
    name.textContent=ele.name;
    name_div.append(name)
    name.setAttribute("class","proname");
    let quantity=document.createElement("p");
    quantity.textContent=ele.quantity;
    quantity.setAttribute("class","quantity");
    let rating_div=document.createElement("div");
    rating_div.setAttribute("class","div5")
    let rating=document.createElement("p");
    rating.textContent=`${ele.rating}★`;
    rating.setAttribute("class","rating");
    rating_div.append(rating);
    let mrp=document.createElement("p");
    let span2=document.createElement("span");
    span2.textContent=`MRP ₹${ele.mrp}`;
    span2.setAttribute("class","mrp");
    let span=document.createElement("span");
    span.innerText=`${ele.discount}%off` ;
    mrp.append(span2,span);
    // var discount=document.createElement("p");
    // discount.textContent=;
    span.setAttribute("class","dis");
    let price=document.createElement("p");
    price.textContent="₹"+ele.price;
    price.setAttribute("class","price")
    
    
    div1.append(img,name_div,quantity,rating_div,mrp,price);
    
    document.querySelector("#all_products").append(div1);
       
   
    let data_send={
        img:ele.image,
        name:ele.name,
        quantity:ele.quantity,
        rating:ele.rating,
        mrp:ele.mrp,
        discount:ele.discount,
        price:ele.price
        
     }
     
     div1.onclick=()=>{
         showproduct(data_send)
     }
   
     });
     }
     
     function showproduct(data){
         localStorage.setItem('mg_base',JSON.stringify(data));
         window.location.href="productPage.html"
     }


    //  filter low to bhigh price
     document.querySelector(".low").addEventListener("click",function (){
        sort_price(mg_data);
    
    })
      function sort_price(mg_data){
        document.querySelector("#all_products").innerHTML=null
          mg_data.sort(function(a,b){
              return Number(a.price)-Number(b.price);
            //  console.log(a.price)
          })
          displaymg(mg_data); 
      }  
        
   //filter high to low price
      document.querySelector(".high").addEventListener("click",function (){
        sort_price_high(mg_data);
    
    })
      function sort_price_high(mg_data){
        document.querySelector("#all_products").innerHTML=null
          mg_data.sort(function(a,b){
              return Number(b.price)-Number(a.price);
            //  console.log(a.price)
          })
          displaymg(mg_data); 
      }  
       
       //  filter low to bhigh discount
     document.querySelector(".dis_low").addEventListener("click",function (){
        sort_price(mg_data);
    
    })
      function sort_price(mg_data){
        document.querySelector("#all_products").innerHTML=null
          mg_data.sort(function(a,b){
              return Number(a.discount)-Number(b.discount);
            //  console.log(a.price)
          })
          displaymg(mg_data); 
      }  
      //filter high to low discount
      document.querySelector(".dis_high").addEventListener("click",function (){
        sort_price_high(mg_data);
    
    })
      function sort_price_high(mg_data){
        document.querySelector("#all_products").innerHTML=null
          mg_data.sort(function(a,b){
              return Number(b.discount)-Number(a.discount);
            //  console.log(a.price)
          })
          displaymg(mg_data); 
      } 



             //  filter low to bhigh rating
     document.querySelector(".rating_low").addEventListener("click",function (){
        sort_price(mg_data);
    
    })
      function sort_price(mg_data){
        document.querySelector("#all_products").innerHTML=null
          mg_data.sort(function(a,b){
              return Number(a.rating)-Number(b.rating);
            //  console.log(a.price)
          })
          displaymg(mg_data); 
      }  
      //filter high to low rating
      document.querySelector(".rating_high").addEventListener("click",function (){
        sort_price_high(mg_data);
    
    })
      function sort_price_high(mg_data){
        document.querySelector("#all_products").innerHTML=null
          mg_data.sort(function(a,b){
              return Number(b.rating)-Number(a.rating);
            //  console.log(a.price)
          })
          displaymg(mg_data); 
      } 

