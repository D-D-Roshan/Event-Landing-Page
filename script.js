// const scriptURL = 'https://script.google.com/macros/s/AKfycby_HMUPVzJNFoi5H-PGZ8JORsiSekH-uTFPvPrWVgFmGaOvNb9t_3bfeTnF821Tn7nPaA/exec'
// const form = document.forms['registration-form']

// form.addEventListener('submit', e => {
//   e.preventDefault()
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//     .then(response => alert('Success!', response))
//     .catch(error => alert('Error!', error.message))
//     setTimeout(() => {
//         form.reset();
//       }, 5000);
//     })

const scriptURL = 'https://script.google.com/macros/s/AKfycby_HMUPVzJNFoi5H-PGZ8JORsiSekH-uTFPvPrWVgFmGaOvNb9t_3bfeTnF821Tn7nPaA/exec';
const form = document.forms['registration-form'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => alert('Success!'))
    .catch(error => alert('Error!', error.message));

  setTimeout(() => {
    form.reset();
  }, 5000);
});
