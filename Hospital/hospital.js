let menu=document.querySelector('#menu-btn');
let navbar=document.querySelector('.navbar');

menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll=()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
function checkf(){
    var f=document.f1;
     var t1name=f.email;
     var s1=t1name.value;
     var p1=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     var t2name=f.number;
     var s2=t2name.value;
     var p2=/^\d{10}$/;
     var t3name=f.name;
     var s3=t3name.value;

    if(s1==""||s2==""||s3==""){
     alert("please fill required field")
    }else{
        if(p2.test(s2)==true){

        }else{
            alert("invalid number")
        }

     if(p1.test(s1)==true){

     }else{
         alert("invalid email")
     }
    }
 }
