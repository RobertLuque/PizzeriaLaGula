(function(){
//*Propiedades de Slider
var propSlider = {
    slider: document.getElementById('slider'),
    primerSlide: null
}



//*Metodos de Slider

var metSlider = {
    inicio: function(){
        setInterval(metSlider.moverSlider, 5000);//*Ejecuta cada cierto tiempo
    },
    moverSlider: function(){
        propSlider.slider.style.transition = 'all 1s ease';
        propSlider.slider.style.marginLeft = '-100%';
        setTimeout(function(){//*firstElementchild guarda cual es el primer hijo
            propSlider.primerSlide = propSlider.slider.firstElementChild;
            propSlider.slider.appendChild(propSlider.primerSlide);
            propSlider.slider.style.transition = 'unset';
            propSlider.slider.style.marginLeft = '0%';
        }, 1000);
    }
}

metSlider.inicio();

}())
