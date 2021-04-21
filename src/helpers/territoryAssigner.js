const shuffle = (array) => {
  let arr = [...array];

  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const createLists = (array, number) => {
  return number;
};

module.exports = { shuffle, createLists };
