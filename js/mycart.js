



// cart

let cartItems;
if (localStorage.cart === null || localStorage.cart === '' || localStorage.cart === undefined) {
  cartItems = [];
} else {
  cartItems = localStorage.cart.split(',');
}


// let cartItems;
// if (localStorage.cart === null || localStorage.cart === '' || localStorage.cart === undefined) {
//   cartItems = [];
// } else {
//   cartItems = localStorage.cart.split(',');
// }

console.log(cartItems)
// if (localStorage.cart === null || localStorage.cart === '' || localStorage.cart === undefined) {
//     cartItems = [];
// } else {
//     cartItems = localStorage.getItem("cart").split(",").map(Number);
// }





// 좋아요한 상품 카트넣기, 삭제
// function clickOption(e) {
//     console.log()
//     if (e.target.innerText === "delete") {
//         this.remove();
//         likedItems = likedItems.filter(likedItem => likedItem !== parseInt(e.target.id));
//         localStorage.setItem("liked", likedItems);
//         likedTbody.innerHTML = '';
//         inLiked();
//     } else if (e.target.innerText === "add_shopping_cart") {
//         if (cartItems.includes(parseInt(e.target.id))) {
//             e.target.parentElement.nextSibling.innerHTML = "이미<br>있어요!";
//         } else {
//             cartItems.push(parseInt(e.target.id));
//             localStorage.cart = cartItems;
//         }
//         putinCart();
//     }
// }


// window.addEventListener('load', productListing);


// 장바구니 상품 옵션
// function scdClickOption(e) {
//     if (e.target.innerText === "delete") {
//         this.remove();
//         cartItems = cartItems.filter(cartItem => cartItem !== parseInt(e.target.id));
//         localStorage.setItem("cart", cartItems);
//         cartTbody.innerHTML = '';
//         putinCart();
//     }
// }

