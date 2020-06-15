



function validate(){

    var name = document.form.name;
    var email = document.form.email;
    var phone = document.form.phone;
    var msg = document.form.msg;
  

    if (name.value.length <= 0){
        alert("Name is Required");
        name.focus();
        return false;
    } 

    if (email.value.length <= 0){
        alert("Email is Required");
        email.focus();
        return false;
    } 

    if (phone.value.length <= 0){
        alert("Phone is Required");
        phone.focus();
        return false;
    } 

    var x = document.form.phone.value;
    if (isNaN(x) ) {
        // text = "Please enter valid number";
        alert("Please enter valid number ");
        msg.focus();
        return false;
        
      }
   
    // document.getElementById("demo").innerHTML = text;
    

    if (msg.value.length <= 0){
        alert("Please enter some message ");
        msg.focus();
        return false;
    } 
    console.log(document.form.email.value);
    return false;
}