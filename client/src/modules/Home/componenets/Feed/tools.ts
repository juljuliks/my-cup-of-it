import { shuffleArrayFunc } from './types';

const shuffleArray: shuffleArrayFunc = (array, n) => {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array.slice(0, n);
};

export default shuffleArray;
