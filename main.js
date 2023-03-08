//MAIN CONST
const main = document.querySelector('main');

//DBS
const userDB = [{ username: 'admin', password: 'admin' }];
const cellphoneDB = [];
const laptopDB = [];

//OBJECTS
let user = {
    username: '',
    password: '',
}

let client = {
    name: '',
    idNumber: '',
    phoneNumber: '',
    address: '',
    email: '',
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

    sessionId = 0; //delete after test

    const welcomeTitle = document.createElement('h1');
    const username = userDB[sessionId].username;

    welcomeTitle.innerHTML = 'BIENVENIDO ' + username;

    const logOutBtn = document.createElement('button');
    const logOutBtnImg = document.createElement('img');
    const logOutBtnContainer = document.querySelector('.right');

    //log out button properties
    logOutBtnImg.src = 'sources/log_out.svg';
    logOutBtnImg.alt = 'Log out icon';

    logOutBtn.appendChild(logOutBtnImg);
    logOutBtnContainer.appendChild(logOutBtn);

    logOutBtn.addEventListener('click', () => {
        sessionId = -1;
        logOutBtn.remove();
        loginForm();
    });

    const mainContainer = document.createElement('div');
    const sidebar = document.createElement('div');
    const panelControl = document.createElement('h2');
    const clientRegisterBtn = document.createElement('button');
    const phoneRegisterBtn = document.createElement('button');
    const laptopRegisterBtn = document.createElement('button');
    const container = document.createElement('div');

    //sidebar & container div properties
    mainContainer.classList = 'main-container';
    sidebar.classList = 'sidebar-container';
    panelControl.innerHTML = 'Panel de control';
    clientRegisterBtn.innerHTML = 'Registrar cliente';
    phoneRegisterBtn.innerHTML = 'Registrar celular';
    laptopRegisterBtn.innerHTML = 'Registrar portátil';
    container.classList = 'container';

    sidebar.appendChild(panelControl);
    sidebar.appendChild(clientRegisterBtn);
    sidebar.appendChild(phoneRegisterBtn);
    sidebar.appendChild(laptopRegisterBtn);

    mainContainer.appendChild(sidebar);
    mainContainer.appendChild(container);

    container.appendChild(welcomeTitle);

    //container elements
    const btnContainer = document.createElement('div');
    const containerClientBtn = document.createElement('button');
    const containerPhoneBtn = document.createElement('button');
    const containerLaptopBtn = document.createElement('button');

    btnContainer.classList = 'btn-container';
    containerClientBtn.innerHTML = 'Registrar cliente';
    containerPhoneBtn.innerHTML = 'Registrar celular';
    containerLaptopBtn.innerHTML = 'Registrar portátil';

    btnContainer.appendChild(containerClientBtn);
    btnContainer.appendChild(containerPhoneBtn);
    btnContainer.appendChild(containerLaptopBtn);

    container.appendChild(btnContainer);

    main.appendChild(mainContainer);

    //CLIENT REGISTER FORM
    const clientRegisterForm = () => {
        
    }

    //PHONE REGISTER FORM
    const phoneRegisterForm = () => {
        
    }

    //LAPTOP REGISTER FORM
    const laptopRegisterForm = () => {
        
    }

    //button behaviors
    clientRegisterBtn.addEventListener('click', () => {
        container.innerHTML = '';
        clientRegisterForm();
    });

    containerClientBtn.addEventListener('click', () => {
        container.innerHTML = '';
        clientRegisterForm();
    });

    phoneRegisterBtn.addEventListener('click', () => {
        container.innerHTML = '';
        phoneRegisterForm();
    });

    containerPhoneBtn.addEventListener('click', () => {
        container.innerHTML = '';
        phoneRegisterForm();
    });

    laptopRegisterBtn.addEventListener('click', () => {
        container.innerHTML = '';
        laptopRegisterForm();
    });
    
    containerLaptopBtn.addEventListener('click', () => {
        container.innerHTML = '';
        laptopRegisterForm();
    });
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

const registerForm = () => {
    const formContainer = document.createElement('div');
    const form = document.createElement('form');
    const title = document.createElement('h1');
    const usernameLabel = document.createElement('label');
    const usernameInput = document.createElement('input');
    const passwordLabel = document.createElement('label');
    const passwordInput = document.createElement('input');
    const submitBtn = document.createElement('input');
    const logInBtnIcon = document.createElement('button');
    const logInBtnImg = document.createElement('img');
    const logInBtnContainer = document.querySelector('.right');


    //div properties
    formContainer.classList = 'form-container';

    //title properties
    title.innerHTML = 'Registrarse';

    //username label/input properties
    usernameLabel.htmlFor = 'username';
    usernameLabel.innerHTML = 'Ingrese un usuario:';
    usernameInput.type = 'text';
    usernameInput.required = true;

    //password label/input properties
    passwordLabel.htmlFor = 'password';
    passwordLabel.innerHTML = 'Ingrese una contraseña:';
    passwordInput.type = 'password';
    passwordInput.required = true;

    //submit button properties
    submitBtn.type = 'submit';
    submitBtn.value = 'Registrarse';

    //login button properties
    logInBtnImg.src = 'sources/user_icon.svg';
    logInBtnImg.alt = 'User icon';

    logInBtnIcon.appendChild(logInBtnImg);
    logInBtnContainer.appendChild(logInBtnIcon);

    logInBtnIcon.addEventListener('click', () => {
        logInBtnIcon.remove();
        loginForm();
    });

    usernameLabel.appendChild(usernameInput);
    passwordLabel.appendChild(passwordInput);

    form.appendChild(usernameLabel);
    form.appendChild(passwordLabel);
    form.appendChild(submitBtn);

    formContainer.appendChild(title);
    formContainer.appendChild(form);

    main.appendChild(formContainer);

    submitBtn.addEventListener('click', () => {
        event.preventDefault();
        user.username = usernameInput.value;
        user.password = passwordInput.value;

        //REGISTER ALERT MESSAGE
        const alertBox = document.createElement('div');
        const alertContainer = document.createElement('div');
        const h2 = document.createElement('h2');
        const checkImage = document.createElement('img');
        const p = document.createElement('p');
        const logInBtn = document.createElement('input');

        //alert properties
        alertBox.classList = 'alert';
        alertContainer.classList = 'alert-container';
        h2.innerHTML = 'Registro Exitoso';
        checkImage.src = 'sources/checkImage.png';
        checkImage.alt = 'Check';
        p.innerHTML = 'Te invitamos a iniciar sesión presionando el siguiente botón.';
        logInBtn.type = 'button';
        logInBtn.value = 'Iniciar sesión';

        alertBox.appendChild(alertContainer);

        alertContainer.appendChild(h2);
        alertContainer.appendChild(checkImage);
        alertContainer.appendChild(p);
        alertContainer.appendChild(logInBtn);

        main.appendChild(alertBox);

        //REDIRECT LOGIN BUTTON
        logInBtn.addEventListener('click', loginForm);

        logInBtn.addEventListener('click', () => {
            logInBtnIcon.remove();
            loginForm();
        });

        userDB.push(user);
    });
}

window.addEventListener('load', registerForm);