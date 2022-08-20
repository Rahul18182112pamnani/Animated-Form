function animatedForm() {
  const arrows = document.querySelectorAll('.fa-arrow-down');

  arrows.forEach(arrow => {

    arrow.addEventListener('click', () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;

      // check for validation
      if (input.type === 'text' && validateUser(input)) {
        nextSlide(parent, nextForm)
      } else if (input.type === 'email' && validateEmail(input)) {
        nextSlide(parent, nextForm)
      } else if (input.type === 'password' && validateUser(input)) {
        nextSlide(parent, nextForm)
      } else {
        parent.style.animation = "shake 0.5s ease";
      }
    });
  });
}

function validateUser(user) {
  if (user.value.length < 6) {
    error(`rgb(189,87,87)`);
    user.value = '';
  } else {
    document.body.style.backgroundColor = `rgb(60, 196, 130)`;
    return true;
  }
}

function validateEmail(email) {
  const validation = /^[^\$@]+@[^\$@]+[^\$@]+$/;
  if (validation.test(email.value)) {
    document.body.style.backgroundColor = `rgb(60, 196, 130)`;
    email.value = ''
    return true;
  } else {
    error(`rgb(189,87,87)`);
  }
}

function nextSlide(parent, nextForm) {
  parent.classList.add('inactive');
  parent.classList.remove('active');
  nextForm.classList.add('active')
}

function error(color) {
  document.body.style.backgroundColor = color;
  const alert = document.querySelector('.alert')
  alert.classList.add('show-alert')
  setTimeout(() => {
    alert.classList.remove('show-alert')
  }, 2000)


}

animatedForm();