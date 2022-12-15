let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form-edit');
let btnEdit = document.querySelector('.profile__button-edit');
let btnClose = document.querySelector('.popup__button-close');
let nameInput = document.querySelector('.popup__input_user_name');
let jobInput = document.querySelector('.popup__input_user_job');
let userName = document.querySelector('.profile__user-name');
let userJob = document.querySelector('.profile__user-profession');

function formResetProfile() {
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
};

function openForm() {
  popup.classList.add('popup_opened');
  formResetProfile();
};

function closeForm() {
  popup.classList.remove('popup_opened');
};

btnEdit.addEventListener('click', openForm);
btnClose.addEventListener('click', closeForm);

function formSubmitHandler(evt) {
  evt.preventDefault();

  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  closeForm();
};

formElement.addEventListener('submit', formSubmitHandler);
