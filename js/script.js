
var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var msgError  = document.getElementById('msg-error');
var subjError  = document.getElementById('subj-error');
var submitError = document.getElementById('submit-error');

$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbx1qhZCbXiFUQUG--hcJkQbzHVRP78QILpIZ82bklRKsqOIDe9imF6k57V-VcYUFjFlTA/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})

function validateName(){

  var nameField = document.getElementById('contact-name').value;

  if(nameField.length == 0){

      nameError.innerHTML="Name is required";

      return false;

  }

  if(!nameField.match(/^[A-Za-z]*\s{1}[A-Za-z]+$/) ){
      nameError.innerHTML="Write fullname";

      return false;
  }else{
      nameError.innerHTML='<i class="fa-solid fa-check"></i>';
      return true;
  
  }
  

}
function validateEmail(){

  var emailField = document.getElementById('contact-email').value;
  
  if(emailField.length==0)
  {
      emailError.innerHTML="Email is required";
      return false;
  }

 if(!emailField.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
  emailError.innerHTML="invalid email";
  return false;
}else{
  emailError.innerHTML='<i class="fa-solid fa-check"></i>';
  return true;
}
}
function validateSubject(){

  var subjField = document.getElementById('contact-subject').value;

  var required =30;

  var left = required- subjField.length;

  if(left > 0){
      subjError.innerHTML = left + 'more characters required';
  return false;
  }else{
      subjError.innerHTML ='<i class="fa-solid fa-check"></i>';
      return true;
  }
  

}
function validateMessage(){

  var msgField = document.getElementById('contact-message').value;

  var required =50;

  var left = required- msgField.length;

  if(left > 0){
      msgError.innerHTML = left + 'more characters required';
  return false;
  }else{
      msgError.innerHTML ='<i class="fa-solid fa-check"></i>';
      return true;
  }
  

}
function validateForm()
{
if(!validateName() || !validatePhone() || !validateEmail()||!validateMessage()){

    submitError.innerHTML="Please fix these error to sumbit ";
    return false;    
}

}