
let dataInfo;

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

fetchData().then(() => {
    createCardsAllProducts();
})
