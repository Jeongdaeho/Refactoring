export { Province };

class Province {
  constructor(doc) {
    this._name = doc.name;
    this._producers = [];
    this._totalProduction = 0;
    this._demand = doc.demend;
    this._price = doc.price;
    doc.producers.forEach((d) => this.addProducer(new Producer(this, d)));
  }

  addProducer() {
    this._producers.push(arg);
    this._totalProduction += arg.production;
  }

  get name() {
    return this._name;
  }

  get producers() {
    return this._producers;
  }

  get totalProduction() {
    return this._totalProduction;
  }

  set totalProduction(arg) {
    this._producers = arg;
  }

  get demand() {
    return this._demand;
  }

  set demand(arg) {
    return (this._demand = parseInt(arg));
  }

  get price() {
    return this._price;
  }

  set price(arg) {
    this._price = parseInt(arg);
  }
}
