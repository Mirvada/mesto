let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form-edit');
let btnEdit = document.querySelector('.profile__button-edit');
let btnClose = document.querySelector('.popup__button-close');
let btnSave = document.querySelector('.popup__button');
let nameInput = document.querySelector('.popup__user-name');
let jobInput = document.querySelector('.popup__user-profession');
let userName = document.querySelector('.profile__user-name');
let userJob = document.querySelector('.profile__user-profession');

function formResetProfile() {
    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;
}

function formOpenClose(open, close) {
    open.addEventListener('click', function (event) {
        popup.classList.add('popup_opened');
        formResetProfile();
    });


    close.addEventListener('click', function (event) {
        popup.classList.remove('popup_opened');
    });
};

function formSubmitHandler(evt) {
    evt.preventDefault();

    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;

    popup.classList.remove('popup_opened');
};

formElement.addEventListener('keydown', function (event) {
    if (event.code == 'Enter') {
        popup.classList.remove('popup_opened');
    };
});

formElement.addEventListener('submit', formSubmitHandler);
formOpenClose(btnEdit, btnClose);

