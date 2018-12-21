import delay from 'delay';
import { buildArray } from './List';
import { ANIMATION_TIME } from '../constants';

export const execute = async (val, { setActive, setValue }) => {
  const a = buildArray([2, 3, 4, 9, 1, 5, 10], { setActive, setValue }, {
    swap: (obj) => (from, to) => {
      console.log(from, to, obj);
      let copy = [...obj];
      setActive([copy[from].id, copy[to].id]);
      setTimeout(() => {
        obj[from] = copy[to];
        obj[to] = copy[from];
        setValue(obj);
        setTimeout(() => {
          setActive(null);
        }, ANIMATION_TIME);
      }, ANIMATION_TIME);
    }
  });
//  console.log(arr);
//  await delay(ANIMATION_TIME);
//  console.log(arr[0]);
//  await delay(ANIMATION_TIME);
//  console.log(arr[1]);
//  console.log(arr.reverse())
//  await delay(ANIMATION_TIME);

//  setActive(arr);

  await delay(ANIMATION_TIME);
//  setValue(arr);
//  await delay(ANIMATION_TIME);
//  setValue(arr.reverse());

//  Bubble Sort
//  var swapped;
//  do {
//    swapped = false;
//    for (var i = 0; i < a.length - 1; i++) {
//      if (a[i] > a[i + 1]) {
//        await delay(ANIMATION_TIME);
//        a.swap(i, i + 1);
//        await delay(ANIMATION_TIME * 3);
//        swapped = true;
//      }
//    }
//  } while (swapped);


  var minIdx, temp,
    len = a.length;
  for(var i = 0; i < len; i++){
    minIdx = i;
    for(var  j = i+1; j<len; j++){
      if(a[j]<a[minIdx]){
        minIdx = j;
      }
    }
    a.swap(i, minIdx);
    await delay(ANIMATION_TIME * 3);
  }
};
