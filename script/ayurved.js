var mg_data = [
  {
    image: "https://onemg.gumlet.io/image/upload/sdzsl07upy0u3sxckqyj.jpg",
    name: "Ashwagandha",
    quantity:
      "Ashwagandha is an important herb of the Ayurvedic system of medicine.",
  },
  {
    image: "https://onemg.gumlet.io/image/upload/qh2zgvxci0mazembq9rs.jpg",
    name: "Shilajit",
    quantity:
      "Shilajit is a mineral based extract which is pale-brown to blackish-brown in color.",
    rating: "4.2",
    mrp: "595",
    discount: "49",
    price: "304",
  },
  {
    image: "https://onemg.gumlet.io/image/upload/un9aranb98jy80ihbj95.jpg",
    name: "Giloy",
    quantity:
      "Giloy, also known as Amrita or Guduchi in Hindi, is an herb that helps improve digestion and boost immunity",
    rating: "4.2",
    mrp: "190",
    discount: "20",
    price: "152",
  },
  {
    image: "https://onemg.gumlet.io/image/upload/irazjokdgsiiuw6abiph.jpg",
    name: "Amla",
    quantity:
      "Amla, also known as “Indian gooseberry”, is loaded with nutrients and is the richest natural source of vitamin C.",
    rating: "4.2",
    mrp: "995",
    discount: "49",
    price: "508",
  },
  {
    image: "https://onemg.gumlet.io/image/upload/wmbvvqjtdbp8svncngbb.jpg",
    name: "Isabgol",
    quantity:
      "Isabgol also known as psyllium husk is a dietary fiber that helps to increase stool and promote laxation.",
    rating: "4.4",
    mrp: "995",
    discount: "49",
    price: "507",
  },
  {
    image: "https://onemg.gumlet.io/image/upload/s86txjtecyd8kbcjf7dv.jpg",
    name: "Turmeric",
    quantity:
      "Turmeric is an ancient spice which has been used mainly in cooking.",
    rating: "4.7",
    mrp: "400",
    discount: "49",
    price: "244",
  },
  {
    image: "https://onemg.gumlet.io/image/upload/qf6foj1ecxfkbtjvibz0.jpg",
    name: "Shatavari",
    quantity:
      "Shatavari is an Ayurvedic rasayana herb which is also known as the female-friendly herb.",
    rating: "4.2",
    mrp: "995",
    discount: "69",
    price: "307",
  },
];
displaymg(mg_data);
function displaymg(mg_data) {
  mg_data.map(function (ele) {
    let div1 = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", ele.image);
    img.setAttribute("class", "proClass");
    let name_div = document.createElement("div");
    name_div.setAttribute("class", "name_div");
    let name = document.createElement("h2");
    name.textContent = ele.name;
    name_div.append(name);
    name.setAttribute("class", "proname");
    let quantity = document.createElement("p");
    quantity.textContent = ele.quantity;
    quantity.setAttribute("class", "quantity");
    let rating_div = document.createElement("div");
    rating_div.setAttribute("class", "div5");
    let rating = document.createElement("p");
    rating.textContent = `${ele.rating}★`;
    rating.setAttribute("class", "rating");
    rating_div.append(rating);
    let mrp = document.createElement("p");
    let span2 = document.createElement("span");
    span2.textContent = `MRP ₹${ele.mrp}`;
    span2.setAttribute("class", "mrp");
    let span = document.createElement("span");
    span.innerText = `${ele.discount}%off`;
    mrp.append(span2, span);
    // var discount=document.createElement("p");
    // discount.textContent=;
    span.setAttribute("class", "dis");
    let price = document.createElement("p");
    price.textContent = "₹" + ele.price;
    price.setAttribute("class", "price");

    div1.append(img, name_div, quantity);

    document.querySelector("#mg").append(div1);
  });
}

