



  import { includeHTML } from "../js/include.js";

  
  
  
  // document.addEventListener('DOMContentLoaded', function(event) {
    window.onload = function() {
  includeHTML();




  
  
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




  // const cart__Btn = document.querySelector(".your-order");
  // const cart__Btn = document.getElementsByClassName("your-order");
  const cart__Btn = document.querySelector("#your-order");
  const cart__Btn__x = document.querySelector(".cart__Btn__x");
  const cart__wrap = document.querySelector(".cart__wrap");
  const cart__bg = document.querySelector(".cart__bg");
  const cart = document.querySelector(".cart");

  console.log(cart__Btn)


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












  // function check() {
  //   console.log('check')
  //   document.getElementsById("emailform").action = "https://script.google.com/macros/s/AKfycbz63eikvbkfNsGuioni8Hi9GwsKCzgqQ_hg8m0oWyY8plC6njMespU_JaxJ4VMWX12m/exec";
  //   var email = document.getElementById("emailform").value;
  //   if (email != "") {
  //       var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  //       if (exptext.test(email) == false) {
  //           //이메일 형식이 알파벳+숫자@알파벳+숫자.알파벳+숫자 형식이 아닐경우			
  //           alert("입력한 메일형식이 올바르지 않습니다.");
  //           document.formtag.email.focus();
  //           document.getElementById("emailform").action = " ";
  //       }
  //   }
  // }





    // $("#cf_onclick").click(function() {
    //   setTimeout(function() {
    //     $("#cf2 img.top").toggleClass("transparent");
    //   }, 1000);
    // });





 };
// });
