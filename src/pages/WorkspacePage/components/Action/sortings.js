import { ANIMATION_TIME } from './constants';
import delay from 'delay/index';

/***
 * Sortings:
 * V Bubble sort
 * V Selection sort
 * 2 Insertation sort
 * 3 Merge sort
 * 4 Quick sort
 * 4 Random quick sort
 * 5 Counting sort
 * 6 Radix sort
 */

/**
 * @docs https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/bubble-sort
 * @return {*}
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


/**
 * @docs https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/selection-sort
 * @return {*}
 */
export const selectSort = async (a) => {
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

/**
 * @docs https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/insertion-sort
 * TODO FINISH IT
 */
export const insertSort = (originalArray) => {
  const array = [...originalArray];

  // Go through all array elements...
  for (let i = 0; i < array.length; i += 1) {
    let currentIndex = i;

    // Call visiting callback.
    this.callbacks.visitingCallback(array[i]);

    // Go and check if previous elements and greater then current one.
    // If this is the case then swap that elements.
    while (
      array[currentIndex - 1] !== undefined
      && this.comparator.lessThan(array[currentIndex], array[currentIndex - 1])
      ) {
      // Call visiting callback.
      this.callbacks.visitingCallback(array[currentIndex - 1]);

      // Swap the elements.
      const tmp = array[currentIndex - 1];
      array[currentIndex - 1] = array[currentIndex];
      array[currentIndex] = tmp;

      // Shift current index left.
      currentIndex -= 1;
    }
  }

  return array;
};
