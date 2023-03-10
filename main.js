//MAIN CONST
const main = document.querySelector('main');

//DBS
const userDB = [{ username: 'admin', password: 'admin' }];
const clientDB = [{ name: 'Alejandro Gutierrez', idNumber: '00000000', phoneNumber: '555-555', address: 'Calle Siempre Viva 123', email: 'alejandro@example.com' }];
const cellphoneDB = [{ name: 'Samsung Galaxy A53', reference: '180GB', code: '12455', price: '2678431', stockQuantity: '10', productImage: 'https://m.media-amazon.com/images/I/71HN4P-pd5L.jpg' }, { name: 'Samsung Galaxy A33', reference: '240GB', code: '12456', price: '1069900', stockQuantity: '10', productImage: 'https://c8j8r9g2.rocketcdn.me/wp-content/uploads/2022/10/samsung_galaxy_a33_negro_001_l.jpeg' }];
const laptopDB = [{name: 'ASUS Vivobook 14', reference: 'Ryzen 5 4500U - 8GB RAM - 512GB', code: '13400', price: '1781461', stockQuantity: '23', productImage: 'https://exitocol.vtexassets.com/arquivos/ids/16428889-800-auto?v=638110081125930000&width=800&height=auto&aspect=true'},{name: 'HP Intel Core i3 1115G4', reference: 'Intel Core i3 - 8GB RAM - 1TB', code: '13401', price: '1597530', stockQuantity: '45', productImage: 'https://exitocol.vtexassets.com/arquivos/ids/15994754-800-auto?v=638072550513000000&width=800&height=auto&aspect=true'}];

//OBJECTS
const createUserObject = (username, password) => {
    const user = {
        username: username,
        password: password,
    }
    return user;
}

const createClientObject = (name, idNumber, phoneNumber, address, email) => {
    const client = {
        name: name,
        idNumber: idNumber,
        phoneNumber: phoneNumber,
        address: address,
        email: email,
    }
    return client;
}

const createCellphoneObject = (name, reference, code, price, stockQuantity, productImage) => {
    const cellphone = {
        name: name,
        reference: reference,
        code: code,
        price: price,
        stockQuantity: stockQuantity,
        productImage: productImage,
    }
    return cellphone;
}

const createLaptopObject = (name, reference, code, price, stockQuantity, productImage) => {
    const laptop = {
        name: name,
        reference: reference,
        code: code,
        price: price,
        stockQuantity: stockQuantity,
        productImage: productImage,
    }
    return laptop;
}

//SESSION ID FUNCTION

let sessionId;


//REGISTER OBJECT ALERT
const registerAlert = () => {
    //REGISTER ALERT MESSAGE
    const alertBox = document.createElement('div');
    const alertContainer = document.createElement('div');
    const h2 = document.createElement('h2');
    const checkImage = document.createElement('img');
    const p = document.createElement('p');

    //alert properties
    alertBox.classList = 'alert';
    alertContainer.classList = 'alert-container';
    h2.innerHTML = 'Registro Exitoso';
    checkImage.src = 'sources/checkImage.png';
    checkImage.alt = 'Check';

    alertBox.appendChild(alertContainer);

    alertContainer.appendChild(h2);
    alertContainer.appendChild(checkImage);

    main.appendChild(alertBox);

    //automatic alert delete
    const alertDelete = () => {
        alertBox.remove();
    }

    setTimeout(alertDelete, 2000);
}

