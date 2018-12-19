import uuid from 'uuid/v4';

export const updateIdForList = (arr) => {
  return arr.map(e => (e.id ? e : { ...e, id: uuid() }));
};
