function main() {
    console.log("loaded in main")
    var myform = document.getElementById("myform");
    myform.addEventListener("submit", validateform);
}

function validateform(e) {
    
    e.preventDefault();
   
    
    var formvalid =true
    var myform = document.getElementById("myform")
    if (myform.first_name.value ==""){
        formvalid = false
        document.getElementById("errorName").style.display= "block";
    }
    

    else{
        document.getElementById("errorName").style.display= "none";
    }
    if (myform.phone1.value ==""){
        formvalid = false
        document.getElementById("errorAge").style.display= "block";
    }
    else{
        document.getElementById("errorAge").style.display= "none";
    }
    if (myform.last_name.value ==""){
        formvalid = false
        document.getElementById("errorlocation").style.display= "block";
    }
    else{
        document.getElementById("errorlocation").style.display= "none";
    }
    if (myform.email.value ==""){
        formvalid = false
        document.getElementById("erroremail").style.display= "block";
    }
    else{
        document.getElementById("erroremail").style.display= "none";
    }
    if (myform.address_1.value ==""){
        formvalid = false
        document.getElementById("erroraddress").style.display= "block";
    }
    else{
        document.getElementById("erroraddress").style.display= "none";
    }
    console.log("validating from");
    if (myform.post_code.value ==""){
        formvalid = false
        document.getElementById("errorpostcode").style.display= "block";
    }
    else{
        document.getElementById("errorpostcode").style.display= "none";
    }
    if (myform.phone1.value ==""){
        formvalid = false
        document.getElementById("errorNumber").style.display= "block";
    }
    else{
        document.getElementById("errorNumber").style.display= "none";
    }
    event.preventDefault(event);
    

}