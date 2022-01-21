var mg_data=[
    {
        image:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1642507775/gmkrpf1imjj9djwvq4gq.jpg",
        name:"Tata 1mg Multivitamin Supreme, Zinc, Calcium and Vitamin D Immunity Booster Capsule",
        quantity:"bottle of 60 capsules",
        rating:"4.5",
        mrp:"995",
        discount:"49",
        price:"507"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1637324194/gc3u9gfc331wtsipnljl.jpg",
        name:"Tata 1mg Calcium + Vitamin D3, Zinc, Magnesium and Alfalfa Tablets for Joint Health & Immunity",
        quantity:"box of 2 masks",
        rating:"4.2",
        mrp:"595",
        discount:"49",
        price:"304"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1641378789/rbaugppr9gb507pafj1k.jpg",
        name:"Tata 1mg BIS Approved FFP2 N95 Mask - Head Loop 2 Mask",
        quantity:"bottle of 60 capsules",
        rating:"4.2",
        mrp:"190",
        discount:"20",
        price:"152"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1642508036/wtr1cpntuka5ugtayvgd.jpg",
        name:"Tata 1mg Women's Multivitamin, Zinc, Vitamin C, Calcium, Vitamin D, and Iron Immunity Booster Tablet",
        quantity:"bottle of 60 capsules",
        rating:"4.2",
        mrp:"995",
        discount:"49",
        price:"508"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1642507827/fwram2p7rbkoigjg6zas.jpg",
        name:"Salmon Omega 3 Fish Oil Capsule",
        quantity:"bottle of 60 capsules",
        rating:"4.4",
        mrp:"995",
        discount:"49",
        price:"507"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1638444070/nwhioxrxmwjkaxitryag.jpg",
        name:"Tata 1mg BIS Approved FFP2 N95 Mask for Kids 5 Mask",
        quantity:"box of 5 masks",
        rating:"4.7",
        mrp:"400",
        discount:"49",
        price:"244"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1631894537/w9eyedqdlnlntuc0zl7d.jpg",
        name:"1mg High Fiber with Pre- & Probiotics with Inulin, Guar gum, & Resistant Maltodextrin Unflavoured Unflavoured with Resistant Maltodextrin, Inulin and Guar Gum",
        quantity:"bottle of 60 capsules",
        rating:"4.2",
        mrp:"995",
        discount:"69",
        price:"307"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600252869/cropped/ylmxiaxgnkibe10awqtk.jpg",
        name:"Pure Nutrition Progut Plus Veg Capsule",
        quantity:"bottle of 60 capsules",
        rating:"4.5",
        mrp:"1499",
        discount:"20",
        price:"1199"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1641125489/lzkl9wlspraikn2tduia.jpg",
        name:"Carbamide Forte Probiotics 2.75 Billion cfu + Prebiotics 100mg Vegetarian Capsule",
        quantity:"bottle of 100 vegicaps",
        rating:"4.2",
        mrp:"595",
        discount:"32",
        price:"402"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600177746/cropped/y0kgnftl541nm5ntun4v.jpg",
        name:"Inlife Pre and Probiotics Capsule",
        quantity:"bottle of 60 capsules",
        rating:"4.2",
        mrp:"600",
        discount:"30",
        price:"419"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600758903/cropped/ztftzof4epqbccv9nvu7.jpg",
        name:"Inlife Probiotic Forte Vegetarian Capsules",
        quantity:"bottle of 60 capsules",
        rating:"4.2",
        mrp:"1099",
        discount:"49",
        price:"509"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600223316/cropped/bjppqvosneaar3ipwwuz.jpg",
        name:"ActivStart Uno Biotics Sachet (1gm Each) Sugar Free",
        quantity:"1 packet",
        rating:"4.4",
        mrp:"49",
        discount:"10",
        price:"44"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600711295/cropped/oxdlht0qqmwoynfbk0g4.png",
        name:"Purayati Complete Probiotics Capsule",
        quantity:"box of 5 masks",
        rating:"4.7",
        mrp:"900",
        discount:"10",
        price:"855"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1601130304/cropped/dglt1y1cwfjib3pphytp.jpg",
        name:"Swisse Ultibiotic Daily Digestive Probiotic Capsule",
        quantity:"bottle of 60 capsules",
        rating:"4.2",
        mrp:"1749",
        discount:"25",
        price:"1312"
    },
    ];
    displaymg(mg_data);
    function displaymg(mg_data){
    
    mg_data.map(function(ele){
    let div1= document.createElement("div");
    let img= document.createElement("img")
    img.setAttribute("src",ele.image);
    img.setAttribute("class","proClass")
    let name_div=document.createElement("div")
    name_div.setAttribute("class","name_div");
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