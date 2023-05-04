export const deepClone = (array) => {
  return JSON.parse(JSON.stringify(array));
};

export const find = (array, id) => {
  return array.find((itemInArray) => itemInArray.id === id);
};

export const findIndex = (array, id) => {
  return array.findIndex((itemInArray) => itemInArray.id === id);
};

export const filter = (array, idOfItemToRemove) => {
  return array.filter((item) => item.id !== idOfItemToRemove);
};
