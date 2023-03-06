export default class Section {
  constructor({items, renderer}, containerSelector) {
    this._renderedItems = items;
    this._rendered = renderer;
    this._container = containerSelector;
  }

  renderer() {
    this._renderedItems.forEach(item => {
      this._rendered(item);
    });
  }

  addItem(element) {
    this._container.append(element);
  }
}
