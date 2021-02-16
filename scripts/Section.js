 class Section
{
  constructor (container)
  {

    this._container=container;

  }

  addItem(item)
  {
    this._container.append(item);
  }
  addMyItem(item)
  {
    this._container.prepend(item);

  }
}

export {Section};
