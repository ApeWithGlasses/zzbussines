//MAIN CONST
const main = document.querySelector('main');

//DBS
const userDB = [];
const cellphoneDB = [];
const laptopDB = [];

//OBJECTS
let user = {
    username: '',
    name: '',
    idNumber: '',
    phoneNumber: '',
    address: '',
    email: '',
    password: '',
}

let cellphone = {
    name: '',
    reference: '',
    code: '',
    price: '',
    stockQuantity: '',
    productImage: '',
}

let laptop = {
    name: '',
    reference: '',
    code: '',
    price: '',
    stockQuantity: '',
    productImage: '',
}

//SESSION ID FUNCTION

let sessionId;

//MAIN PAGE
const mainPage = () => {
    main.innerHTML = '';

    const title = document.createElement('h1');
    const username = userDB[sessionId].username; 

    title.innerHTML = 'BIENVENIDO ' + username;

    main.appendChild(title);
}

//LOGIN FORM

const loginForm = () => {
    const formContainer = document.createElement('div');
    const form = document.createElement('form');
    const title = document.createElement('h1');
    const usernameLabel = document.createElement('label');
    const usernameInput = document.createElement('input');
    const passwordLabel = document.createElement('label');
    const passwordInput = document.createElement('input');
    const submitBtn = document.createElement('input');

    //div properties
    formContainer.classList = 'form-container';

    //title properties
    title.innerHTML = 'Iniciar sesión';

    //username label/input properties
    usernameLabel.htmlFor = 'username';
    usernameLabel.innerHTML = 'Usuario:';
    usernameInput.type = 'text';
    usernameInput.required = true;

    //password label/input properties
    passwordLabel.htmlFor = 'password';
    passwordLabel.innerHTML = 'Contraseña:';
    passwordInput.type = 'password';
    passwordInput.required = true;

    //submit button properties
    submitBtn.type = 'button';
    submitBtn.value = 'Iniciar sesión';

    usernameLabel.appendChild(usernameInput);
    passwordLabel.appendChild(passwordInput);

    form.appendChild(usernameLabel);
    form.appendChild(passwordLabel);
    form.appendChild(submitBtn);

    formContainer.appendChild(title);
    formContainer.appendChild(form);

    main.innerHTML = '';

    main.appendChild(formContainer);

    submitBtn.addEventListener('click', () => {
        //ERROR MESAGGE
        const error = document.createElement('p');

        error.classList = 'error';
        error.innerHTML = 'Nombre de usuario o contraseña incorrectos.';

        const username = usernameInput.value;
        const password = passwordInput.value;

        let foundUser = userDB.find(user => user.username === username && user.password === password);
        sessionId = userDB.indexOf(userDB.find(user => user.username === username && user.password === password));

        if (foundUser && sessionId !== -1) {
            //LOGIN ALERT MESSAGE
            const alertBox = document.createElement('div');
            const alertContainer = document.createElement('div');
            const h2 = document.createElement('h2');
            const checkImage = document.createElement('img');
            const p = document.createElement('p');
            const navegationBtn = document.createElement('input');

            //alert properties
            alertBox.classList = 'alert';
            alertContainer.classList = 'alert-container';
            h2.innerHTML = 'Ingreso de sesión correcto';
            checkImage.src = 'sources/checkImage.png';
            checkImage.alt = 'Check';
            p.innerHTML = 'Navega por la plataforma haciendo click en el siguiente botón.';
            navegationBtn.type = 'button';
            navegationBtn.value = 'Navegar';

            alertBox.appendChild(alertContainer);

            alertContainer.appendChild(h2);
            alertContainer.appendChild(checkImage);
            alertContainer.appendChild(p);
            alertContainer.appendChild(navegationBtn);

            main.appendChild(alertBox);

            navegationBtn.addEventListener('click', mainPage);
        } else {
            submitBtn.addEventListener('click', () => {
                if (error) {
                    error.remove();
                }
            });
            form.appendChild(error);
        }
    });
}

// REGISTER FORM

