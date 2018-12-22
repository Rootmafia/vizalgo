import delay from 'delay';
import { buildArray } from './List';
import { ANIMATION_TIME } from '../constants';
import { bubbleSort } from '../sortings';

export const execute = async (val, { setActive, setValue }) => {
  let result = [];
  const a = buildArray([2, 3, 4, 9, 1, 5, 10], { setActive, setValue }, result);

  bubbleSort(a);
  console.log(result);
};
