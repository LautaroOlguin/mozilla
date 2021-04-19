let camimg = document.querySelector('img');
camimg.onclick = function (){
    let src = camimg.getAttribute('src');
    if(src === 'logo1.png'){
        camimg.setAttribute('src', 'logo2.png');
    } 
    else{
        camimg.setAttribute('src', 'logo1.png');
    }
}
let boton = document.querySelector('button');
let titulo = document.querySelector( 'h1');
function nombredeusuario(){
    let minombre = prompt('Por favor, ingresa tu nombre');
    if(!minombre) {
        nombredeusuario();
      } 
    else {
        localStorage.setItem('nombre', minombre);
        titulo.innerHTML = 'Mozilla is genial, ' + minombre;
      }
}
if(!localStorage.getItem('nombre')){
    nombredeusuario();
}
else{
    let nomguardado = localStorage.getItem('nombre');
    titulo.textContent = 'Mozilla is cool, ' + nomguardado;
}
boton.onclick = function (){
    nombredeusuario();
}