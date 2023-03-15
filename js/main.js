const numberPhoto = 25;
let identifier;
let identifierComment;
const ID = [];
const IDComment = [];

const descriptions = [
  'Солнечный закат',
  'Цветущая природа',
  'Горячий кофе',
  'Снежный пейзаж',
  'Волшебный лес',
  'Туманный рассвет',
  'Грозовая туча',
  'Радужный дождь',
  'Рыба-клоун аквариума',
  'Красивый океан',
  'Закрытый цветок',
  'Мягкие облака',
  'Луч солнца',
  'Темный лес',
  'Золотая осень',
  'Белый снег',
  'Бушующее море',
  'Закатный огонь',
  'Черный кошелек',
  'Розовое облако',
  'Лунная ночь',
  'Радужный водопад',
  'Солнечный цветок',
  'Пышный ландшафт',
  'Зеленый луг'
];

const names = [
  'Анна',
  'Борис',
  'Владимир',
  'Галина',
  'Дмитрий',
  'Евгений',
  'Жанна',
  'Зинаида',
  'Ирина',
  'Кирилл',
  'Любовь',
  'Мария',
  'Никита',
  'Ольга',
  'Петр',
  'Роман',
  'Светлана',
  'Татьяна',
  'Ульяна',
  'Федор',
  'Христина',
  'Цветана',
  'Юлия',
  'Яков',
  'Яна'
];

const commentText = [
  'Всё отлично!',
  'В целом всё неплохо.',
  'Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

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

console.log(descriptionPhotoAll);
// console.log(getIdentifier);
