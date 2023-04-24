export function menu() {
  const content = document.getElementById("content");

  const h2Text = document.createElement("h2");
  h2Text.setAttribute("class", "h2TextMenu");
  h2Text.innerText = "Best Pizza menu of the year!";

  const menuBox = document.createElement("div");
  menuBox.setAttribute("id", "menu");
  content.appendChild(menuBox);
  menuBox.classList.add("displayNone");
  menuBox.appendChild(h2Text);

  for (let i = 0; i < 7; i++) {
    let menuItem = document.createElement("div");
    const img = document.createElement("img");
    const h1 = document.createElement("h1");
    h1.setAttribute("class", "h1Menu");
    const h3 = document.createElement("h3");
    h3.setAttribute("class", "h3Menu");
    const p = document.createElement("p");
    p.setAttribute("class", "pMenu");
    menuItem.classList.add("item-box");
    menuBox.appendChild(menuItem);
    menuItem.appendChild(img);
    menuItem.appendChild(h1);
    menuItem.appendChild(h3);
    menuItem.appendChild(p);
  }

  const h1 = document.querySelectorAll("h1");
  const h3 = document.querySelectorAll("h3");
  const p = document.querySelectorAll("p");
  const imgTag = document.querySelectorAll("img");
  imgTag[0].src = "/src/imgs/supreme.png";
  h1[0].innerText = "Supreme";
  h3[0].innerText = "Contains:";
  p[0].innerText = "tomato sauce, double salami, double mozzarella, parmesan";

  imgTag[1].src = "/src/imgs/texas.png";
  h1[1].innerText = "Texas";
  h3[1].innerText = "Contains:";
  p[1].innerText =
    "barbecue sauce, beef, salami, onion, corn, bell pepper, mozzarella";

  imgTag[2].src = "/src/imgs/sajtimado.png";
  h1[2].innerText = "Cheese Lover";
  h3[2].innerText = "Contains:";
  p[2].innerText = "cream cheese, bacon, chicken breast, cheddar, mozzarella";

  imgTag[3].src = "/src/imgs/sonka-kukorica.png";
  h1[3].innerText = "Ham and Corn";
  h3[3].innerText = "Contains:";
  p[3].innerText = "tomato sauce, ham, sweet corn, mozzarella";

  imgTag[4].src = "/src/imgs/dolce-vita.png";
  h1[4].innerText = "Sweet Life";
  h3[4].innerText = "Contains:";
  p[4].innerText = "omato sauce, ham, mushrooms, corn, mozzarella";

  imgTag[5].src = "/src/imgs/bivaly.png";
  h1[5].innerText = "Buffalo";
  h3[5].innerText = "Contains:";
  p[5].innerText =
    "spicy tomato sauce, sausage, green pepper, jalapeno, mozzarella";

  imgTag[6].src = "/src/imgs/fitness.png";
  h1[6].innerText = "Fitness";
  h3[6].innerText = "Contains:";
  p[6].innerText =
    "tomato sauce, corn, broccoli, bell pepper, feta cheese, mozzarella";
}
