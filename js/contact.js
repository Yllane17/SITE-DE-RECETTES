const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const nom = document.getElementById('nom').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  console.log(`Nom : ${nom}, Email : ${email}, Message : ${message}`);
  alert('Message envoyé !');
  contactForm.reset();
});