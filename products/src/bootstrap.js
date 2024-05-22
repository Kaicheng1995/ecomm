import faker from 'faker';

const mount = (el) => {
    let products = '';

    for (let i = 0; i < 3; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }

    el.innerHTML = products;
};

// Context 1
// We are running this file in development in isolation
// We are using our local index.html file
// which DEFINITELY has an element with an id of 'dev-products'
// We want to immediately render our app into that element

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products');
    if (el) {
        mount(el);
    }
}

// Context 2
// We are running this file in development  or production through the HOST app
// No guarantee that an element with an id of 'dev-products' exists
// We DON'T want to immediately render the app

export { mount };