



function validate(){


    var name = document.form.name;
    var email = document.form.email;
    var phone = document.form.phone;
    var msg = document.form.msg;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.value.length <= 0){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }

    if (email.value.length <= 0){
        text = "Email is Required";
        error_message.innerHTML = text;
        return false;
    } 

    if(isNaN(phone.value) || phone.value.length != 10){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    
    if(msg.value.length <= 10){
      text = "Please Enter More Than 10 Characters";
      error_message.innerHTML = text;
      return false;
    }
    // alert("Form Submitted Successfully!");
    // window.location.assign("sample.html")
    // setTimeout("location.href = 'https://www.tutorialspoint.com/javascript/javascript_page_redirect.htm';",5000);
    
    setTimeout(function() {window.location = "thankyou.html" });

    return true;
  }