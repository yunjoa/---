

// cart
let cartItems;

if (localStorage.cart === null || localStorage.cart === '' || localStorage.cart === undefined) {
    cartItems = [];
} else {
    cartItems = localStorage.getItem("cart").split(",").map(Number);
    console.log(cartItems)
}



// 좋아요한 상품 카트넣기, 삭제
function clickOption(e) {
    if (e.target.innerText === "delete") {
        this.remove();
        likedItems = likedItems.filter(likedItem => likedItem !== parseInt(e.target.id));
        localStorage.setItem("liked", likedItems);
        likedTbody.innerHTML = '';
        inLiked();
    } else if (e.target.innerText === "add_shopping_cart") {
        if (cartItems.includes(parseInt(e.target.id))) {
            e.target.parentElement.nextSibling.innerHTML = "이미<br>있어요!";
        } else {
            cartItems.push(parseInt(e.target.id));
            localStorage.cart = cartItems;
        }
        putinCart();
    }
}


window.addEventListener('load', productListing);


// 장바구니 상품 옵션
function scdClickOption(e) {
    if (e.target.innerText === "delete") {
        this.remove();
        cartItems = cartItems.filter(cartItem => cartItem !== parseInt(e.target.id));
        localStorage.setItem("cart", cartItems);
        cartTbody.innerHTML = '';
        putinCart();
    }
}


// 금액 관련
const totalPrice = document.querySelector(".cart__total__price");
const totalPlus = document.querySelector(".total-money2");
const cartMain = document.querySelector(".cart__main")
//  장바구니 JSON
function putinCart() {
    fetch("data/product.json")
        .then(res => res.json())
        .then(data => callback(data));

    function callback(data) {
        cartTbody.innerHTML = '';
        if (localStorage.cart === null || localStorage.cart === '' || localStorage.cart === undefined) {
            const div = document.createElement("div");
            div.innerHTML =
                `
            장바구니에 담긴 상품이 없습니다.
            쇼핑하러가기로 꾸미기
            `;
            cartMain.appendChild(div);
        } else {
            let totalMoney = 0;
            cartItems.forEach((cartItem, index) => {
                const div = document.createElement("div");
                totalMoney += parseInt(data.item[cartItem].price.replace(/,/g, ""));
                div.innerHTML =
                    `머가들어있어!!!!`;
                cartMain.appendChild(tr);
                div.addEventListener("click", scdClickOption);
            })
            total.innerText = totalMoney.toLocaleString();
            totalPlus.innerText = (totalMoney + 3000).toLocaleString();
        }
    }
}
window.addEventListener('load', putinCart);

