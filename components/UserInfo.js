export default class UserInfo {
  constructor({ user }) {
    this._nameInput = document.querySelector(user.nameInput);
    this._aboutInput = document.querySelector(user.aboutInput);
    this._nameProfile = document.querySelector(user.name);
    this._aboutProfile = document.querySelector(user.about);
  }

  getUserInfo() {
    this._userValues = {};


    this._userValues[this._nameInput.name] = this._nameProfile.textContent;
    this._userValues[this._aboutInput.name] = this._aboutProfile.textContent;

    return this._userValues;
  }

  setUserInfo(formData) {
    this._nameProfile.textContent = formData.name;
    this._aboutProfile.textContent = formData.info;
  }
}
