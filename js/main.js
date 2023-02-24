 
let fname = document.getElementById("fname");
let fNameMessg = document.getElementById("fNameMessg");
// let fMessg;
let mail = document.getElementById("mail");
let emailMessg = document.getElementById("emailMessg");
// let mailMessg;
let sub = document.getElementById("sub");
let subjMessg = document.getElementById("subjMessg");
// let subMessg;
let messg = document.getElementById("messg");
let messgSpan = document.getElementById("messgSpan");
// let message;
let btn=document.getElementById("submit");
function validateName(){
    if(fname.value.trim()==""){
    
        fname.style.border="2px solid red";
         
        fNameMessg.textContent="Enter your Full Name";
        return false;
    }else{
        fname.style.border="none";
        fNameMessg.textContent="";
        return true;
    }
}
function validateMail(){
    if(mail.value.trim()==""){
        
        mail.style.border="2px solid red";
        emailMessg.textContent="Enter your mail";
        return false
        
    }
    else if(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(mail.value)==false){
        
        mail.style.border="2px solid red";
        emailMessg.textContent="Not a valid mail friend!!!"
        return false;
    }else{
        mail.style.border="none";
        emailMessg.textContent="";
        return true;
    }
}
function validateSub(){
    if(sub.value.trim()==""){
   
        sub.style.border="2px solid red";
        subjMessg.textContent="Enter a Subject Ya HaBIBI!";
        return false;
    }else{
        sub.style.border="none";
        subjMessg.textContent="";
        return true;
    }
}
function validateMessg(){
    if(messg.value.trim()==""){
     
        messg.style.border="4px solid red";
        messgSpan.textContent="Come on My friend.Type out the message!";
        return false;
    }else{
        messg.style.border="none";
        messgSpan.textContent="";
        return true;
    }
}
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("start");
    if(!validateMail() || !validateMessg() || !validateName() || !validateSub()){
        alert("Fix the Errors Habibi");
        console.log("if");
        
    }else{
        alert(`FullName:${fname.value}\nEmail ID:${mail.value}\nSubject:${sub.value}\nMessage:${messg.value.trim()}`);
      
    }
    
    
    
    // alert(fname.value);
    
})
// function validate(){
    
    // if(fname.ariaValueMax.trim()==" "){
    //     alert("full name is empty");
    // }
// }
