(function(){
document.getElementById('');
var propParallax = {
    seccion: document.querySelector('.parallax'),
    recorrido: null,
    limite: null
}

var metParallax = {
    inicio: function(){
        window.addEventListener('scroll',metParallax.scrollParallax);
    },
    scrollParallax: function(){//*PageYoffset: Propiedad que dice cuanto a recorrido de la pagina web
        //*Comienza con 0 y medida que baja va a ir recorriendo
        propParallax.recorrido = window.pageYOffset;
        //*offsetTop: Propiedad que indica cuanto hay desde el inicio hasta algun elemento
        //*offsetHeight: Propiedad que mide el tamaño del alto del objeto en pixeles
        propParallax.limite = propParallax.seccion.offsetTop + propParallax.seccion.offsetHeight;

        //*window.outerHeight = a la altura de la pantalla windows
        if(propParallax.recorrido > propParallax.seccion.offsetTop - window.outerHeight && propParallax.recorrido <= propParallax.limite){
            propParallax.seccion.style.backgroundPositionY = (propParallax.recorrido - propParallax.seccion.offsetTop) / 1.5 + 'px';
        }else{
            propParallax.seccion.style.backgroundPositionY = 0;
        }
    }
}

metParallax.inicio();

}())