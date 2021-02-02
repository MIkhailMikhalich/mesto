 class Section
{
  constructor (items,container)
  {
    this._items=items;
    this._container=container;

  }

  addItem(item)
  {
    this._container.prepend(item);
  }

  _renderer()
  {
    this._items.forEach(element => { addItem(element) });
  }

}

export {Section};
