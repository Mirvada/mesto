import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(name, link) {
    this._title = this._popupSelector.querySelector('.popup__viewer-title');
    this._img = this._popupSelector.querySelector('.popup__viewer-img');

    this._title.textContent = name;
    this._img.src = link;
    this._img.alt = name;

    super.open();
  }
}
