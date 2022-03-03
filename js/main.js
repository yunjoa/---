
  import { includeHTML } from "../js/include.js";

document.addEventListener('DOMContentLoaded', function (event) {
  includeHTML();





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