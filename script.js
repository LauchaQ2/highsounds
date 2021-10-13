window.addEventListener("load", function() {
    console.log("'Todos los recursos terminaron de cargar!");
  });


var imagenes=[];

imagenes[0] = "guitarraslide.png";
imagenes[1] = "brunch.png";
imagenes[2] = "ahora12.jpg";

var indiceimagenes = 0;

document.getElementById("imgslider").src = imagenes[indiceimagenes];

function next(){
    if (indiceimagenes < 2){
        indiceimagenes++;
    } else{
        indiceimagenes = 0;
    }
        document.slider.src = imagenes[indiceimagenes];
}

function back(){
    if (indiceimagenes > 0){
        indiceimagenes--;
    } else{
        indiceimagenes = 2;
    }
    document.slider.src = imagenes[indiceimagenes];

}