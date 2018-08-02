const email = document.getElementById('email');
const password = document.getElementById('password');
const email2 = document.getElementById('email2');
const password2 = document.getElementById('password2');

const btnIngreso = document.getElementById('ingreso');
const btnRegistrar = document.getElementById('registrar');
const btnGoogle = document.getElementById('btn-google');
const btnFacebook = document.getElementById('btn-facebook');
const contenido = document.getElementById('contenido');


btnRegistrar.addEventListener("click", event => {
  window.social.registrar(email.value, password.value);
  //window.social.observador();

}
);

btnIngreso.addEventListener("click", event => {
  window.social.ingreso(email2.value, password2.value);
  //window.social.observador();
}
);

btnGoogle.addEventListener("click", event => {
  window.social.googleSignIn();
  //window.social.observador();
}
);

btnFacebook.addEventListener("click", event => {
  window.social.facebookSignIn();
  //window.social.observador();
}
);



function abrirRegistro() {
  document.querySelector('.loginGeneral').style.display = 'none';
  document.querySelector('.modal').style.display = 'inline-block';
}

function cerrarRegistro() {
  document.querySelector('.modal').style.display = 'none';
  document.querySelector('.loginGeneral').style.display = 'inline-block';
}
