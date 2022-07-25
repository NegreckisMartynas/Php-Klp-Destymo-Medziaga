function sendRegistration(event) {
  if(!validateRegistrationFunctions(event.target)){
    event.preventDefault();
  }
  else {
    event.preventDefault();
    // send form to server
  }
}

function validateRegistration(form) {
  let result = true;
  if(form.elements.username.value.length < 5) {
    form.elements.username.classList.add('error')
    form.querySelector('#username-error').classList.remove('hidden')
    form.querySelector('#username-error').innerText
      = 'Username too short!';
    result = false;
  }
  const password = form.elements.password;
  const confirm = form.elements.confirm;
  if(password.value !== confirm.value) {
    form.elements.password.classList.add('error');
    form.elements.confirm.classList.add('error');
    form.querySelector('#password-error').classList.remove('hidden');
    form.querySelector('#password-error').innerText
        = 'Passwords don\'t match!';
    result = false;
  }
  result = emailIsValid(form.elements.email) && result;
  return result;
}

function emailIsValid(email) {
  //...
  return true; // jei teisingas
  // return false jei netiesingas
}

function validateRegistrationFunctions(form) {
  let result = true;
  result = validateUsername(form) && result;
  result = validatePassword(form) && result;
  result = emailIsValid(form.elements.email) && result;
  return result;
}

function validateUsername(form) {
  if(form.elements.username.value.length < 5) {
    form.elements.username.classList.add('error')
    form.querySelector('#username-error').classList.remove('hidden')
    form.querySelector('#username-error').innerText
      = 'Username too short!';
    return false;
  }
  return true;
}

function validatePassword(form) {
  const password = form.elements.password;
  const confirm = form.elements.confirm;
  if(password.value !== confirm.value) {
    form.elements.password.classList.add('error');
    form.elements.confirm.classList.add('error');
    form.querySelector('#password-error').classList.remove('hidden');
    form.querySelector('#password-error').innerText
        = 'Passwords don\'t match!';
    return false;
  }
  return true;
}
