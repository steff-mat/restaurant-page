export function promo() {
  const content = document.getElementById("content");
  const promoBox = document.createElement("div");
  promoBox.setAttribute("id", "promo");
  const h1El = document.createElement("h1");
  h1El.innerText = "Current Promotions";
  h1El.classList.add("promoH1");
  content.appendChild(promoBox);
  promoBox.appendChild(h1El);
}
