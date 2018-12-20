import uuid from 'uuid/v4';

export const updateIdForList = (arr) => {
  return arr.map((e, i) => (e.id ? e : { ...e, id: `${e}${i}` }));
};
