class Currency {
  constructor(code, name) {
    this._code = this.code;
    this._name = this.name
  }

  // Getter and Setter for code
  get code() {
    return this._code;
  }

  set code(code) {
    this._code = this.code;
  }

  // Getter and Setter for name
  get name() {
    return this._name;
  }

  set name(name) {
    this._name = this.name;
  }

  // Method to display the full currency
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

export default Currency;
