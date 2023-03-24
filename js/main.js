"use strict";
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

const getData = (path, block) => {
    fetch(`../data/${path}.json`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            switch (block) {
                case 'visible':
                    displayCards(data, document.getElementById(`${path}-wrapper-visible`), 0, 4);
                    break;
                case 'shampoo-collapsible':
                    displayCards(data, document.getElementById('shampoo-wrapper-collapsible'), 4, 8);
                    break;
                case 'wax-visible':
                    displayCards(data, document.getElementById('wax-wrapper-visible'), 0, 3);
                    break;
                case 'special-collapsible':
                    displayCards(data, document.getElementById('special-wrapper-collapsible'), 4, 12);
                    break;
            }
        })
        .catch(err => {
            console.log(err)
        });
};

const displayCards = (data, container, indexStart, indexEnd) => {
    container.innerHTML = '';

    for (let i = indexStart; i < indexEnd; i++) {

        const productCard = document.createElement('div');
        const pictureWrapper = document.createElement('div');
        const pictureCard = document.createElement('img');
        const cardContent = document.createElement('div');
        const titleCard = document.createElement('h4');
        const infoText = document.createElement('div');
        const ingredientsWrapper = document.createElement('div');
        const subtitleText = document.createElement('p');
        const listText = document.createElement('p');
        const sizeWrapper = document.createElement('div');
        const sizeTitle = document.createElement('p');
        const size1 = document.createElement('div');
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
        buyButton.classList.add('products__button-buy', 'popup__open');

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

        pictureCard.src = data[i].img;
        titleCard.textContent = data[i].name;
        infoText.textContent = data[i].about;
        subtitleText.textContent = 'Состав:';
        listText.textContent = data[i].ingredients;
        sizeTitle.textContent = 'Фасовка:';
        size1.textContent = data[i].size1;
        buyButton.textContent = 'Купить';

        if (data[i].size2) {
            const size2 = document.createElement('div');
            size2.classList.add('products__size-option');
            sizeWrapper.append(size2);
            size2.textContent = data[i].size2;
        }

        if (data[i].size3) {
            const size3 = document.createElement('div');
            size3.classList.add('products__size-option');
            sizeWrapper.append(size3);
            size3.textContent = data[i].size3;
        }

        if (data[i].about_more) {
            infoText.textContent += '...';
            const buttonReadMore = document.createElement('button');
            buttonReadMore.classList.add('products__button-read-more');
            buttonReadMore.innerText = 'Читать далее'
            infoText.append(buttonReadMore);

            buttonReadMore.addEventListener('click', () => {
                const resultString = infoText.textContent.replace('...Читать далее', '');
                infoText.textContent = `${resultString}${data[i].about_more}`;
            });
        }

        sizeWrapper.append(buyButton);

        container.append(productCard);
    }

    if (indexStart === 4) {
        showCollapsible(container);
    }
}

const showCollapsible = (container) => {
    if (container.style.maxHeight) {
        container.style.maxHeight = null;
        container.style.overflow = 'hidden';
    } else {
        container.style.maxHeight = `${container.scrollHeight * 1.5}px`;
        container.style.overflow = 'visible';
    }
}

document.addEventListener("DOMContentLoaded", getData('shampoo', 'visible'));
document.addEventListener("DOMContentLoaded", getData('wax', 'wax-visible'));
document.addEventListener("DOMContentLoaded", getData('special', 'visible'));

document.getElementById('shampoo-button-more').addEventListener('click', () => {
    document.getElementById('shampoo-button-more').style.display = 'none';
    getData('shampoo', 'shampoo-collapsible');
});
document.getElementById('special-button-more').addEventListener('click', () => {
    document.getElementById('special-button-more').style.display = 'none';
    getData('special', 'special-collapsible');
});


const smoothScroll = () => {
    const links = document.querySelectorAll('.menu-link')

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault()
            const section = document.querySelector(link.getAttribute('href'))

            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "center",
            });
        })
    })
}

smoothScroll()


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