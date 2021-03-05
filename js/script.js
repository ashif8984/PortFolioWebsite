



  $(".form-signin").submit(function(event){
     $(".news-btn").css("background-color","grey").text("Subscribed");
     $( "#isSubscribed" ).text( "Thank You signing up 😊. Stay Tuned!!" ).show();
     event.preventDefault();
  });

  // $(".contactForm").submit(function( event ) {

  //   if ( $( "#name" ).val().length <= 0 ) {
  //       // $( "#error_message" ).text( "Please Enter valid Name" );
  //       $('#name').before('<span class="error_message">❌ Please Enter valid Name</span>');
  //     return false;
  //     event.preventDefault();
     
  //   } else{

  //   }
    


  //   if ( $( "#email" ).val().length <= 0 ) {
  //     // $( "#error_message" ).text( "Email is required" );
  //       // $( "#email" ).attr( "placeholder", " ❌ Email is required" );

  //       $('#email').before('<span class="error_message">❌ Email is required</span>');

  //      return false;
  //      event.preventDefault();
  // }

  // //   if (!$('#email').val()) 
  // //   // $('#email').parent().append('<span class="error">Email is required</span>');

  // //   $("#email").parent().after("<div class='validation' style='color:red;'>Please enter email address</div>");


  // }
  // );

  

  $(document).ready(function() {
    $('.contactForm').submit( function(e){
      e.preventDefault();
      $(".error_message").remove();

      var checkValidate = false;




      if ($( "#name" ).val().length  < 1) {
        $('#name').before('<span class="error_message">This field is required</span>');
        return false;
      }

      if ($( "#email" ).val().length  < 1) {
        $('#email').before('<span class="error_message">This field is required</span>');
        return false;
      }

      if ($( "#phone" ).val().length  < 10  || isNaN($( "#phone" ).val()) ) {
        $('#phone').before('<span class="error_message">Enter Valid Phone Number</span>');
        return false;
      }

      if ($( "#msg" ).val().length  < 10) {
        $('#msg').before('<span class="error_message">Please Enter More Than 10 Characters</span>');
        return false;
      }


      
      window.location.href = 'thankyou.html';
      return true;

    })
  })

function validate(){

    var name = document.form.name;
    var email = document.form.email;
    var phone = document.form.phone;
    var msg = document.form.msg;
    var error_message = document.getElementById("error_message");
    
    // error_message.style.padding = "2px";
    
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
  
    setTimeout(function() {window.location = "thankyou.html" });

    return true;
  }