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

let collapsible = document.querySelector('.products__collapsible-wrapper');
const getData = (block) => {
    fetch("../data/shampoo.json")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            switch (block) {
                case 'visible':
                    displayCards(data, document.querySelector('.products__visible-wrapper'), 0, 4);
                    break;
                case 'collapsible':
                    displayCards(data, document.querySelector('.products__collapsible-wrapper'), 4, 8);
                    console.log('wo');
                    break;
            }
        })
        .catch(err => {
            console.log(err)
        });
};

const displayCards = (data, container, indexStart, indexEnd) => {
    collapsible.innerHTML = '';

    for (let i = indexStart; i < indexEnd; i++) {

        const productCard = document.createElement('div');
        const pictureWrapper = document.createElement('div');
        const pictureCard = document.createElement('img');
        const cardContent = document.createElement('div');
        const titleCard = document.createElement('h4');
        const infoText = document.createElement('p');
        const ingredientsWrapper = document.createElement('div');
        const subtitleText = document.createElement('p');
        const listText = document.createElement('p');
        const sizeWrapper = document.createElement('div');
        const sizeTitle = document.createElement('p');
        const size1 = document.createElement('div');
        const size2 = document.createElement('div');
        const buyButton = document.createElement('button');
        productCard.classList.add('products__product-card');
        pictureWrapper.classList.add('products__card-img');
        cardContent.classList.add('products__card-content')
        titleCard.classList.add('products__card-title');
        infoText.classList.add('products__card-info');
        ingredientsWrapper.classList.add('products__ingredients');
        subtitleText.classList.add('products__card-subtitle');
        listText.classList.add('products__card-info');
        sizeWrapper.classList.add('products__size');
        sizeTitle.classList.add('products__card-subtitle');
        size1.classList.add('products__size-option');
        size2.classList.add('products__size-option');
        buyButton.classList.add('products__button-buy');

        productCard.append(pictureWrapper);
        productCard.append(cardContent);

        pictureWrapper.append(pictureCard);

        cardContent.append(titleCard);
        cardContent.append(infoText);
        cardContent.append(ingredientsWrapper);
        cardContent.append(sizeWrapper);

        ingredientsWrapper.append(subtitleText);
        ingredientsWrapper.append(listText);

        sizeWrapper.append(sizeTitle);
        sizeWrapper.append(size1);
        sizeWrapper.append(size2);

        pictureCard.src = data[i].img;
        titleCard.textContent = data[i].name;
        infoText.textContent = data[i].about;
        subtitleText.textContent = 'Состав:';
        listText.textContent = data[i].ingredients;
        sizeTitle.textContent = 'Фасовка:';
        size1.textContent = data[i].size1;
        size2.textContent = data[i].size2;
        buyButton.textContent = 'Купить';

        if (data[i].size3) {
            const size3 = document.createElement('div');
            size3.classList.add('products__size-option');
            sizeWrapper.append(size3);
            size3.textContent = data[i].size3;
        }

        sizeWrapper.append(buyButton);

        container.append(productCard);
    }

    if (collapsible.style.maxHeight) {
        collapsible.style.maxHeight = null;
    } else {
        collapsible.style.maxHeight = `${collapsible.scrollHeight}px`;
    }
}

document.addEventListener("DOMContentLoaded", getData('visible'));
document.querySelector('.products__button-more').addEventListener('click', () => {
    // document.querySelector('.products__button-more').textContent = 'Свернуть';
    getData('collapsible')
});


// <!-- <div class="products__product-card">
//     <div class="products__card-img">
//         <img src="./images/block4_products" alt="">
//     </div> 
// <div class="products__card-content">
//     <h4 class="products__card-title"></h4>
//     <p class="products__card-info"></p>
//     <div class="products__ingredients">
//         <p class="products__card-subtitle">Состав:</p>
//         <p class="products__card-info"></p>
//     </div>
//     <div class="products__size">
//         <p class="products__card-subtitle">Фасовка:</p>
//         <div class="products__button-size">1 л</div>
//         <div class="products__button-size">5 кг</div>
//         <div class="products__button-size">20 кг</div>
//         <button class="products__button-buy">Купить</button>
//     </div>
// </div>
// </div> -->