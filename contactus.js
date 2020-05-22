
function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 5){
      text = "I'm sorry, we got it wrong, try again?";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 10){
      text = "I think you typed wrong, try again?";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "That's not a valid number, try again?";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Oops.. not your email, type again";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 140){
      text = "The more, the better. Please more than 140 characters so we know what you need";
      error_message.innerHTML = text;
      return false;
    }
    alert("Yes! We've got it!");
    return true;
  }

var contactUsPage = `

<div class="wrapper">
  <h2>Contact us</h2>
  <div id="error_message">
     
  </div>
  <form action="" id="myform" onsubmit = "return validate();">
    <div class="input_field">
        <input type="text" placeholder="Name" id="name">
    </div>
    <div class="input_field">
        <input type="text" placeholder="Subject" id="subject">
    </div>
    <div class="input_field">
        <input type="text" placeholder="Phone" id="phone">
    </div>
    <div class="input_field">
        <input type="text" placeholder="Email" id="email">
    </div>
    <div class="input_field">
        <textarea placeholder="Message" id="message"></textarea>
    </div>
    <div class="btn">
        <input type="submit">
    </div>
  </form>
</div>  

`
 