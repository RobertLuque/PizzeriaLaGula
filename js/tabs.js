(function(){

var propTabs = {
    primer_encabezado: document.getElementById('encabezado_menu').firstElementChild,
    primer_contenido: document.getElementById('contenido_menu').firstElementChild,
    enlaces_encabezado: document.querySelectorAll('#encabezado_menu li a'),//*Parece que busca de manera especifica la direccion de una clase
    li_encabezado: document.querySelectorAll('#encabezado_menu li'),
    divs_contenido: document.querySelectorAll('#contenido_menu > div'),
    contenido_active: null

}
var metTabs = {
    inicio: function(){
        propTabs.primer_encabezado.className = 'active';
        propTabs.primer_contenido.className = 'active';

        for(var i = 0; i < propTabs.enlaces_encabezado.length; i++){
            propTabs.enlaces_encabezado[i].addEventListener('click',metTabs.evento);
        }
    },
    evento: function(e){
        e.preventDefault(); //*Es para prevenir lo que tendria que pasar por defecto
        //*en este caso anula que se predefina la almuadilla
        for(var i = 0; i < propTabs.li_encabezado.length; i++){
            propTabs.li_encabezado[i].className = '';
        }
        for(var i = 0; i < propTabs.divs_contenido.length; i++){
            propTabs.divs_contenido[i].className = '';
        }
        //*ParentElement = Permite selecionar el elemento padre de un objeto
        this.parentElement.className = 'active';
        propTabs.contenido_active = this.getAttribute('href');
        document.querySelector(propTabs.contenido_active).className = 'active';
        document.querySelector(propTabs.contenido_active).style.opacity = 0;
        setTimeout(function(){
            document.querySelector(propTabs.contenido_active).style.opacity = 1;
        },100);
    }
}

metTabs.inicio();

}())