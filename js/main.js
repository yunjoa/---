
const cart__Btn = document.querySelector(".your-order");
const cart__Btn__x = document.querySelector(".cart__Btn__x");
const cart__wrap = document.querySelector(".cart__wrap");
const cart__bg = document.querySelector(".cart__bg");
const cart = document.querySelector(".cart");



const openCart = () => {
  cart__wrap.classList.add('active');
  cart.classList.add('active');
  // cart.addEventListener('scroll touchmove mousewheel', function(event) {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   return false;
  // });
}

const closeCart = () => {
  cart__wrap.classList.remove('active');
  cart.classList.remove('active');
  // cart.addEventListener('scroll touchmove mousewheel');

}



cart__Btn.addEventListener("click", openCart);
cart__bg.addEventListener("click", closeCart);
cart__Btn__x.addEventListener("click", closeCart);






const hamburger__toggleBtn = document.querySelector(".navbar__btn");
const hamburger__menu = document.querySelector(".hamburger__menu__bg");

hamburger__toggleBtn.addEventListener("click", () => {
  hamburger__menu.classList.toggle('active');
  hamburger__toggleBtn.classList.toggle('toggleBtn-color');
});






const cart__total = document.querySelector(".cart__total")

cart__total.addEventListener("click", () => {
  location.href="cart.html"
})