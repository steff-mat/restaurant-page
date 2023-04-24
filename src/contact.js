export function contact() {
  const content = document.getElementById("content");
  const contactBox = document.createElement("div");
  contactBox.setAttribute("id", "contact");
  contactBox.classList.add("contact-box");
  content.appendChild(contactBox);
}
