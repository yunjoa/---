



const supahscroll = new SupahScroll({
  el: ".smoothscroll",
  speed: 0.1
});





function scrollDisable(){
  document.body.classList.add('hidden');
  document.body.addEventListener('scroll touchmove mousewheel', 
  function(e){
    e.preventDefault();
  });
}

function scrollAble(){
  document.body.classList.remove('hidden')
}




const cart__Btn = document.querySelector(".your-order");
const cart__Btn__x = document.querySelector(".cart__Btn__x");
const cart__wrap = document.querySelector(".cart__wrap");
const cart__bg = document.querySelector(".cart__bg");
const cart = document.querySelector(".cart");



const openCart = () => {
  cart__bg.classList.add('active');
  cart.classList.add('active');
  scrollDisable();
  
}

const closeCart = () => {
  cart__bg.classList.remove('active');
  cart.classList.remove('active');
  scrollAble();

}



cart__Btn.addEventListener("click", openCart);
cart__bg.addEventListener("click", closeCart);
cart__Btn__x.addEventListener("click", closeCart);





const hamburger__Btn = document.querySelector(".navbar__btn");
const hamburger__menu = document.querySelector(".hamburger__menu__bg");
const hamburger__Btn__x = document.querySelector(".hamburger__Btn__x");


const openMenu = () => {
  hamburger__menu.classList.add('active');
  scrollDisable();
}

const closeMenu = () => {
  hamburger__menu.classList.remove('active');
  scrollAble();
}

hamburger__Btn.addEventListener("click", openMenu);
hamburger__Btn__x.addEventListener("click", closeMenu);


const cart__total = document.querySelector(".cart__total")

cart__total.addEventListener("click", () => {
  location.href="cart.html"
})


var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
});







function check() {
  console.log('check')
  document.getElementsById("emailform").action = "https://script.google.com/macros/s/AKfycbz63eikvbkfNsGuioni8Hi9GwsKCzgqQ_hg8m0oWyY8plC6njMespU_JaxJ4VMWX12m/exec";
  var email = document.getElementById("emailform").value;
  if (email != "") {
      var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
      if (exptext.test(email) == false) {
          //이메일 형식이 알파벳+숫자@알파벳+숫자.알파벳+숫자 형식이 아닐경우			
          alert("입력한 메일형식이 올바르지 않습니다.");
          document.formtag.email.focus();
          document.getElementById("emailform").action = " ";
      }
  }
}



  const scrollmark = document.querySelector(".scrollmark")

  scrollmark.addEventListener('click', function(e) {
    e.preventDefault();
    window.scroll(0, 800);
  });

  function getElementOffset(element) {
    var de = document.documentElement;
    var box = element.getBoundingClientRect();
    var top = box.top + window.pageYOffset - de.clientTop;
    // var left = box.left + window.pageXOffset - de.clientLeft;
    // return { top: top, left: left };
    return { top: top };
  }