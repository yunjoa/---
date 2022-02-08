var myPopup = document.querySelector(".popup"),
        checkbox = document.querySelector(".popupCheck"),
        popupClose = document.querySelector(".btn_close");




    // 쿠키 셋팅
    function setCookie(name, value, sec){
        var date = new Date(); //현재날짜지정
        date.setSeconds(date.getSeconds() + sec);
        
        var mycookie = '';
        mycookie += name + '=' + value + ';'
        mycookie += 'Expires=' + date.toUTCString();

        document.cookie = mycookie;
    }
    // setCookie('stranger','Main',30)


    //쿠키 확인
    console.log(document.cookie)


    // 특정문자를 기준으로 배열 생성
    // a.split('/') 하나의 문자열 / 구분 배열로 생성
    // a.join('/') 배열의 값을 /로 묶어서 하나의 문자열

    // a.indexOf('b') 인덱스 값을 알려준다 없으면 -1로 나온다.
    // a.search('b')

    function checkCookie(name){
        var cookies = document.cookie.split(';');
        console.log(cookies);

        var visited = false; //방문 거짓


        for(var i in cookies){
            if(cookies[i].indexOf(name) > -1){
                visited = true;
                
            }
        }
        if(visited){
            //재방문
            myPopup.style.display = "none";
        }else{
            //신규방문
            myPopup.style.display = "block";

        }


    }
    checkCookie('stranger');


    popupClose.addEventListener('click', function(){
        //a.checked true / flase
        if(checkbox.checked){
            //팝업을 다시 안보겠다 팝업 닫고 쿠키 생성
            setCookie('stranger','Main',5);
            myPopup.style.display="none";
        } else {
            //팝업을 계속 본다. 팝업 닫고, 쿠키제거.
            myPopup.style.display="none";
            delCookie('stranger')
        }
    })


    //쿠키삭제


    function delCookie(name){
        var date = new Date();

        date.setDate(date.getDate()-1)
  
        var setCookie = '';
        setCookie += name + '=Main;';
        setCookie += 'Expires=' + date.toUTCString();
    
        document.cookie = setCookie;
    }