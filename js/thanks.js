
document.addEventListener('DOMContentLoaded', function(event) {


  const btn__x = document.querySelector(".btn__x")

  btn__x.addEventListener("click", () => {
    location.href="index.html"
  })


  


  function validEmail(obj){
    console.log('check2')
    if(validEmailCheck(obj)==false){
        alert('올바른 이메일 주소를 입력해주세요.')
        obj.value='';
        obj.focus();
        return false;
      }
}

function validEmailCheck(obj){
    var pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    console.log('check')

    return (obj.value.match(pattern)!=null)
}


  // document.getElementsById("emailform").action = "https://script.google.com/macros/s/AKfycbz63eikvbkfNsGuioni8Hi9GwsKCzgqQ_hg8m0oWyY8plC6njMespU_JaxJ4VMWX12m/exec";

  // function email_check() {
  //   let email = document.getElementById("emailform").value;
  //   let exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  //   return (email != '' && email != 'undefined' && exptext.test(email));
  // }

  //       if (exptext.test(email) == false) {
  //           console("틀렸어?")
  //           //이메일 형식이 알파벳+숫자@알파벳+숫자.알파벳+숫자 형식이 아닐경우			
  //           alert("입력한 메일형식이 올바르지 않습니다.");
  //           return false
  //           // document.formtag.email.focus();
  //           // document.getElementById("emailform").action = " ";



});