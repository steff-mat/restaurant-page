export function nav() {
  //Create the nav bar
  const content = document.getElementById("content");
  const navCE = document.createElement("nav");
  content.appendChild(navCE);

  //Create buttons and loop thru them
  const navBar = document.querySelector("nav");
  for (let i = 0; i < 3; i++) {
    let button = document.createElement("button");
    navBar.appendChild(button);
  }

  //Button innerText
  const button = document.querySelectorAll("button");

  button[0].innerText = "Menu";
  button[1].innerText = "Promotions";
  button[2].innerText = "Contact";

  button[0].addEventListener("click", () => {
    const menuBox = document.getElementById("menu");
    const promoBox = document.getElementById("promo");
    const contactBox = document.getElementById("contact");
    menuBox.classList.remove("displayNone");
    promoBox.classList.add("displayNone");
    contactBox.classList.add("displayNone");
  });
  button[1].addEventListener("click", () => {
    const menuBox = document.getElementById("menu");
    const promoBox = document.getElementById("promo");
    const contactBox = document.getElementById("contact");
    menuBox.classList.add("displayNone");
    promoBox.classList.remove("displayNone");
    contactBox.classList.add("displayNone");
  });
  button[2].addEventListener("click", () => {
    const menuBox = document.getElementById("menu");
    const promoBox = document.getElementById("promo");
    const contactBox = document.getElementById("contact");
    menuBox.classList.add("displayNone");
    promoBox.classList.add("displayNone");
    contactBox.classList.remove("displayNone");
  });
}
