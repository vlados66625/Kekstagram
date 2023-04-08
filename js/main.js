import { createPicture } from './picture.js';
import { bigPictureOpen } from './rendering-full-photo.js';
import { uploadFileInput, openForm } from './form.js';
import './api.js';

const picturesFragment = document.createDocumentFragment();

export const listPictures = document.querySelector('.pictures');

const handleClickImage = (dataPhoto) => {
  bigPictureOpen(dataPhoto);
};

fetch('https://28.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    data.forEach((datas) => {
      const newPhoto = createPicture(datas, handleClickImage);
      picturesFragment.appendChild(newPhoto);
    });
  });

listPictures.appendChild(picturesFragment);

uploadFileInput.addEventListener('change', openForm);