window.addEventListener('load', () => {
    const formContainer = document.createElement('div');
    const form = document.createElement('form');
    const title = document.createElement('h1');
    const usernameLabel = document.createElement('label');
    const usernameInput = document.createElement('input');
    const nameLabel = document.createElement('label');
    const nameInput = document.createElement('input');
    const idCardLabel = document.createElement('label');
    const idCardInput = document.createElement('input');
    const phoneNumberLabel = document.createElement('label');
    const phoneNumberInput = document.createElement('input');
    const addressLabel = document.createElement('label');
    const addressInput = document.createElement('input');
    const emailLabel = document.createElement('label');
    const emailInput = document.createElement('input');
    const passwordLabel = document.createElement('label');
    const passwordInput = document.createElement('input');
    const submitBtn = document.createElement('input');
    const userBtn = document.createElement('button');
    const userIcon = document.createElement('img');
    const userIconContainer = document.querySelector('.right');


    //div properties
    formContainer.classList = 'form-container';

    //title properties
    title.innerHTML = 'Registrarse';

    //username label/input properties
    usernameLabel.htmlFor = 'username';
    usernameLabel.innerHTML = 'Ingrese un usuario:';
    usernameInput.type = 'text';
    usernameInput.required = true;

    //name label/input properties
    nameLabel.htmlFor = 'name';
    nameLabel.innerHTML = 'Ingrese su nombre:';
    nameInput.type = 'text';
    nameInput.required = true;

    //idcard label/input properties
    idCardLabel.htmlFor = 'idCard';
    idCardLabel.innerHTML = 'Ingrese su documento de identidad:';
    idCardInput.type = 'text';
    idCardInput.required = true;

    //cellnumber label/input properties
    phoneNumberLabel.htmlFor = 'phoneNumber';
    phoneNumberLabel.innerHTML = 'Ingrese su número de celular:';
    phoneNumberInput.type = 'text';
    phoneNumberInput.required = true;

    //address label/input properties
    addressLabel.htmlFor = 'address';
    addressLabel.innerHTML = 'Ingrese su dirección';
    addressInput.type = 'text';
    addressInput.required = true;

    //email label/input properties
    emailLabel.htmlFor = 'email';
    emailLabel.innerHTML = 'Ingrese su correo electrónico:';
    emailInput.type = 'email';
    emailInput.required = true;

    //password label/input properties
    passwordLabel.htmlFor = 'password';
    passwordLabel.innerHTML = 'Ingrese una contraseña:';
    passwordInput.type = 'password';
    passwordInput.required = true;

    //submit button properties
    submitBtn.type = 'submit';
    submitBtn.value = 'Registrarse';

    //user icon properties
    userIcon.src = 'sources/user_icon.svg';
    userIcon.alt = 'User icon';

    userBtn.appendChild(userIcon);
    userIconContainer.appendChild(userBtn);

    userBtn.addEventListener('click', () => {
        userBtn.remove();
        loginForm();
    });

    usernameLabel.appendChild(usernameInput);
    nameLabel.appendChild(nameInput);
    idCardLabel.appendChild(idCardInput);
    phoneNumberLabel.appendChild(phoneNumberInput);
    addressLabel.appendChild(addressInput);
    emailLabel.appendChild(emailInput);
    passwordLabel.appendChild(passwordInput);

    form.appendChild(usernameLabel);
    form.appendChild(nameLabel);
    form.appendChild(idCardLabel);
    form.appendChild(phoneNumberLabel);
    form.appendChild(addressLabel);
    form.appendChild(emailLabel);
    form.appendChild(passwordLabel);
    form.appendChild(submitBtn);

    formContainer.appendChild(title);
    formContainer.appendChild(form);

    main.appendChild(formContainer);

    submitBtn.addEventListener('click', () => {
        event.preventDefault();
        user.username = usernameInput.value;
        user.name = nameInput.value;
        user.idNumber = idCardInput.value;
        user.phoneNumber = phoneNumberInput.value;
        user.address = addressInput.value;
        user.email = emailInput.value;
        user.password = passwordInput.value;

        //REGISTER ALERT MESSAGE
        const alertBox = document.createElement('div');
        const alertContainer = document.createElement('div');
        const h2 = document.createElement('h2');
        const checkImage = document.createElement('img');
        const p = document.createElement('p');
        const logIngBtn = document.createElement('input');

        //alert properties
        alertBox.classList = 'alert';
        alertContainer.classList = 'alert-container';
        h2.innerHTML = 'Registro Exitoso';
        checkImage.src = 'sources/checkImage.png';
        checkImage.alt = 'Check';
        p.innerHTML = 'Te invitamos a iniciar sesión presionando el siguiente botón.';
        logIngBtn.type = 'button';
        logIngBtn.value = 'Iniciar sesión';

        alertBox.appendChild(alertContainer);

        alertContainer.appendChild(h2);
        alertContainer.appendChild(checkImage);
        alertContainer.appendChild(p);
        alertContainer.appendChild(logIngBtn);

        main.appendChild(alertBox);

        //REDIRECT LOGIN BUTTON
        logIngBtn.addEventListener('click', loginForm);

        logIngBtn.addEventListener('click', () => {
            userBtn.remove();
            loginForm();
        });

        userDB.push(user);
    });
});