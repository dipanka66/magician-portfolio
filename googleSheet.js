const scriptURL = 'https://script.google.com/macros/s/AKfycbyuc-_MXAgPuiAkZ9RCCMGLv__p8ED3kXkfkmOCdlJekKUCI8gLjgsRZUGihobt4F_r/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Your details has been successfully submitted. We will call you shortly. Thanks!" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
  document.getElementById("overlay").style.display = "none";
  document.getElementById("popup").style.display = "none";
})