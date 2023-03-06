//MAIN CONST
const main = document.querySelector('main');
const loginBtn = document.querySelector('#login-btn');

loginBtn.addEventListener('click', () => {
    main.innerHTML = '<div class="form-container"><form action=""><label for="user">Nombre de usuario <input type="text" id="user" placeholder="Ingrese su usuario" required autofocus></label><label for="password">Contraseña <input type="password" id="password" placeholder="Ingrese su contraseña" required></label><input type="submit" id="login-btn" value="Ingresar"></form></div>';
});