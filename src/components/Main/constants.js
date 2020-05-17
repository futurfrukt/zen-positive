import { getRandomInt } from '../../utils';

const phrases = [
  'Всё получится',
  'Ты всё успеешь',
  'Ты справишься',
  'Улыбнись себе',
  'Посмотри в окно',
  'Посмотри в окно',
];
let maxLen = phrases.reduce((acc, str) => str.length > acc ? str.length : acc, 0);
if (maxLen % 2 !== 0) {
  maxLen += 1;
}

export const CHAR_SPACER = '_';
export const LINES = phrases.reduce((acc, str) => {
  if (str.length % 2 !== 0) {
    str += CHAR_SPACER;
  }
  const padding = CHAR_SPACER.repeat(Math.ceil((maxLen - str.length) / 2));
  acc.push(
    (padding + str + padding).replace(/\s/g, CHAR_SPACER)
  );
  return acc;
}, []);

export const INITIAL_LINE = LINES[getRandomInt(LINES.length)];
export const RELOAD_DELAY = 10000;
export const ANIMATION_MAX_TIME = 6000;
export const ANIMATION_MIN_TIME = 3000;