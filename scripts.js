// Example of dynamic product loading and form submission handling

document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { img: 'images/7.jpg', title: 'Fresh Fruits' },
        { img: 'images/13.jpg', title: 'Organic Vegetables' },
        // Add more products as needed
    ];

    const productGallery = document.querySelector('.product-gallery');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.title}">
            <p>${product.title}</p>
        `;
        productGallery.appendChild(productDiv);
    });

    // Form submission handling (just a placeholder)
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message!');
        form.reset();
    });
});
