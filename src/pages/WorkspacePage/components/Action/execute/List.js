import uuid4 from 'uuid/v4';

const isNumber = (prop) => typeof prop !== 'symbol' && !isNaN(prop);

class Item {
  constructor(value) {
    this.value = value;
    this.id = uuid4();
  }

  valueOf(){
    return this.value
  }
}

/**
 * controls.setValue
 * controls.setActive
 */
export const buildArray = (arr, triggers, addActions = {}) => {
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
          return addActions[prop](obj);
        }

        if (isNumber(prop)) {
//          triggers.setActive([...obj][prop].id);
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
        if (value && value.id) {
          Reflect.set(obj, prop, value);
//          triggers.setValue(obj);
        } else {
          Reflect.set(obj, prop, new Item(value));
        }

        return true;
      }
    }
  );
};



