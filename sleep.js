function register(){
var1 = document.getElementById("pass").value;
var2 = document.getElementById("repass").value;
if (var1 === var2) {
 document.getElementById("message").innerHTML="password matches";
} else {
   alert("PASSWORDS AND CONFIRM PASSWORD DOESNOT MATCHED")
}
}