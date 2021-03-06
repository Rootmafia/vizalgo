import uuid4 from 'uuid/v4';

const isNumber = (prop) => typeof prop !== 'symbol' && !isNaN(prop);

class Item {
  constructor(value) {
    this.value = value;
    this.id = `id:${value}`;
    this.active = false;
  }

  valueOf() {
    return this.value;
  }
}

const swap = (obj, result) => (from, to) => {
  let temp = obj[from];
  result.push({ type: 'GET', activeElement: [obj[from].id, obj[to].id] });
  obj[from] = obj[to];
  obj[to] = temp;
  result.push({ type: 'SET', nextValue: [...obj] });
};

/**
 * controls.setValue
 * controls.setActive
 */
export const buildArray = (arr, triggers, result, addActions = { swap }) => {
  const values = arr.map(value => new Item(value));

  triggers.setValue(values);

  return new Proxy(
    new Array(...values),
    {
      /**
       *
       * @param obj
       * @param prop
       * @return {*}
       */
      get: function (obj, prop) {
        if (Object.keys(addActions).includes(prop)) {
          return addActions[prop](obj, result);
        }

        if (isNumber(prop)) {
          result.push({ type: 'GET', activeElement: obj[prop].id });
          return obj[prop];
        }

        return obj[prop];
      },
      /**
       *
       * @param obj
       * @param prop
       * @param value
       * @return {boolean}
       */
      set: function (obj, prop, value) {
        if (value && value.id) {
          Reflect.set(obj, prop, ({ ...value, active: false }));
        } else {
          Reflect.set(obj, prop, new Item(value));
        }

        result.push({ type: 'SET', nextValue: [...obj] });
        return true;
      }
    }
  );
};





