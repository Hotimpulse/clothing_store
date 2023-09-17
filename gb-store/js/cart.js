// cart items counter styling
const cardItemNumber = document.querySelector('.cart__cart-item');

let loadCartCounter = () => {
    let leftPanel = document.querySelector('.cart__left-panel');
    let counter = leftPanel.children.length - 1;
    if (leftPanel.children.length >= 1) {
        cardItemNumber.innerText = counter;
    }
    cardItemNumber.style.display = `flex`;
    cardItemNumber.style.textAlign = `center`;
    cardItemNumber.style.justifyContent = `center`;
    cardItemNumber.style.alignItems = `center`;
    cardItemNumber.style.width = `20px`;
    cardItemNumber.style.height = `20px`;
    cardItemNumber.style.background = `#f26376`;
    cardItemNumber.style.borderRadius = `1rem`;
    cardItemNumber.style.color = `white`;
    cardItemNumber.style.fontWeight = `600`;
    cardItemNumber.style.position = `absolute`;
    cardItemNumber.style.top = `-0.5rem`;
    cardItemNumber.style.right = `-1rem`;
}

document.addEventListener('DOMContentLoaded', loadCartCounter);

window.addEventListener('resize', () => {
    if (window.visualViewport.width > 768) {
        cardItemNumber.style.display = `flex`;
    } else {
        cardItemNumber.style.display = `none`;
    }
});

// adding an item to the cart block on the main page

async function fetchDataFromServer() {
    try {
        const respone = await fetch('./js/cartItem.json');
        if (!respone.ok) {
            throw new Error(`Error getting data from the server`);
        }
        const data = await respone.json();
        return data;
    } catch (error) {
        console.error(`Error fetching data:`, error);
        throw error;
    }
}

setTimeout(() => {
    let addToCartBtns = document.querySelectorAll('.products__add-to-cart, .add-to-cart, .catalog__add-to-cart');
    let additionalInfoBlock = document.querySelector('.additional-info');

    let cartWrapper = document.createElement('div');
    cartWrapper.setAttribute('id', 'extra-cart-wrapper');
    cartWrapper.style.display = `none`;
    let heading = document.createElement('h2');
    heading.setAttribute('id', 'extra-cart-heading');
    heading.innerText = `Cart Items`;
    cartWrapper.appendChild(heading);

    function removeItems(cartItem) {
        cartItem.remove();

        if (cartWrapper.querySelectorAll('.cart__card').length === 0) {
            cartWrapper.style.display = `none`;
        }
    }

    addToCartBtns.forEach(btn => btn.addEventListener('click', async () => {
        try {
            const data = await fetchDataFromServer();

            let card = btn.closest('.featured-card');
            let picture = card.querySelector('img').getAttribute('src');

            const selectedItem = data.find(item => item.picture === picture);

            if (selectedItem) {
                let cartItem = document.createElement('div');
                cartItem.classList.add('cart__card');
                cartItem.innerHTML = `
                    <img class="cart__img" src="${selectedItem.picture}" alt="Product Image">
                    <div class="cart__info-wrapper">
                        <span class="cart__item_name">${selectedItem.itemName}</span>
                        <span class="cart__item_price">Price: 
                            <span class="cart__item_price_number">$${selectedItem.price}</span>
                        </span>
                        <span class="cart__item_color">Color: 
                            <span class="cart__item_price_text">${selectedItem.color}</span>
                        </span>
                        <span class="cart__item_size">Size: 
                            <span class="cart__item_price_text">${selectedItem.size}</span>
                        </span>
                        <div class="cart__item_quantity-wrapper">
                            <span class="cart__item_quantity">Quantity:</span>
                            <input class="cart__item_quantity_input" type="number" placeholder="2" readonly>
                        </div>
                    </div>
                    <span class="cart__item_cross"></span>
                `;

                cartItem.querySelector('.cart__item_cross').addEventListener('click', () => {
                    removeItems(cartItem);
                })

                cartWrapper.appendChild(cartItem);
                cartWrapper.style.display = `flex`;
            }
        } catch (error) {
            console.error(`Error adding item to cart:`, error);
        }
    }));

    additionalInfoBlock.insertAdjacentElement('afterend', cartWrapper);
}, 110);
