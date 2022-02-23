


  const supahscroll = new SupahScroll({
    el: ".smoothscroll",
    speed: 0.1
  });



  

  const faker = document.querySelector(".faker")
  const cartAlert = document.querySelector(".cart-notification")


  faker.addEventListener("click", () =>{
    cartAlert.classList.add("active");
    setTimeout( () => {
      cartAlert.classList.remove("active");
    }, 3000);  
  });

  

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
    scrollmark.addEventListener('click', function(e) {
      e.preventDefault();
      window.scroll(0, content1.clientHeight);
    });



    const iconSounds = document.querySelectorAll(".iconSound");

  iconSounds.forEach((item, i) => {
    item.addEventListener("click", function(){
      if(item.classList.contains("fa-volume")){
        item.classList.replace("fa-volume","fa-volume-slash")
      } else {
        item.classList.replace("fa-volume-slash","fa-volume")
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

