
$(document).on("ready", init);
//Titulo de menu horizontal
$('body').on("click", "ul li a", function () {
  var title = $(this).data('title');
  $('.brand-logo').children('h4').html(title);
});
//inicializando el menu vertical
$('.button-collapse').sideNav({
  edge: 'left',
  closeOnClick: true,
  draggable: true
}
);
//inicializando registro de usuario
$('.button-add').sideNav({
  menuWidth: 500,
  edge: 'right',
  closeOnClick: true,
  draggable: true
}
);
//tamaño de la pantalla
$("#home-page").css("height", $(window).height() - parseInt($("#menu-horizontal").css("height").replace("px", '')));
$("#add-cliente").css("height", $(window).height() - parseInt($("#menu-horizontal").css("height").replace("px", '')));
// inicializando modal
$('.modal').modal();
//inicializando selects
//$('select').material_select();

function init() {

}

