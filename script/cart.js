var cartItemsArr = JSON.parse(localStorage.getItem("cart_data")) || [];

if (cartItemsArr.length == 0) {
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.src = "images/empty-cart-icon.svg";
  let h3 = document.createElement("h3");
  h3.textContent = "Oops!";
  let p = document.createElement("p");
  p.textContent = "Looks like there is no item in your cart yet.";
  let m_button = document.createElement("button");
  m_button.id = "add_medicines";
  m_button.textContent = "ADD MEDICINES";
  m_button.addEventListener("click", function () {
    window.location.href = "index.html";
  });
  div.append(img, h3, p, m_button);
  div.style.textAlign = "center";
  div.style.margin = "auto";
  img.id = "empty_img";
  let a = document.getElementById("container");
  a.innerHTML = "";
  a.append(div);
} else {
  let a = document.getElementById("cart_items");
  let c = document.getElementById("cart_total");
  let total_price = 0;
  let total_discount = 0;
  let total_d = 0;

  cartItemsArr.map((element) => {
    let b = document.createElement("div");
    b.style.display = "flex";
    let { name, quantity, mrp, price } = element;
    let temp = document.createElement("div");
    let temp1 = document.createElement("div");
    temp.style.width = "50%";
    temp1.style.width = "50%";
    temp1.style.textAlign = "right";
    let h2 = document.createElement("h3");
    let price_h2 = document.createElement("h3");
    let org_price = document.createElement("h5");
    org_price.id = "dsc_prc";
    let qty = document.createElement("p");
    let plus = document.createElement("button");
    let minus = document.createElement("button");
    let del = document.createElement("button");
    plus.textContent = "+";
    minus.textContent = "-";
    plus.id = "plus";
    minus.id = "minus";
    del.id = "del";
    del.textContent = "Remove";
    price_h2.textContent = `Rs. ${price}`;
    org_price.textContent = `Rs. ${mrp}`;
    h2.textContent = name;
    qty.textContent = quantity;
    temp.append(h2, qty, del);
    temp1.append(price_h2, org_price, minus, plus);
    b.append(temp, temp1);
    a.append(b);

    total_price += +mrp;
    total_discount += +price;
  });
  total_d = total_price - total_discount + 10;
  document.getElementById("itm_total").textContent = total_price;
  document.getElementById("ttl_dsc1").textContent = total_discount;
  document.getElementById("ttl_dsc").textContent = total_discount;
  document.getElementById("ttl").textContent = total_d;
}
document.getElementById("chkout").addEventListener("click", function () {
  window.location.href = "";
});
