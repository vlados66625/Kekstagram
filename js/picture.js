import { descriptionPhotoAll } from './description-photo.js';

const listPictures = document.querySelector('.pictures');
const pictureHtml = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const picturesFragment = document.createDocumentFragment();

descriptionPhotoAll.forEach(({ id, url, description, likes, comments }) => {
  const pictureElement = pictureHtml.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;

  picturesFragment.appendChild(pictureElement);
});

listPictures.appendChild(picturesFragment);
