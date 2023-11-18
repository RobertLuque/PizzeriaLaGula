(function(){

//*Objeto Propiedades Efecto LightBox
var propLightBox = {
    imgContainer: document.getElementsByClassName('lightbox'),
    imagen: null,
    imagenUrl: null,
    cuerpoDom: document.getElementsByTagName('body')[0],
    lightBoxContainer: null,
    modal: null,
    cerrarmodal: null,
    animacion: 'fade'
}
//*Objeto con los metodos Efecto LightBox
var metLightBox = {
    inicio: function(){
        for(var i = 0; i < propLightBox.imgContainer.length; i++)
        propLightBox.imgContainer[i].addEventListener('click', metLightBox.capturaImagen);
    },
    capturaImagen: function(){
        propLightBox.imagen = this;
        metLightBox.lightBox(propLightBox.imagen);
    },
    lightBox: function(imagen){
        //*Ver estilos que ya tiene asignados
        propLightBox.imagenUrl = window.getComputedStyle(imagen, null).backgroundImage.slice(5,-2);
        propLightBox.cuerpoDom.appendChild(document.createElement('DIV')).setAttribute('id', 'lightbox_container');
        propLightBox.lightBoxContainer = document.getElementById('lightbox_container');

        propLightBox.lightBoxContainer.style.width = '100%';
        propLightBox.lightBoxContainer.style.height = '100%';
        propLightBox.lightBoxContainer.style.position = 'fixed';
        propLightBox.lightBoxContainer.style.zIndex = '1000';
        propLightBox.lightBoxContainer.style.background = 'rgba(0,0,0,0.8)';
        propLightBox.lightBoxContainer.style.top = '0';
        propLightBox.lightBoxContainer.style.left = '0';

        propLightBox.lightBoxContainer.appendChild(document.createElement('DIV')).setAttribute('id','modal');
        propLightBox.modal = document.getElementById('modal');

        propLightBox.modal.style.height = '100%';
        propLightBox.modal.appendChild(document.createElement('IMG')).setAttribute('src', propLightBox.imagenUrl);
        propLightBox.modal.getElementsByTagName('img')[0].setAttribute('class','imagen-modal');

        if(propLightBox.animacion == 'fade'){
            document.getElementsByClassName('imagen-modal')[0].style.opacity = 0;
            setTimeout(function(){
                document.getElementsByClassName('imagen-modal')[0].style.opacity = 1;
            },50);
        }

        propLightBox.modal.innerHTML += '<i id="cerrar_modal" class="fa-solid fa-xmark"></i>';

        propLightBox.cerrarmodal = document.getElementById('cerrar_modal');
        propLightBox.cerrarmodal.addEventListener('click',metLightBox.cerrarmodal);
    },
    cerrarmodal: function(){
        propLightBox.cuerpoDom.removeChild(propLightBox.lightBoxContainer);
    }
}

metLightBox.inicio();

}())



