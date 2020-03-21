$(document).ready(function () {

  /* CLick BTN (Open and Close) */
  $('.button-nav--toggle').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('is-showNavMob');
  });
});


if('serviceWorker' in navigator){
  navigator.serviceWorker.register('./sw.js')
  .then(reg =>console.log('Registro de SW exitoso',reg))
  .catch(err=>console.warn('Error al Tratar de Registrar el SW',
  err))
}

$(document).ready(function() {
  $('#example').DataTable();
} );