var des=document.querySelectorAll('.des-list');
var chk=document.querySelectorAll('.check-box');
var time=document.querySelectorAll('.time');

function myFun(){
    for(let i=0;i<chk.length;i++){
        if(chk[i].checked==true){
            des[i].style.textDecoration="line-through";
            time[i].style.textDecoration="line-through";
        }
        else{
            des[i].style.textDecoration="none";
            time[i].style.textDecoration="none";
        }
    }
}






