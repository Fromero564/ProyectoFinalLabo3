
let dataInfo;
let categoriasInfo;

//Diccionario
const categoriaTraducciones = {
    "electronics": "Electrónica",
    "jewelery": "Joyería",
    "men's clothing": "Ropa de Hombre",
    "women's clothing": "Ropa de Mujer"
};


// Función para obtener los datos de la API y guardarlos en dataInfo
async function fetchData() {
    const response = await fetch('https://fakestoreapi.com/products');
    dataInfo = await response.json();
}

// Función para crear y añadir las tarjetas al HTML
function createCards() {
    const container = document.getElementById('card-container'); // Selecciona el contenedor donde irán las tarjetas


    const limitedData = dataInfo.slice(0, 4);
    // Recorre cada producto en dataInfo y crea una tarjeta para cada uno
    limitedData.forEach(product => {
        // Crea la estructura de la tarjeta
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.title;
        img.classList.add('card-img');

        const title = document.createElement('div');
        title.classList.add('card-title');
        title.textContent = product.title;

     

        const price = document.createElement('div');
        price.classList.add('card-price');
        price.innerHTML = `<span>$</span> ${product.price.toFixed(2)}`;

        const button = document.createElement('button');
        button.classList.add('card-btn');
        button.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path></svg>
        `;

        const footer = document.createElement('div');
          footer.classList.add('card-footer');

        // Agrega los elementos al div de la tarjeta
        card.appendChild(img);
        card.appendChild(title);
        // card.appendChild(description);
        footer.appendChild(price);
        footer.appendChild(button);

        card.appendChild(footer);
        // Añade la tarjeta completa al contenedor principal
        container.appendChild(card);
    });
}

// Llama a fetchData y luego crea las tarjetas
fetchData().then(() => {
    createCards();
})


//Todo los productos
function createCardsAllProducts() {
    const container = document.getElementById('all-products'); // Selecciona el contenedor donde irán las tarjetas


    // Recorre cada producto en dataInfo y crea una tarjeta para cada uno
    dataInfo.forEach(product => {
        // Crea la estructura de la tarjeta
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.title;
        img.classList.add('card-img');

        const title = document.createElement('div');
        title.classList.add('card-title');
        title.textContent = product.title;
        
        const cantidadContainer = document.createElement('div');
       cantidadContainer.classList.add('cantidad-container');
       // Crear el texto "Cantidad:"
      const cantidadTexto = document.createElement('p');
      cantidadTexto.textContent = "Cantidad:";
      cantidadTexto.classList.add('cantidad-texto');

       // Crear el input de cantidad
     const cantidad = document.createElement('input');
     cantidad.type = 'number';
     cantidad.classList.add('cantidad-input');
     cantidad.min = 0;
     cantidad.value = 1;

      // Agregar el texto y el input al contenedor
      cantidadContainer.appendChild(cantidadTexto);
      cantidadContainer.appendChild(cantidad);

        
        // Si deseas agregar un valor por defecto (opcional)
        cantidad.min = 0; 
        cantidad.value = 1;

       
        const price = document.createElement('div');
        price.classList.add('card-price');
        price.innerHTML = `<span>$</span> ${product.price.toFixed(2)}`;

        const button = document.createElement('button');
        button.classList.add('card-btn');
        button.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path></svg>
        `;

        const footer = document.createElement('div');
          footer.classList.add('card-footer');

        // Agrega los elementos al div de la tarjeta
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(cantidadContainer);
        footer.appendChild(price);
        footer.appendChild(button);

        card.appendChild(footer);
        // Añade la tarjeta completa al contenedor principal
        container.appendChild(card);
    });
}

//Muestra todos los productos

fetchData().then(() => {
    createCardsAllProducts();
})

//Todas las categorias 


async function fetchDataCategorias() {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    categoriasInfo = await response.json();
}


// Función para crear y añadir las categorias al HTML
function createCategories() {
    const ul = document.getElementById('categorias'); // Lista desordenada para las categorias


      categoriasInfo.forEach(categoria => {
            
         const categoriaTraducida = categoriaTraducciones[categoria] || categoria;
        // Crea la estructura de la tarjeta
        const  li = document.createElement('li');
        li.classList.add('list-categoria');
       
        const a = document.createElement('a');
        a.href = './'+categoria +'.html';
        a.textContent = categoriaTraducida;
         

        li.appendChild(a);


        // Añade la tarjeta completa al contenedor principal
        ul.appendChild(li);
         });
}

//Menu desplegable
document.querySelector('.toggle-categorias').addEventListener('click', () => {
    const categoriasMenu = document.getElementById('categorias');
    categoriasMenu.classList.toggle('oculto'); 
});


//Muestra todas las categorias

fetchDataCategorias().then(() => {
    createCategories();
})


// Obtener usuarios desde la API
async function obtenerUsuarios() {
    try {
        const res = await fetch('https://fakestoreapi.com/users');
        const usuarios = await res.json();
        return usuarios;
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
    }
}

// Función para iniciar sesión
async function ingresar() {
    // Capturar valores del formulario
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;


    if (username === "") {
        alert("Debe completar el campo de usuario");
        document.getElementById('username').focus();
        return;
    } else if (password === "") {
        alert("Debe escribir una contraseña");
        document.getElementById('password').focus();
        return;
    }

    // Obtener lista de usuarios
    const usuarios = await obtenerUsuarios();

    // Buscar usuario que coincida con los datos ingresados
    const usuarioEncontrado = usuarios.find(user => 
        user.username === username && user.password === password
    );

    if (usuarioEncontrado) {
        // Guardar nombre e id en localStorage
        localStorage.setItem("Usuario", usuarioEncontrado.username);
        localStorage.setItem("idUsuario", usuarioEncontrado.id);
        localStorage.setItem("nombreUsuario", usuarioEncontrado.name.firstname);
        window.location.href = "../index.html";
      
    } else {
        alert("Nombre de usuario o contraseña incorrectos");
    }
}


//Agergar cartel de bienvenida y cerrar sesion
 
const nombreUsuario = localStorage.getItem("nombreUsuario");
  
if (nombreUsuario) {
    const loginLink = document.getElementById("login-link");
    loginLink.innerHTML = `¡Bienvenido, ${nombreUsuario}! <button onclick="cerrarSesion()">Cerrar sesión</button>`;
}


function cerrarSesion() {
    localStorage.removeItem("nombreUsuario");
    localStorage.removeItem("idUsuario");
    window.location.href = "./pages/login.html"; 
}



//Seccion de electronica



       