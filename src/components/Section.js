export default class Section {
  constructor({ renderer }, container) {
    this._rendered = renderer;
    this._container = container;
  }

  renderer(items) {
    this._items = items;
    this._items.forEach(item => {
      this._rendered(item);
    });
  }

  addItem(element) {
    this._container.append(element);
  }

  prependItem(element) {
    this._container.prepend(element)
  }
}
