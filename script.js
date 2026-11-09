// Footer year
var yr = document.getElementById('yr');
if (yr) yr.textContent = new Date().getFullYear();

// Contact form: opens the visitor's email app with the message filled in.
var cf = document.getElementById('contact-form');
if (cf) cf.addEventListener('submit', function (e) {
  e.preventDefault();
  var f = e.target;
  var body = 'Name: ' + f.name.value + '\nOrganization: ' + f.org.value + '\nEmail: ' + f.email.value + '\n\n' + f.msg.value;
  window.location.href = 'mailto:info@impacthiveafrica.com?subject=' +
    encodeURIComponent('Website enquiry from ' + f.name.value) + '&body=' + encodeURIComponent(body);
});

// Newsletter form: opens an email asking to be subscribed.
// TO COLLECT SUBSCRIBERS AUTOMATICALLY: replace this handler by giving the <form> an
// action URL from Mailchimp, Brevo, MailerLite or Formspree (see their "embedded form" settings).
document.querySelectorAll('.nl-form').forEach(function (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var email = form.querySelector('input[type=email]').value;
    window.location.href = 'mailto:info@impacthiveafrica.com?subject=' +
      encodeURIComponent('Newsletter subscription') + '&body=' +
      encodeURIComponent('Please add me to the Impact Hive Africa newsletter.\n\nEmail: ' + email);
  });
});

// Close mobile menu after tapping a link
document.querySelectorAll('nav a').forEach(function (a) {
  a.addEventListener('click', function () { document.getElementById('menu-toggle').checked = false; });
});
