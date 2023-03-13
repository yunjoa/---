import { includeHTML } from "../js/include.js";

document.addEventListener("DOMContentLoaded", function (event) {
  // window.onload = function() {

  includeHTML();
  const productListing = document.querySelector(".product-lis-wrap");

  function categoryChange() {
    fetch("data/product.json")
      .then((res) => res.json())
      .then((data) => callback(data));
  }
  window.addEventListener("load", categoryChange);

  function callback(data) {
    const btn_category = document.querySelectorAll(".categories button");

    btn_category.forEach((category) => {
      category.addEventListener("click", () => {
        let tag = "";
        tag = category.dataset.type;
        // console.log("clicked");
        console.log(tag);

        data.items.forEach((item, i) => {
          const products = document.querySelectorAll(".item-con");
          // console.log(item.tag);
          if (item.tag.includes(tag)) {
            products[i].classList.remove("invisible");
          } else {
            products[i].classList.add("invisible");
          }
        });
      });
    });
  }

  function listing() {
    fetch("data/product.json")
      .then((res) => res.json())
      .then((data) => callback(data));

    function callback(data) {
      data.items.forEach((item, index) => {
        const list = document.createElement("li");
        list.className = `item-con${index} item-con`;
        list.innerHTML += `<div class="prod__img">
            <img src="src/${item.image[0]}" alt="">
            <div class="prod__icon">
            <i class="iconSound fas fa-volume id="audio${index}"></i>
            <i class="fas fa-shopping-cart cart__icon" id="${index}"></i>
          </div>
        </div>
        <div class="prod__txt">
          ${item.name}
          <p class="prod__price">${item.price}₩</p>
        </div>`;
        productListing.appendChild(list);
        list.addEventListener("click", hoverCart);
      });
    }
  }
  window.addEventListener("load", listing);

  const checkBtns = document.querySelectorAll(".categories button");
  checkBtns.forEach((btn) => {
    btn.addEventListener("click", checkOneBtn);
  });

  function checkOneBtn(e) {
    checkBtns.forEach((btn) => {
      btn.classList.remove("clicked");
    });
    e.target.classList.add("clicked");
  }

  function hoverCart(e) {
    e.preventDefault();
    const productId = e.target.id;
    if (e.target.classList.contains("cart__icon")) {
      if (cartItems.includes(productId)) {
        // 삭제
        cartItems = cartItems.filter((cartItem) => cartItem !== productId);
        localStorage.setItem("cart", cartItems);
      } else {
        cartItems.push(productId);
        // 저장
        localStorage.setItem("cart", cartItems);
        cartNotification(e);
      }
    }
  }
});
