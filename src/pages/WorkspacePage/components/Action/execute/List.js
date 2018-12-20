import isNumber from 'lodash/isNumber';

/**
 * controls.setActive
 */
export class List {
  constructor(arr, initial = true, { controls, delay }) {
    if (initial) {
      return new Proxy(new List(arr, false, { controls, delay }), {
        get: function (obj, prop) {
          if (isNumber(prop)) {
            this.controls.setActive(prop);
            return obj.values[prop];
          }

          if (prop in Object.getOwnPropertyNames(List.prototype)) {
            return obj[prop];
          }


          if (prop in Object.getOwnPropertyNames(Array.prototype)) {
            return this.values[prop];
          }



          return obj[prop];
        }
      });
    }

    this.delay = controls;
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
      this.controls.setActive(i);
      yield this.values[i];
    }
  }
}
