class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      throw new Error('Building is an abstract class and cannot be instantiated directly');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  // Abstract method that should be overridden in subclasses
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
