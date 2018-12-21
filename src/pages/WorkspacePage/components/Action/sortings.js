import { ANIMATION_TIME } from './constants';
import delay from 'delay/index';
/***
 *
 * Sortings:
 * V Bubble sort
 * V Selection sort
 * 2 Insertation sort
 * 3 Merge sort
 * 4 Quick sort
 * 4 Random quick sort
 * 5 Counting sort
 * 6 Radix sort
 *
 */


export const bubbleSort = (a) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < a.length - 1; i++) {
      if (a[i] > a[i + 1]) {
        a.swap(i, i + 1);
        swapped = true;
      }
    }
  } while (swapped);
  return a;
};

const selectSort = async (a) => {
  const { length } = a;
  let minInd = 0;
  for (let i = 0; i < length; i++) {
    minInd = i;
    for (let j = i + 1; j < length; j++) {
      if (a[j] < a[minInd]) {
        minInd = j;
      }
    }
    a.swap(i, minInd);
  }
};

