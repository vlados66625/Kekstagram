// 1 функция
const countsLength = function (text, characters) {
  if (text.length <= characters) {
    return true;
  }

  return false;
};

// 2 функция
const checksPolyndrome = function (text) {
  text = text.replaceAll(' ', '');
  let textReverce = '';
  for (let i = 1; i <= text.length; i++) {
    textReverce = textReverce + text.at(-i);
    if (text === textReverce) {
      return true;
    }
  }
  return false;
};

// 3 функция
const extractsNumbers = function (text) {
  if (typeof text === 'number') {
    return text;
  }
  let numberNotext = '';
  for (let i = 0; i < text.length; i++) {
    if (typeof Number(text[i]) === 'number' && isFinite(text[i])) {
      numberNotext = numberNotext + text[i];
    }
  }
  numberNotext = numberNotext.replaceAll(' ', '');
  return numberNotext;
};

// 4 функция
const addLetters = function (initialCharacter, minLenght, addLine) {
  if (initialCharacter.length >= minLenght) {
    return initialCharacter;
  }
  const supplement = minLenght - initialCharacter.length;
  const nAddLine = Math.floor(supplement / addLine.length);
  let nAddLineText = '';
  for (let i = 1; i <= nAddLine; i++) {
    nAddLineText += addLine;
  }
  const textSupplement = addLine.slice(0, supplement % addLine.length) + nAddLineText;

  return textSupplement + initialCharacter;
};


