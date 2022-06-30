import { includeHTML } from "../js/include.js";

document.addEventListener("DOMContentLoaded", function (event) {
  includeHTML();

  const scrollmark = document.querySelector(".scrollmark");
  const content1 = document.querySelector(".content1");
  scrollmark.addEventListener("click", function (e) {
    e.preventDefault();
    window.scroll(0, content1.clientHeight);
  });

  // FIXME: 띵똥위치랑 스톡갯수에 따라 innertext 1품절, 2이미장바구니, 3넣었습니다, 4마지막상품입니다.

  const slider = document.querySelector(".newArrivals");

  let isMouseDown = false;
  let startX, scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    // slider.classList.add('active');

    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseup", (e) => {
    isMouseDown = false;
    // slider.classList.remove('active');
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isMouseDown) return;

    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1;
    slider.scrollLeft = scrollLeft - walk;
  });

  const instabtn__right = document.querySelector(".instabtn__right");
  const instabtn__left = document.querySelector(".instabtn__left");
  const insta__feed = document.querySelector(".insta__feed");
  const insta__container = document.querySelector(".insta__container");
  let slideNum = 0;

  function oneSlide() {
    const insta__con = document.querySelectorAll(".insta__feed li");
    insta__feed.style.transform = `translateX(-${
      (insta__feed.offsetWidth / insta__con.length) * slideNum
    }px)`;
  }
  oneSlide();

  function specialSlide(event) {
    const insta__con = document.querySelectorAll(".insta__feed li");
    let slideEa = Math.round(
      insta__con.length /
        (insta__feed.getBoundingClientRect().width /
          insta__container.getBoundingClientRect().width)
    );
    console.log(slideEa);
    if (
      event.target.classList[1] == "fa-angle-right" &&
      slideNum < insta__con.length - slideEa
    ) {
      slideNum++;
      // slideNum = slideNum+5;
    } else if (event.target.classList[1] == "fa-angle-left" && slideNum > 0) {
      slideNum--;
      // slideNum = slideNum-5;
    }
    oneSlide();
  }

  instabtn__left.addEventListener("click", specialSlide);
  instabtn__right.addEventListener("click", specialSlide);
});
