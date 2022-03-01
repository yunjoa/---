
  import { includeHTML } from "../js/include.js";

document.addEventListener('DOMContentLoaded', function (event) {
  includeHTML();

  const supahscroll = new SupahScroll({
    el: ".smoothscroll",
    speed: 0.1
  });


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
  }
  
  window.addEventListener('load', productListing);







  function getElementOffset(element) {
    var de = document.documentElement;
    var box = element.getBoundingClientRect();
    var top = box.top + window.pageYOffset - de.clientTop;
    // var left = box.left + window.pageXOffset - de.clientLeft;
    // return { top: top, left: left };
    return { top: top };
  }




  const scrollmark = document.querySelector(".scrollmark")
  const content1 = document.querySelector(".content1")
  scrollmark.addEventListener('click', function (e) {
    e.preventDefault();
    window.scroll(0, content1.clientHeight);
  });



  const iconSounds = document.querySelectorAll(".iconSound");

  iconSounds.forEach((item, i) => {
    item.addEventListener("click", function () {
      if (item.classList.contains("fa-volume")) {
        item.classList.replace("fa-volume", "fa-volume-slash")
      } else {
        item.classList.replace("fa-volume-slash", "fa-volume")
      }
    });
  });

  // for(let i=0; i<iconSounds.length; i++){
  //   iconSounds[i].addEventListener("click", function(){
  //     if(iconSounds[i].classList.contains("fa-volume")){
  //       iconSounds[i].classList.replace("fa-volume","fa-volume-slash")
  //     } else {
  //       iconSounds[i].classList.replace("fa-volume-slash","fa-volume")
  //     }
  //   });
  // };


  // });



    let cartItems;
    if (localStorage.cart === null || localStorage.cart === '' || localStorage.cart === undefined) {
      cartItems = [];
    } else {
      cartItems = localStorage.cart.split(',');
    }



    function hoverCart(e) {
      e.preventDefault();
      const productId = e.target.id;
      if (e.target.classList.contains("cart__icon")) {
        if (cartItems.includes(productId)) {
          cartItems = cartItems.filter(cartItem => cartItem !== productId);
          localStorage.setItem("cart", cartItems);
        } else {
          cartItems.push(productId);
          localStorage.setItem("cart", cartItems);
          cartNotification();
          inCart();
        }
      }
    }

    console.log(cartItems)



    const faker = document.querySelector(".faker")


    faker.addEventListener("click", cartNotification)

    function cartNotification() {
      console.log("띵똥")
      const cartAlert = document.querySelector(".cart-notification")
      cartAlert.classList.add("down");
      setTimeout(() => {
        cartAlert.classList.remove("down");
      }, 3000);
    }

    // FIXME: 띵똥위치랑 스톡갯수에 따라 innertext 1품절, 2이미장바구니, 3넣었습니다, 4마지막상품입니다.




    


  const slider = document.querySelector(".newArrivals")

  let isMouseDown = false;
  let startX, scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    // slider.classList.add('active');
    
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  
  slider.addEventListener('mouseup', (e) => {
    isMouseDown = false;
    // slider.classList.remove('active');
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;

    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1;
    slider.scrollLeft = scrollLeft - walk;
  });

});