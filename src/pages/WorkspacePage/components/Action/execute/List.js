import uuid4 from 'uuid/v4';

const isNumber = (prop) => typeof prop !== 'symbol' && !isNaN(prop);

class Item {
  constructor(value) {
    this.value = value;
    this.id = uuid4();
    this.active = false;
  }

  valueOf() {
    return this.value;
  }
}

const swap = (obj) => (from, to) => {
  let temp = obj;
  obj[from] = obj[to];
  obj[to] = temp;
  console.log("SET", from, to)
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
          return addActions[prop](obj, triggers);
        }

        if (isNumber(prop)) {
          result.push({type: 'GET', index: prop});
          return obj[prop];
        }

        if (Object.keys(triggers).includes(prop)) {
          triggers[prop](obj);
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
        result.push({type: 'SET', index: prop});
        if (value && value.id) {
          Reflect.set(obj, prop, ({ ...value, active: false }));
        } else {
          Reflect.set(obj, prop, new Item(value));
        }

        return true;
      }
    }
  );
};





