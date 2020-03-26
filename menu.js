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


function MostrarA(){
  document.getElementById('Grupo_D').style.display="none";
  document.getElementById('Grupo_C').style.display="none";
  document.getElementById('Grupo_B').style.display="none";
  document.getElementById('Grupo_A').style.display="block";
}

function MostrarB(){
  document.getElementById('Grupo_D').style.display="none";
  document.getElementById('Grupo_C').style.display="none";
  document.getElementById('Grupo_B').style.display="block";
  document.getElementById('Grupo_A').style.display="none";


}

function MostrarC(){
  document.getElementById('Grupo_D').style.display="none";
  document.getElementById('Grupo_C').style.display="block";
  document.getElementById('Grupo_B').style.display="none";
  document.getElementById('Grupo_A').style.display="none";
}

function MostrarD(){
  document.getElementById('Grupo_D').style.display="block";
  document.getElementById('Grupo_C').style.display="none";
  document.getElementById('Grupo_B').style.display="none";
  document.getElementById('Grupo_A').style.display="none";

}

<script>
$(document).ready(function()
{
$("#mostrarmodal").modal("show");
});
</script>