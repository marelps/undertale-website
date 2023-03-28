/*function typeWrite(elemento){
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = ' ';
  textoArray.forEach(function(letra, i){   
    
  setTimeout(function(){
      elemento.innerHTML += letra;
  }, 75 * i)

});
}
const titulo = document.querySelector('.titulo-principal');
typeWrite(titulo);*/

/* Efeito de escrita no quadrado de diálogo */
window.onload = function(){
  var txtTitulo = '* Isso é um titulo';
  var txt1 = document.getElementById("titulo");
  
  var speed = 100;
  var cont = 0;

  function typeWriter () {
    if(cont < txtTitulo.length){
      txt1.innerHTML +=  txtTitulo.charAt(cont) ;
      cont++;
      setTimeout(typeWriter, speed);
     }else{
       cont = 0;
     }
    }
   typeWriter();
};