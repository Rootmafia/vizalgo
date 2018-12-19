import isNumber from 'lodash/isNumber';

export class List {
  constructor(arr, initial = true, controls) {
    if (initial) {
      return new Proxy(new List(arr, false, controls), {
        get: function (obj, prop) {
          if (isNumber(prop)) {
            console.log(`GET VALUE ${prop}`);
            return obj.values[prop];
          }

          if (prop in Object.getOwnPropertyNames(List.prototype)) {
            return obj[prop];
          }

          return obj[prop];
        }
      });
    }

    this.controls = controls;
    this.values = arr || [];
  }

  swap(x, y) {
    const tmp = this.values[x];
    this.values[x] = this.values[y];
    this.values[y] = tmp;
  }

  * [Symbol.iterator]() {
    for (let i = 0; i < this.values.length; i++) {
      console.log(`GET VALUE ${i}`);
      yield this.values[i];
    }
  }
}
