export default class Section {
  constructor({ items, renderer }, container) {
    this._renderedItems = items;
    this._rendered = renderer;
    this._container = container;
  }

  renderer() {
    this._renderedItems.forEach(item => {
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
