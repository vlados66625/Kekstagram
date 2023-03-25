import {numberPhoto, descriptions, names,commentText} from './data.js';
import {getRandomInteger} from './random-integer.js';

let identifier;
let identifierComment;
const ID = [];
const IDComment = [];

const getIdentifier = () => {
  identifier = getRandomInteger(1, numberPhoto);
  if (ID.length > numberPhoto) {
    return 'фотограии кончились';
  }
  while (ID.includes(identifier)) {
    identifier = getRandomInteger(1, numberPhoto);
  }
  ID.push(identifier);
  return identifier;
};

const getIdentifierComment = () => {
  identifierComment = getRandomInteger(1, 1000);
  if (IDComment.length >= 1000) {
    return 'количество комментариев кончилось, очистите кэш';
  }
  while (IDComment.includes(identifierComment)) {
    identifierComment = getRandomInteger(1, numberPhoto);
  }
  IDComment.push(identifierComment);
  return identifierComment;
};

const commentsText = () => {
  let comment = '';
  if (getRandomInteger(1, 10) > 5) {
    comment += commentText[getRandomInteger(0, commentText.length - 1)];
    return comment;
  }
  const intermediateVar = getRandomInteger(0, commentText.length - 1);
  if (intermediateVar === commentText.length - 1) {
    comment += commentText[intermediateVar] + commentText[getRandomInteger(0, commentText.length - 2)];
    return comment;
  }
  comment += commentText[getRandomInteger(0, intermediateVar)] + commentText[intermediateVar + 1, commentText.length - 1];
  return comment;
};

const createComment = () => ({
  id: getIdentifierComment(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: commentsText(),
  name: names[getRandomInteger(0, names.length - 1)],
});

const descriptionPhoto = () => ({
  id: getIdentifier(),
  url: `photos/${String(identifier)}.jpg`,
  description: descriptions[identifier - 1],
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(1, 5)}, createComment)
});

const descriptionPhotoAll = Array.from({ length: numberPhoto }, descriptionPhoto);

export {descriptionPhotoAll};
