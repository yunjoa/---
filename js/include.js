



export function includeHTML(){
  const includeArea = document.querySelectorAll('[data-include]');
  for(let dom of includeArea){
      const url = dom.dataset.include;
      fetch(url)
      .then(response => response.text())
      .then(data =>{
          dom.innerHTML = data;
          dom.removeAttribute('data-include');

                

  
  // const supahscroll = new SupahScroll({
  //   el: ".smoothscroll",
  //   speed: 0.1
  // });
  
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

  const cart__Btn = document.querySelector("#your-order");
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
    location.href="thanks.html"
  })





  let cartItems;
  function test(){
    if (localStorage.cart === null || localStorage.cart === '' || localStorage.cart === undefined) {
      cartItems = [];
    } else {
      console.log(cartItems)
      console.log(localStorage.cart)
      cartItems = localStorage.cart.split(',');
      console.log(localStorage.cart)
      console.log(cartItems)
    }
  }test();








  const productList = document.querySelector(".newArrivals")
  function productListing() {
    fetch("data/product.json")
      .then(res => res.json())
      .then(data => callback(data));

    function callback(data) {
      // list
      data.items.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = `item-con${index} item-con`;
        li.innerHTML +=
          `<div class="prod__img">
          <img src="src/${item.image[0]}" alt="">
          <div class="prod__icon">
            <i class="iconSound fas fa-volume"></i>
            <i class="fas fa-shopping-cart cart__icon" id="${index}"></i>
          </div>
        </div>
        <div class="prod__txt">
          ${item.name}
          <p class="prod__price">${item.price}</p>
        </div>`;
        productList.appendChild(li);
        li.addEventListener("click", hoverCart)
      })
    }
    cartCount();
  }
  
  window.addEventListener('load', productListing);

  // div.addEventListener("click", event => showProduct(data.item[j+i].name, data.item[j+i].detail, data.item[j+i].price, data.item[j+i].price, data.item[j+i].image, data.item[j+i].secondimage, data.item[j+i].thirdimage, j+i));
  // categoryCons.appendChild(div);


  function hoverCart(e) {
    e.preventDefault();
    const productId = e.target.id;
    if (e.target.classList.contains("cart__icon")) {
      if (cartItems.includes(productId)) {
        // 삭제
        cartItems = cartItems.filter(cartItem => cartItem !== productId);
        localStorage.setItem("cart", cartItems);
      } else {
        cartItems.push(productId);
        // 저장
        localStorage.setItem("cart", cartItems);
        cartNotification(e);
      }
    }
  }



  




// 금액 관련
const totalPrice = document.querySelector(".cart__total__price span");
const cartMain = document.querySelector(".cart__main")


//  장바구니 JSON
function inCart(){
    fetch('data/product.json')
    .then(res => res.json())
    .then(data => callback(data));

    function callback(data){
        cartMain.innerHTML = '';
        if(localStorage.cart === null || localStorage.cart === '' || localStorage.cart === undefined){
            const div = document.createElement("div");
            div.innerHTML = 
            `<div>
            장바구니에 담긴 상품이 없습니다.
            </div>
            `;
            cartMain.appendChild(div);
        } else {
            let totalMoney = 0;
            // totalMoney += parseInt(data.items[cartItem].price.replace(/,/g,""));
            cartItems.forEach((cartItem, index) => {
            const div = document.createElement("div");
            div.innerHTML = 
            `<div class="cart__item" id="${cartItem}">
            <div class="cart__img">
              <img src="src/${data.items[cartItem].image[0]}" alt="">
            </div>
            <div class="cart__item__txt">
              <p class="cart__item-name">${data.items[cartItem].name}</p>
              <p class="cart__item-price">${data.items[cartItem].price}₩</p>
              <hr>
              <div class="cart__item__form">
                <input type="number" class="cart__item__form__qty" >
                <a id="${cartItem}">Remove</a>
              </div>
            </div>
          </div>
          <hr>
          `;
            cartMain.appendChild(div);
            totalPrice.innerText = totalMoney.toLocaleString();
            div.addEventListener("click", scdClickOption);
            })
        }
    }



}
window.addEventListener('load', inCart);


const cartedItemQutys = document.querySelectorAll(".item__quty")
function cartCount() {
  cartedItemQutys.forEach(cartedItemQuty => {
    cartedItemQuty.innerText = cartItems.length;
  });
}




function cartNotification(e) {
  
  fetch("data/product.json")
  .then(res => res.json())
  .then(data => callback(data));

  function callback(data) {
    const cartAlert = document.querySelector(".cart-notification")
    data.items.forEach((item, index) => {
      if(e.target.id == index){
          cartAlert.innerText = `${item.name} – added to Your Order`
        } 
    })
    inCart();
    cartAlert.classList.add("down");
    setTimeout(() => {
      cartAlert.classList.remove("down");
    }, 1200);
  }
}




// 장바구니 상품 옵션
function scdClickOption(e){
  if(e.target.innerText == "Remove"){
    this.remove();
    cartItems = cartItems.filter(cartItem => cartItem !== e.target.id);
    localStorage.setItem("cart", cartItems);
    // cartMain.innerHTML = '';
    cartCount();
  }
}



const inputQutys = document.querySelectorAll(".cart__item__form input")

  inputQutys.forEach(inputQuty => {
    inputQuty.addEventListener("change", function(){
      console.log("숫자")
    })
  });


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


      });
  }//for
  return
}//includeHTML

