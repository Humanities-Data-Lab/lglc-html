/**
 * LGLC Contact Form
 * Builds a mailto: URL from the form fields and opens the user's email client.
 * No data is sent from the page — the user's email app is responsible for delivery.
 */
(function () {
  'use strict';

  const form = document.getElementById('contact-form');
  if (!form) return;

  const DEFAULT_RECIPIENT = 'michelle.schwartz@torontomu.ca';

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const recipient = form.dataset.recipient || DEFAULT_RECIPIENT;
    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const topic = form.elements['topic'].value.trim();
    const message = form.elements['message'].value.trim();

    const subject = topic ? '[LGLC] ' + topic : '[LGLC] Message from the site';
    const body = [
      'Name: ' + name,
      'Email: ' + email,
      'Topic: ' + topic,
      '',
      message,
    ].join('\r\n');

    const mailto =
      'mailto:' + encodeURIComponent(recipient) +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);

    window.location.href = mailto;
  });
})();
