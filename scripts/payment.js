document.querySelector("#card_payment_btn").addEventListener("click",()=>{
    let flag=true;
    let card_number=document.querySelector("#card_num").value;
    let exp_date=document.querySelector("#exp_date").value;
    let cvv_number=document.querySelector("#cvv").value;
    let card_name=document.querySelector("#card_name").value;
       if(card_number.length<16){
           alert("enter valid card number");
           flag=false;
       }
       if(exp_date==""){
           alert("enter valid expiry date");
           flag=false;
       }
       if(cvv_number.length<3){
           alert("enter valid CVV number");
           flag=false;
       }
       if(card_name==""){
           alert("enter valid name");
           flag=false;
       }
       if(flag==true){
           alert("payment Successfull");
       }
    })

    document.querySelector("#main_card_payment_btn").addEventListener("click",()=>{
    let flag=true;
    let card_number=document.querySelector("#card_num").value;
    let exp_date=document.querySelector("#exp_date").value;
    let cvv_number=document.querySelector("#cvv").value;
    let card_name=document.querySelector("#card_name").value;
       if(card_number.length<16){
           alert("enter valid card number");
           flag=false;
       }
       if(exp_date==""){
           alert("enter valid expiry date");
           flag=false;
       }
       if(cvv_number.length<3){
           alert("enter valid CVV number");
           flag=false;
       }
       if(card_name==""){
           alert("enter valid name");
           flag=false;
       }
       if(flag==true){
           alert("payment Successfull");
       }
    })