// pre and prohibit suppliment
var pre_data = [
  {
    image:
      "https://onemg.gumlet.io/images/qclivlzn55hbfukf2mjn/aloe-vera-0.jpg",
    name: "Aloe vera",
    quantity:
      "Aloe vera is a cactus-like succulent plant with a clear healing gel in the leaves.",
    rating: "4.5",
    mrp: "1499",
    discount: "20",
    price: "1199",
  },
  {
    image: "https://onemg.gumlet.io/images/q3lxrcgk8iok8lvx9lap/honey-0.jpg",
    name: "Honey",
    quantity: "Honey is a viscous substance rich in a number of nutrients.",
    rating: "4.2",
    mrp: "595",
    discount: "32",
    price: "402",
  },
  {
    image: "https://onemg.gumlet.io/images/s86txjtecyd8kbcjf7dv/turmeric-0.jpg",
    name: "Turmeric",
    quantity:
      "Turmeric is an ancient spice which has been used mainly in cooking.",
    rating: "4.2",
    mrp: "600",
    discount: "30",
    price: "419",
  },
  {
    image: "https://onemg.gumlet.io/images/uc2vwlgcfu9x2ylp9v0w/coconut-0.jpg",
    name: "Coconut",
    quantity:
      "Coconut is commonly known as “Nariyal” and is considered as a good luck charm for new beginnings.",
    rating: "4.2",
    mrp: "1099",
    discount: "49",
    price: "509",
  },
  {
    image: "https://onemg.gumlet.io/images/gjiscdsvkzjbkcpt8xdw/grapes-0.jpg",
    name: "Grapes",
    quantity:
      "Grapes also known as Draksha in Ayurveda, is a famous fruit that offers a variety of health and medicinal benefits.",
    rating: "4.4",
    mrp: "49",
    discount: "10",
    price: "44",
  },
  {
    image: "https://onemg.gumlet.io/images/nn4y5pwmqmomide6az99/tulsi-0.jpg",
    name: "Tulsi",
    quantity:
      "Tulsi is a holy plant that has both medicinal and spiritual properties.",
    rating: "4.7",
    mrp: "900",
    discount: "10",
    price: "855",
  },
  {
    image: "https://onemg.gumlet.io/images/suekeilm4q8tykluzoqb/papaya-0.jpg",
    name: "Papaya",
    quantity:
      "Papaya, known as “Erandakarkati” in Ayurveda, is a low calorie juicy fruit rich in vitamin C and A. ",
    rating: "4.2",
    mrp: "1749",
    discount: "25",
    price: "1312",
  },
];
displaypre(pre_data);
function displaypre(pre_data) {
  pre_data.map(function (ele) {
    let div1 = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", ele.image);
    img.setAttribute("class", "pre_img");
    let name_div = document.createElement("div");
    name_div.setAttribute("class", "name_div");
    let name = document.createElement("h2");
    name.textContent = ele.name;
    name_div.append(name);
    name.setAttribute("class", "proname");
    let quantity = document.createElement("p");
    quantity.textContent = ele.quantity;
    quantity.setAttribute("class", "quantity");
    let rating_div = document.createElement("div");
    rating_div.setAttribute("class", "div5");
    let rating = document.createElement("p");
    rating.textContent = `${ele.rating}★`;
    rating.setAttribute("class", "rating");
    rating_div.append(rating);
    let mrp = document.createElement("p");
    let span2 = document.createElement("span");
    span2.textContent = `MRP ₹${ele.mrp}`;
    span2.setAttribute("class", "mrp");
    let span = document.createElement("span");
    span.innerText = `${ele.discount}%off`;
    mrp.append(span2, span);
    // var discount=document.createElement("p");
    // discount.textContent=;
    span.setAttribute("class", "dis");
    let price = document.createElement("p");
    price.textContent = "₹" + ele.price;
    price.setAttribute("class", "price");

    div1.append(img, name_div, quantity);

    document.querySelector("#sup").append(div1);
  });
}
