var angle = 0;
function galleryspin(sign) { 
spinner = document.querySelector("#spinner");
if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
}


let signName = document.getElementById("sign-name");
let signMail = document.getElementById("sign-mail");
let signPass = document.getElementById("sign-pass");

let logMail = document.getElementById("login-mail");
let logPass = document.getElementById("login-pass");

let signBtn = document.getElementById("sign-btn");
let logBtn = document.getElementById("login-btn");


let users;
let uNames;


console.log(localStorage.getItem("users"));
if (localStorage.getItem("users") == null) {
  users = [];
} else {
  users = JSON.parse(localStorage.getItem("users"));
 
}


function addUser(){
  let user ={
    uName: signName.value,
    uEmail: signMail.value,
    uPassword: signPass.value,
  }
  
  if(validateName(signName.value)==true && nameChecker(signName.value)==false && validateEmail(signMail.value)==true && mailChecker(signMail.value)==false){
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    clearSignform();
    successful.classList.replace("d-none", "d-flex");
    refused.classList.replace("d-flex", "d-none")
    console.log("added");
    console.log(users)
  }else{
    console.log("error");
    refused.classList.replace("d-none", "d-flex")
    successful.classList.replace("d-flex", "d-none");
  }
  
}


function validateName(){
  let regex = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
  if (regex.test(signName.value)) {
    signName.style = "border:3px solid green";
    return true;
  } else {
    signName.style = "border:3px solid red";
    return false;
  }
}

function validateEmail(){
  let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(signMail.value)) {
    signMail.style = "border:3px solid green";
    return true;
  } else {
    signMail.style = "border:3px solid red";
    return false;
  }
}

function nameChecker(name) {
    var existed = false;
    for (var i = 0; i < users.length; i++) {
      if (name == users[i].uName) {
        existed = true;
        break;
      } else {
        existed = false;
      }
    }
    return existed;
  }
  function mailChecker(signMail) {
    var existed = false;
    for (var i = 0; i < users.length; i++) {
      if (signMail == users[i].uEmail) {
        existed = true;
        break;
      } else {
        existed = false;
      }
    }
    console.log(existed);
    return existed;
  }

  function clearSignform() {
      signName.value = "";
      signMail.value = "";
      signPass.value = "";
    }

  //document.getElementById("welcomeName").innerHTML = "<span>Welcome </span>"+ users[1].uName;
  
  function isExisted(logMail,logPass){
    let uexisted = false;
    for(let i = 0 ; i<users.length; i++){
      if(logMail.value==users[i].uEmail && logPass.value==users[i].uPassword){
        

        uexisted = true;
        break;
        
      }else{
        uexisted =false;
        
      }
    }
    return uexisted;

  }

 
  
  
  function login(){
    if(isExisted(logMail,logPass)==true){
      window.open("index.html");
    
    }else{
      logError.classList.replace("d-none","d-flex");
    }


  }

  