const btn = document.querySelector(".arrow")
const input = document.querySelector(".input input")
const hidden = document.querySelector(".hidden")
const error = document.querySelector(".error")

function validEmail(){
   if (input.value===""){
    hidden.classList.add("show")
    error.classList.add("show")
   }

 
  }

input.addEventListener("focus",function(){

 
  setInterval(validEmail,800)
 }
)  

btn.addEventListener("click",function(){
 
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

if(input.value.match(validRegex)){
 hidden.classList.add("show")
 error.classList.add("show")
 input.value=""
}
else{
 hidden.classList.remove("show")
 error.classList.remove("show")
}


})
// setInterval(validEmail,500)