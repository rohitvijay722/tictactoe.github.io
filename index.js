let count=1;
function callMe(input){


let strr="";
if(count%2==1)strr="X";
else strr="O";

document.getElementById(input).innerText=strr;
document.getElementById(input).disabled=true;

let a=document.getElementById("one").innerText;
let b=document.getElementById("two").innerText;
let c=document.getElementById("three").innerText;
let d=document.getElementById("four").innerText;
let e=document.getElementById("five").innerText;
let f=document.getElementById("six").innerText;
let g=document.getElementById("seven").innerText;
let h=document.getElementById("eight").innerText;
let i=document.getElementById("nine").innerText;


if(check(a,b,c,d,e,f,g,h,i)==true){
document.getElementById("res").innerText=strr+" Wins Hurray!!";
document.getElementById("one").disabled=true;
document.getElementById("two").disabled=true;
document.getElementById("three").disabled=true;
document.getElementById("four").disabled=true;
document.getElementById("five").disabled=true;
document.getElementById("six").disabled=true;
document.getElementById("seven").disabled=true;
document.getElementById("eight").disabled=true;
document.getElementById("nine").disabled=true;
}
count+=1;
}

//for checking
function check(a,b,c,d,e,f,g,h,i){
if(a==b&&b==c&&a!=""){return true;}
else if(a==e&&e==i&&a!=""){return true;}
else if(a==d&&d==g&&a!=""){return true;}
else if(b==e&&e==h&&b!=""){return true;}
else if(c==f&&f==i&&c!=""){return true;}
else if(c==e&&e==g&&c!=""){return true;}
else if(d==e&&e==f&&d!=""){return true;}
else if(g==h&&h==i&&g!=""){return true;}
return false;
}