//MAIN PAGE
const mainPage = () => {
    main.innerHTML = '';

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

    let containerHeight = container.offsetHeight;

    //sidebar & container div properties
    mainContainer.classList = 'main-container';
    sidebar.classList = 'sidebar-container';
    sidebar.style.height = '' + containerHeight + 'px;';
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

    // IPT = INPUT

    //CARD CREATE
    const card = (productImageIpt, productNameIpt, productPriceIpt, productStockIpt, productReferenceIpt, cardContainer) => {
        const card = document.createElement('div');
        const imageContainer = document.createElement('div');
        const textContainer = document.createElement('div');
        const productName = document.createElement('p');
        const productPrice = document.createElement('p');
        const productStock = document.createElement('p');
        const productReference = document.createElement('p');

        //card properties
        card.classList = 'card';

        //image container properties
        imageContainer.classList = 'image-container';
        imageContainer.style.backgroundImage = 'url("' + productImageIpt + '")';

        //text container properties
        textContainer.classList = 'text-container';
        productName.textContent = '' + productNameIpt + '';
        productPrice.textContent = '$' + productPriceIpt + '';
        productStock.textContent = 'Cantidad: ' + productStockIpt + '';
        productReference.textContent = 'REF ' + productReferenceIpt + '';

        card.appendChild(imageContainer);
        card.appendChild(textContainer);
        textContainer.appendChild(productName);
        textContainer.appendChild(productPrice);
        textContainer.appendChild(productStock);
        textContainer.appendChild(productReference);

        cardContainer.appendChild(card);
    }

    //CLIENT REGISTER FORM
    const clientRegisterForm = () => {
        const formContainer = document.createElement('div');
        const form = document.createElement('form');
        const title = document.createElement('h1');
        const nameLabel = document.createElement('label');
        const nameInput = document.createElement('input');
        const idNumberLabel = document.createElement('label');
        const idNumberInput = document.createElement('input');
        const phoneNumberLabel = document.createElement('label');
        const phoneNumberInput = document.createElement('input');
        const addressLabel = document.createElement('label');
        const addressInput = document.createElement('input');
        const emailLabel = document.createElement('label');
        const emailInput = document.createElement('input');
        const submitBtn = document.createElement('input');
        const tableContainer = document.createElement('div');
        const rowContainer = document.createElement('table');

        // table
        const table = document.createElement('table');
        const headerRow = document.createElement('tr');
        const nameHeader = document.createElement('th');
        const idNumberHeader = document.createElement('th');
        const phoneNumberHeader = document.createElement('th');
        const addressHeader = document.createElement('th');
        const emailHeader = document.createElement('th');

        //properties
        nameHeader.textContent = 'Nombre';
        idNumberHeader.textContent = 'Número de identificación';
        phoneNumberHeader.textContent = 'Número de contacto';
        addressHeader.textContent = 'Dirección';
        emailHeader.textContent = 'Correo electrónico';

        headerRow.appendChild(nameHeader);
        headerRow.appendChild(idNumberHeader);
        headerRow.appendChild(phoneNumberHeader);
        headerRow.appendChild(addressHeader);
        headerRow.appendChild(emailHeader);

        table.appendChild(headerRow);
        tableContainer.appendChild(table);

        formContainer.classList = 'form-container';
        formContainer.appendChild(form);

        title.innerHTML = 'REGISTRAR CLIENTE';

        container.appendChild(title);

        //name label & input properties
        nameLabel.innerHTML = 'Nombre completo';
        nameInput.type = 'text';
        nameInput.required = true;
        nameInput.autofocus = true;

        nameLabel.appendChild(nameInput);

        //idNumber label & input properties
        idNumberLabel.innerHTML = 'Número de documento';
        idNumberInput.type = 'text';
        idNumberInput.required = true;

        idNumberLabel.appendChild(idNumberInput);

        //phoneNumber label & input properties
        phoneNumberLabel.innerHTML = 'Número de celular o teléfono';
        phoneNumberInput.type = 'text';
        phoneNumberInput.required = true;

        phoneNumberLabel.appendChild(phoneNumberInput);

        //address input & label properties
        addressLabel.innerHTML = 'Dirección';
        addressInput.type = 'text';
        addressInput.required = true;

        addressLabel.appendChild(addressInput);

        //email input & label properties
        emailLabel.innerHTML = 'Correo electrónico';
        emailInput.type = 'text';
        emailInput.required = true;

        emailLabel.appendChild(emailInput);

        //submit btn properties
        submitBtn.value = 'Registrar cliente';
        submitBtn.type = 'submit';

        //table container properties
        tableContainer.classList = 'table-container';

        form.appendChild(nameLabel);
        form.appendChild(idNumberLabel);
        form.appendChild(phoneNumberLabel);
        form.appendChild(addressLabel);
        form.appendChild(emailLabel);
        form.appendChild(submitBtn);

        container.appendChild(formContainer);
        container.appendChild(tableContainer);

        const clientTable = () => {
            clientDB.forEach(client => {
                const row = document.createElement('tr');

                row.classList = 'row';

                const nameCell = document.createElement('td');
                const idNumberCell = document.createElement('td');
                const phoneNumberCell = document.createElement('td');
                const addressCell = document.createElement('td');
                const emailCell = document.createElement('td');

                // properties
                nameCell.textContent = client.name;
                idNumberCell.textContent = client.idNumber;
                phoneNumberCell.textContent = client.phoneNumber;
                addressCell.textContent = client.address;
                emailCell.textContent = client.email;

                row.appendChild(nameCell);
                row.appendChild(idNumberCell);
                row.appendChild(phoneNumberCell);
                row.appendChild(addressCell);
                row.appendChild(emailCell);

                rowContainer.appendChild(row);
            });

            tableContainer.appendChild(rowContainer);
        }

        clientTable();

        submitBtn.addEventListener('click', () => {
            event.preventDefault();
            const removeRows = () => {
                rowContainer.innerHTML = '';
            }
            removeRows();
            if (nameInput.value !== '' && idNumberInput.value !== '' && phoneNumberInput.value !== '' && addressInput.value !== '' && emailInput.value !== '') {
                const client = createClientObject(nameInput.value, idNumberInput.value, phoneNumberInput.value, addressInput.value, emailInput.value);
                registerAlert();
                clientDB.push(client);
            } else {
                alert('No puedes ingresar un elemento vacío.');
            }
            nameInput.value = '';
            idNumberInput.value = '';
            phoneNumberInput.value = '';
            addressInput.value = '';
            emailInput.value = '';

            clientTable();
        });
    }

    //PHONE REGISTER FORM
    const phoneRegisterForm = () => {
        const formContainer = document.createElement('div');
        const form = document.createElement('form');
        const title = document.createElement('h1');
        const nameLabel = document.createElement('label');
        const nameInput = document.createElement('input');
        const referenceLabel = document.createElement('label');
        const referenceInput = document.createElement('input');
        const codeLabel = document.createElement('label');
        const codeInput = document.createElement('input');
        const priceLabel = document.createElement('label');
        const priceInput = document.createElement('input');
        const stockQuantityLabel = document.createElement('label');
        const stockQuantityInput = document.createElement('input');
        const productImageLabel = document.createElement('label');
        const productImageInput = document.createElement('input');
        const submitBtn = document.createElement('input');
        const cardTitle = document.createElement('h1');
        const cardContainer = document.createElement('div');

        formContainer.classList = 'form-container';
        formContainer.appendChild(form);

        title.innerHTML = 'REGISTRAR CELULAR';

        container.appendChild(title);

        //name label/input properties
        nameLabel.innerHTML = 'Nombre producto:';
        nameInput.type = 'text';
        nameInput.required = true;
        nameInput.autofocus = true;

        //reference label/input properties
        referenceLabel.innerHTML = 'Número de referencia:';
        referenceInput.type = 'text';
        referenceInput.required = true;

        //code label/input properties
        codeLabel.innerHTML = 'Código:';
        codeInput.type = 'text';
        codeInput.required = true;

        //price label/input properties
        priceLabel.innerHTML = 'Precio (sin comas):';
        priceInput.type = 'text';
        priceInput.required = true;

        //stockQuantity label/input properties
        stockQuantityLabel.innerHTML = 'Cantidad en stock (sin comas ni puntos):';
        stockQuantityInput.type = 'text';
        stockQuantityInput.required = true;

        //productimage label/input properties
        productImageLabel.innerHTML = 'Ingrese la imagen del producto:';
        productImageInput.type = 'text';
        productImageInput.required = true;

        //submit btn properties
        submitBtn.type = 'submit';
        submitBtn.value = 'Registrar celular';

        //card container properties
        cardContainer.classList = 'card-container';
        cardTitle.textContent = 'Celulares registrados';

        nameLabel.appendChild(nameInput);
        referenceLabel.appendChild(referenceInput);
        codeLabel.appendChild(codeInput);
        priceLabel.appendChild(priceInput);
        stockQuantityLabel.appendChild(stockQuantityInput);
        productImageLabel.appendChild(productImageInput);

        form.appendChild(nameLabel);
        form.appendChild(referenceLabel);
        form.appendChild(codeLabel);
        form.appendChild(priceLabel);
        form.appendChild(stockQuantityLabel);
        form.appendChild(productImageLabel);
        form.appendChild(submitBtn);

        container.appendChild(formContainer);
        container.appendChild(cardTitle);
        container.appendChild(cardContainer);

        const phoneCardShow = () => {
            cellphoneDB.forEach(cellphone => {
                card(cellphone.productImage, cellphone.name, cellphone.price, cellphone.stockQuantity, cellphone.reference, cardContainer);
            });
        }

        phoneCardShow();

        submitBtn.addEventListener('click', () => {
            event.preventDefault();
            if (nameInput.value !== '' && referenceInput.value !== '' && codeInput.value !== '' && priceInput.value !== '' && stockQuantityInput.value !== '' && productImageInput.value !== '') {
                const cellphone = createCellphoneObject(nameInput.value, referenceInput.value, codeInput.value, priceInput.value, stockQuantityInput.value, productImageInput.value);
                registerAlert();
                cellphoneDB.push(cellphone);
            } else {
                alert('No puedes ingresar un elemento vacío.');
            }
            nameInput.value = '';
            referenceInput.value = '';
            codeInput.value = '';
            priceInput.value = '';
            stockQuantityInput.value = '';
            productImageInput.value = '';

            cardContainer.innerHTML = '';

            phoneCardShow();
        });
    }

    //LAPTOP REGISTER FORM
    const laptopRegisterForm = () => {
        const formContainer = document.createElement('div');
        const form = document.createElement('form');
        const title = document.createElement('h1');
        const nameLabel = document.createElement('label');
        const nameInput = document.createElement('input');
        const referenceLabel = document.createElement('label');
        const referenceInput = document.createElement('input');
        const codeLabel = document.createElement('label');
        const codeInput = document.createElement('input');
        const priceLabel = document.createElement('label');
        const priceInput = document.createElement('input');
        const stockQuantityLabel = document.createElement('label');
        const stockQuantityInput = document.createElement('input');
        const productImageLabel = document.createElement('label');
        const productImageInput = document.createElement('input');
        const submitBtn = document.createElement('input');
        const cardTitle = document.createElement('h1');
        const cardContainer = document.createElement('div');

        formContainer.classList = 'form-container';
        formContainer.appendChild(form);

        title.innerHTML = 'Registrar portátil';

        container.appendChild(title);

        //name label/input properties
        nameLabel.innerHTML = 'Nombre producto:';
        nameInput.type = 'text';
        nameInput.required = true;
        nameInput.autofocus = true;

        //reference label/input properties
        referenceLabel.innerHTML = 'Número de referencia:';
        referenceInput.type = 'text';
        referenceInput.required = true;

        //code label/input properties
        codeLabel.innerHTML = 'Código:';
        codeInput.type = 'text';
        codeInput.required = true;

        //price label/input properties
        priceLabel.innerHTML = 'Precio (sin comas):';
        priceInput.type = 'text';
        priceInput.required = true;

        //stockQuantity label/input properties
        stockQuantityLabel.innerHTML = 'Cantidad en stock (sin comas ni puntos):';
        stockQuantityInput.type = 'text';
        stockQuantityInput.required = true;

        //productimage label/input properties
        productImageLabel.innerHTML = 'Ingrese la imagen del producto:';
        productImageInput.type = 'text';
        productImageInput.required = true;

        //submit btn properties
        submitBtn.type = 'submit';
        submitBtn.value = 'Registrar portátil';

        //card container properties
        cardContainer.classList = 'card-container';
        cardTitle.textContent = 'Portátiles registrados';

        nameLabel.appendChild(nameInput);
        referenceLabel.appendChild(referenceInput);
        codeLabel.appendChild(codeInput);
        priceLabel.appendChild(priceInput);
        stockQuantityLabel.appendChild(stockQuantityInput);
        productImageLabel.appendChild(productImageInput);

        form.appendChild(nameLabel);
        form.appendChild(referenceLabel);
        form.appendChild(codeLabel);
        form.appendChild(priceLabel);
        form.appendChild(stockQuantityLabel);
        form.appendChild(productImageLabel);
        form.appendChild(submitBtn);

        container.appendChild(formContainer);
        container.appendChild(cardTitle);
        container.appendChild(cardContainer);

        const laptopCardShow = () => {
            laptopDB.forEach(laptop => {
                card(laptop.productImage, laptop.name, laptop.price, laptop.stockQuantity, laptop.reference, cardContainer);
            });
        }

        laptopCardShow();

        submitBtn.addEventListener('click', () => {
            event.preventDefault();
            if (nameInput.value !== '' && referenceInput.value !== '' && codeInput.value !== '' && priceInput.value !== '' && stockQuantityInput.value !== '' && productImageInput.value !== '') {
                const laptop = createCellphoneObject(nameInput.value, referenceInput.value, codeInput.value, priceInput.value, stockQuantityInput.value, productImageInput.value);
                registerAlert();
                laptopDB.push(laptop);
            } else {
                alert('No puedes ingresar un elemento vacío.');
            }
            nameInput.value = '';
            referenceInput.value = '';
            codeInput.value = '';
            priceInput.value = '';
            stockQuantityInput.value = '';
            productImageInput.value = '';

            cardContainer.innerHTML = '';

            laptopCardShow();
        });
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
    usernameInput.autofocus = true;

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

            //alert properties
            alertBox.classList = 'alert';
            alertContainer.classList = 'alert-container';
            h2.innerHTML = 'Ingreso de sesión correcto';
            checkImage.src = 'sources/checkImage.png';
            checkImage.alt = 'Check';
            p.innerHTML = 'Redireccionando al panel de control';

            alertBox.appendChild(alertContainer);

            alertContainer.appendChild(h2);
            alertContainer.appendChild(checkImage);
            alertContainer.appendChild(p);

            main.appendChild(alertBox);

            setTimeout(mainPage, 3000);
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
    usernameInput.autofocus = true;

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
        const user = createUserObject(usernameInput.value, passwordInput.value);

        //REGISTER ALERT MESSAGE
        const alertBox = document.createElement('div');
        const alertContainer = document.createElement('div');
        const h2 = document.createElement('h2');
        const checkImage = document.createElement('img');
        const p = document.createElement('p');

        //alert properties
        alertBox.classList = 'alert';
        alertContainer.classList = 'alert-container';
        h2.innerHTML = 'Registro Exitoso';
        checkImage.src = 'sources/checkImage.png';
        checkImage.alt = 'Check';
        p.innerHTML = 'En breves se te redireccionará a la página de inicio de sesión';

        alertBox.appendChild(alertContainer);

        alertContainer.appendChild(h2);
        alertContainer.appendChild(checkImage);
        alertContainer.appendChild(p);

        main.appendChild(alertBox);

        //REDIRECT LOGIN BUTTON

        const automaticRedirect = () => {
            logInBtnIcon.remove();
            loginForm();
        }

        setTimeout(automaticRedirect, 2000);

        userDB.push(user);
    });
}

window.addEventListener('load', registerForm);