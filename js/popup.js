'use strict'

//popup
const mainWrapper = document.querySelector('.main');
const openPopupButtons = document.querySelectorAll('.popup__open');
const closePopupButtons = document.querySelectorAll('.popup__close');
const feedbackForm = document.getElementById('popup');
const confirmationForm = document.getElementById('popup_2')
const form = document.getElementById('feedback');

const popupOpen = (popupActive) => {
    popupActive.classList.add('open');
}
const popupClose = (popupActive) => {
    popupActive.classList.remove('open');
}

const closeClosestPopupForm = () => {
    for (let openPopupButton of openPopupButtons) {
        const popupName = openPopupButton.getAttribute('id').replace('#', '');
        const currentPopup = document.getElementById(popupName);

        currentPopup.addEventListener('click', (event) => {
            if (!event.target.closest('.popup-form')) {
                popupClose(currentPopup);
            }
        })

        currentPopup.addEventListener('touchstart', (event) => {
            if (!event.target.closest('.popup-form')) {
                popupClose(currentPopup);
            }
        })
    }
}

mainWrapper.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup__open')) {
        popupOpen(feedbackForm);
        closeClosestPopupForm();
    }
})

for (let closePopupButton of closePopupButtons) {
    closePopupButton.addEventListener('click', (event) => {
        popupClose(event.target.closest('.popup'));
        event.preventDefault;
    });
}

const sendData = () => {
        fetch('https://httpbin.org/post', {
                method: 'POST',
                body: new FormData(feedback)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log(err));
        form.reset();
        popupClose(feedbackForm);
        popupOpen(confirmationForm);
}

document.querySelector('#feedback').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('form submit');
    sendData();
})