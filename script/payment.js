let empty_arr = [];
localStorage.setItem("cart_data", JSON.stringify(empty_arr));
let b = JSON.parse(localStorage.getItem("price_data"));
console.log(b);
let tbp = b[1] + 45;
document.getElementById("total_mrp_item").textContent = `₹ ${b[0]}`;
document.getElementById("discount_price").textContent = `-₹ ${b[0] - b[1]}`;
document.getElementById("to_be_paid").textContent = `₹ ${tbp}`;
document.getElementById("total_savings_amount").textContent = `₹ ${
  b[0] - b[1]
}`;
document.querySelector("#card_payment_btn").addEventListener("click", () => {
  let flag = true;
  let card_number = document.querySelector("#card_num").value;
  let exp_date = document.querySelector("#exp_date").value;
  let cvv_number = document.querySelector("#cvv").value;
  let card_name = document.querySelector("#card_name").value;
  if (card_number.length < 16) {
    alert("enter valid card number");
    flag = false;
  }
  if (exp_date == "") {
    alert("enter valid expiry date");
    flag = false;
  }
  if (cvv_number.length < 3) {
    alert("enter valid CVV number");
    flag = false;
  }
  if (card_name == "") {
    alert("enter valid name");
    flag = false;
  }
  if (flag == true) {
    alert("payment Successfull");
    window.location.href = "thank_you.html";
  }
});

document
  .querySelector("#main_card_payment_btn")
  .addEventListener("click", () => {
    let flag = true;
    let card_number = document.querySelector("#card_num").value;
    let exp_date = document.querySelector("#exp_date").value;
    let cvv_number = document.querySelector("#cvv").value;
    let card_name = document.querySelector("#card_name").value;
    if (card_number.length < 16) {
      alert("enter valid card number");
      flag = false;
    }
    if (exp_date == "") {
      alert("enter valid expiry date");
      flag = false;
    }
    if (cvv_number.length < 3) {
      alert("enter valid CVV number");
      flag = false;
    }
    if (card_name == "") {
      alert("enter valid name");
      flag = false;
    }
    if (flag == true) {
      alert("payment Successfull");
      window.location.href = "thank_you.html";
    }
  });

document.querySelector("#mg_home").addEventListener("click", () => {
  window.location.href = "index.html";
});
document.querySelector("#need_help").addEventListener("click", () => {
  window.location.href = "NeedHelp.html";
});
