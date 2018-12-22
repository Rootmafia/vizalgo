import delay from 'delay';
import { buildArray } from './List';
import { ANIMATION_TIME } from '../constants';
import { bubbleSort, selectSort } from '../sortings';

export const execute = async (val, { setActive, setValue }) => {
  let result = [];
  const a = buildArray([...Array(40)].map((_, i) => i).reverse(), { setActive, setValue }, result);

  await selectSort(a);
  for (let item of result) {
    if (item.type === 'GET') {
      setActive(item.activeElement);
      await delay(ANIMATION_TIME);
    } else {
      setValue(item.nextValue);
      await delay(ANIMATION_TIME);
    }
  }
  setActive(null);

  console.log(result);
};
