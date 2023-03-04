// block banner
new Swiper('.banner__slider', {
    navigation: {
        nextEl: '.banner__nav-button_next',
        prevEl: '.banner__nav-button_prev'
    },
    pagination: {
        el: '.banner__pagination',
        clickable: true
    }

});

// block products
const getData = () => {
    fetch("../data/shampoo.json")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayCards(data);
        })
        .catch(err => {
            console.err(err)
        });
};

const displayCards = (data) => {
    for (let i = 0; i < 4; i++) {

    const productCard = document.createElement('div');
    const pictureCard = document.createElement('img');
    const titleCard = document.createElement('h4');
    const infoText = document.createElement('p');
    const ingredientsWrapper = document.createElement('div');
    const subtitleText = document.createElement('p');
    const listText = document.createElement('p');
    const sizeWrapper = document.createElement('div');
    const sizeTitle = document.createElement('p');
    const size1 = document.createElement('div');
    const size2 = document.createElement('div');
    const size3 = document.createElement('div');
    const buyButton = document.createElement('button');

    productCard.classList.add('products__product-card');
    titleCard.classList.add('products__card-title');
    infoText.classList.add('products__card-info');
    ingredientsWrapper.classList.add('products__ingredients');
    subtitleText.classList.add('products__card-subtitle');
    listText.classList.add('products__card-info');
    sizeWrapper.classList.add('products__size');
    sizeTitle.classList.add('products__card-subtitle');
    size1.classList.add('products__size-option');
    size2.classList.add('products__size-option');
    size3.classList.add('products__size-option');
    buyButton.classList.add('products__button-buy');

    productCard.append(pictureCard);
    productCard.append(titleCard);
    productCard.append(infoText);
    productCard.append(ingredientsWrapper);
    productCard.append(sizeWrapper);

    ingredientsWrapper.append(subtitleText);
    ingredientsWrapper.append(listText);

    sizeWrapper.append(sizeTitle);
    sizeWrapper.append(size1);
    sizeWrapper.append(size2);
    sizeWrapper.append(size3);
    sizeWrapper.append(buyButton);

    pictureCard.src = data[i].img;
    titleCard.textContent = data[i].name;
    infoText.textContent = data[i].about;
    subtitleText.textContent = 'Состав:';
    listText.textContent = data[i].ingredients;
    sizeTitle.textContent = 'Фасовка:';
    size1.textContent = data[i].size1;
    size2.textContent = data[i].size2;
    size3.textContent = data[i].size3;
    buyButton.textContent = 'Купить';

    document.querySelector('.products__visible-wrapper').append(productCard);
    }
}

document.addEventListener("DOMContentLoaded", getData());


// <!-- <div class="products__product-card">
//     <img src="./images/block4_products" alt="">
//     <h4 class="products__card-title"></h4>
//     <p class="products__card-info"></p>
//     <div class="products__ingredients">
//         <p class="products__card-subtitle">Состав:</p>
//         <p class="products__card-info"></p>
//     </div>
//     <div class="products__size">
//         <p class="products__card-subtitle">Фасовка:</p>
//         <div class="products__size-option">1 л</div>
//         <div class="products__size-option">5 кг</div>
//         <div class="products__size-option">20 кг</div>
//         <button class="products__button-buy">Купить</button>
//     </div>
// </div> -->