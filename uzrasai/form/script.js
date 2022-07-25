function sendRegistration(event) {
  if(!validateRegistration(event.target)){
    event.preventDefault();
  }
  else {
    event.preventDefault();
    // send form to server
  }
}

function validateRegistration(form) {
  if(form.elements.username.value.length < 5) {
    form.elements.username.classList.add('error')
    form.querySelector('#username-error').classList.remove('hidden')
    form.querySelector('#username-error').innerText
      = 'Username too short!';
    return false;
  }
  const password = form.elements.password;
  const confirm = form.elements.confirm;
  console.log(password.value, confirm.value);
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
