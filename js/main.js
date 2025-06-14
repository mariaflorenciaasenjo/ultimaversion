let form = document.querySelector('#form');
form.addEventListener('submit',agregar);


let btncapcha = document.querySelector('#btn-capcha');
btncapcha.addEventListener('click', cambiar);


// let btn2 = document.querySelector('#btn-comprobar');
// btn.addEventListener('click', verificar);

let opciones = ['2446', '3534', '4684', '8654', '9612'];

function cambiar() {
  
  let random = Math.floor((Math.random() * opciones.length));
  let opcion = opciones[random];
  
  document.querySelector('.result').innerHTML = opcion;
}


let btn = document.querySelector('#enviarformu');
btn.addEventListener('click', verificar);

function agregar(e) {
    e.preventDefault();
    let formData = new FormData(form);
    let nombre = formData.get('nombre');
    let apellido = formData.get('apellido');
    let email = formData.get('email');
    let capchausuario = formData.get('capchausuario')

    console.log(nombre, apellido, email,capchausuario);

}

function verificar(){
    let formData = new FormData(form);
    let opcion = document.querySelector('.result').innerHTML;
    let capchausuario= formData.get('capchausuario')
  
    if(opcion==capchausuario){
        document.querySelector("#capchabien").innerHTML = "Captcha correcto";
    } 
    else {
        document.querySelector("#capchamal").innerHTML = "Captcha inválido";
    }
}

