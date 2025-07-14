# SURVIVE.JS

const app = document.getElementById('app');
const titulo = document.getElementById('titulo');

function mostrarRegistro() {
  titulo.textContent = "Registro de Usuario";
  app.innerHTML = `
    <form id="formRegistro">
      <input type="text" id="usuario" placeholder="Usuario" required />
      <input type="email" id="email" placeholder="Email" required />
      <input type="password" id="password" placeholder="Contraseña" required />
      <button type="submit">Registrar</button>
      <p>¿Ya tienes cuenta? <a href="#" id="linkLogin">Inicia sesión</a></p>
    </form>
  `;

  document.getElementById('formRegistro').addEventListener('submit', registrarUsuario);
  document.getElementById('linkLogin').addEventListener('click', mostrarLogin);
}

function mostrarLogin() {
  titulo.textContent = "Iniciar Sesión";
  app.innerHTML = `
    <form id="formLogin">
      <input type="email" id="emailLogin" placeholder="Email" required />
      <input type="password" id="passwordLogin" placeholder="Contraseña" required />
      <button type="submit">Ingresar</button>
      <p>¿No tienes cuenta? <a href="#" id="linkRegistro">Regístrate</a></p>
    </form>
  `;

  document.getElementById('formLogin').addEventListener('submit', iniciarSesion);
  document.getElementById('linkRegistro').addEventListener('click', mostrarRegistro);
}

function registrarUsuario(e) {
  e.preventDefault();

  const usuario = document.getElementById('usuario').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  if (localStorage.getItem(email)) {
    alert('El usuario ya está registrado');
    return;
  }

  const nuevoUsuario = {
    usuario,
    email,
    password
  };

  localStorage.setItem(email, JSON.stringify(nuevoUsuario));
  alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
  mostrarLogin();
}

function iniciarSesion(e) {
  e.preventDefault();

  const email = document.getElementById('emailLogin').value.trim();
  const password = document.getElementById('passwordLogin').value;

  const datos = localStorage.getItem(email);
  if (!datos) {
    alert('Usuario no encontrado');
    return;
  }

  const usuarioGuardado = JSON.parse(datos);

  if (usuarioGuardado.password !== password) {
    alert('Contraseña incorrecta');
    return;
  }

  alert(`¡Bienvenido ${usuarioGuardado.usuario}!`);
  mostrarBienvenida(usuarioGuardado.usuario);
}

function mostrarBienvenida(nombre) {
  titulo.textContent = "Inicio";
  app.innerHTML = `
    <h2>¡Hola, ${nombre}!</h2>
    <button id="cerrarSesion">Cerrar sesión</button>
  `;
  document.getElementById('cerrarSesion').addEventListener('click', mostrarLogin);
}

// Inicia en la vista de login
mostrarLogin();
