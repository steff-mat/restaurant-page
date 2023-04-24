(() => {
  "use strict";
  !(function () {
    const e = document.getElementById("content"),
      t = document.createElement("nav");
    e.appendChild(t);
    const n = document.querySelector("nav");
    for (let e = 0; e < 3; e++) {
      let e = document.createElement("button");
      n.appendChild(e);
    }
    const o = document.querySelectorAll("button");
    (o[0].innerText = "Menu"),
      (o[1].innerText = "Promotions"),
      (o[2].innerText = "Contact"),
      o[0].addEventListener("click", () => {
        const e = document.getElementById("menu"),
          t = document.getElementById("promo"),
          n = document.getElementById("contact");
        e.classList.remove("displayNone"),
          t.classList.add("displayNone"),
          n.classList.add("displayNone");
      }),
      o[1].addEventListener("click", () => {
        const e = document.getElementById("menu"),
          t = document.getElementById("promo"),
          n = document.getElementById("contact");
        e.classList.add("displayNone"),
          t.classList.remove("displayNone"),
          n.classList.add("displayNone");
      }),
      o[2].addEventListener("click", () => {
        const e = document.getElementById("menu"),
          t = document.getElementById("promo"),
          n = document.getElementById("contact");
        e.classList.add("displayNone"),
          t.classList.add("displayNone"),
          n.classList.remove("displayNone");
      });
  })(),
    (function () {
      const e = document.getElementById("content"),
        t = document.createElement("div");
      t.setAttribute("id", "menu"),
        e.appendChild(t),
        t.classList.add("displayNone");
      for (let e = 0; e < 7; e++) {
        let e = document.createElement("div");
        const n = document.createElement("img"),
          o = document.createElement("h1"),
          c = document.createElement("h3"),
          a = document.createElement("p");
        e.classList.add("item-box"),
          t.appendChild(e),
          e.appendChild(n),
          e.appendChild(o),
          e.appendChild(c),
          e.appendChild(a);
      }
      const n = document.querySelectorAll("h1"),
        o = document.querySelectorAll("h3"),
        c = document.querySelectorAll("p"),
        a = document.querySelectorAll("img");
      (a[0].src = "/src/imgs/supreme.png"),
        (n[0].innerText = "Supreme"),
        (o[0].innerText = "Contains:"),
        (c[0].innerText =
          "tomato sauce, double salami, double mozzarella, parmesan"),
        (a[1].src = "/src/imgs/texas.png"),
        (n[1].innerText = "Texas"),
        (o[1].innerText = "Contains:"),
        (c[1].innerText =
          "barbecue sauce, beef, salami, onion, corn, bell pepper, mozzarella"),
        (a[2].src = "/src/imgs/sajtimado.png"),
        (n[2].innerText = "Cheese Lover"),
        (o[2].innerText = "Contains:"),
        (c[2].innerText =
          "cream cheese, bacon, chicken breast, cheddar, mozzarella"),
        (a[3].src = "/src/imgs/sonka-kukorica.png"),
        (n[3].innerText = "Ham and Corn"),
        (o[3].innerText = "Contains:"),
        (c[3].innerText = "tomato sauce, ham, sweet corn, mozzarella"),
        (a[4].src = "/src/imgs/dolce-vita.png"),
        (n[4].innerText = "Sweet Life"),
        (o[4].innerText = "Contains:"),
        (c[4].innerText = "omato sauce, ham, mushrooms, corn, mozzarella"),
        (a[5].src = "/src/imgs/bivaly.png"),
        (n[5].innerText = "Buffalo"),
        (o[5].innerText = "Contains:"),
        (c[5].innerText =
          "spicy tomato sauce, sausage, green pepper, jalapeno, mozzarella"),
        (a[6].src = "/src/imgs/fitness.png"),
        (n[6].innerText = "Fitness"),
        (o[6].innerText = "Contains:"),
        (c[6].innerText =
          "tomato sauce, corn, broccoli, bell pepper, feta cheese, mozzarella");
    })(),
    (function () {
      const e = document.getElementById("content"),
        t = document.createElement("div");
      t.setAttribute("id", "contact"),
        t.classList.add("contact-box"),
        e.appendChild(t);
    })(),
    (function () {
      const e = document.getElementById("content"),
        t = document.createElement("div");
      t.setAttribute("id", "promo");
      const n = document.createElement("h1");
      (n.innerText = "Current Promotions"),
        n.classList.add("promoH1"),
        e.appendChild(t),
        t.appendChild(n);
    })();
})();
