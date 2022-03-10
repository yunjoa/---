

document.addEventListener('DOMContentLoaded', function(event) {
  // window.onload = function() {

    const productListing = document.querySelector(".product-lis-wrap")

    
    function listing(){
      fetch("data/product.json")
        .then(res => res.json())
        .then(data => callback(data))

        function callback(data){
          
          data.items.forEach((item, index) => {
            const list = document.createElement("li");
            list.className = `item-con${index} item-con`;
            list.innerHTML +=
            `<div class="prod__img">
            <img src="src/${item.image[0]}" alt="">
            <div class="prod__icon">
            <i class="iconSound fas fa-volume"></i>
            <i class="fas fa-shopping-cart cart__icon" id="${index}"></i>
          </div>
        </div>
        <div class="prod__txt">
          ${item.name}
          <p class="prod__price">${item.price}₩</p>
        </div>`;
            productListing.appendChild(list);
            list.addEventListener("click", hoverCart)
          }) 
        }
    }
    window.addEventListener("load",listing)
    
    const btn_category = document.querySelector(".categories button")
    btn_category.addEventListener("click", function(){
      btn_category.classList.toggle("clicked")
    })


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
  





})  