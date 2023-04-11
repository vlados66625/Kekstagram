import { createPicture } from './picture.js';
import { bigPictureOpen } from './rendering-full-photo.js';
import { uploadFileInput, openForm } from './form.js';
import { getData } from './api.js';

const picturesFragment = document.createDocumentFragment();

export const listPictures = document.querySelector('.pictures');

const handleClickImage = (dataPhoto) => {
  bigPictureOpen(dataPhoto);
};

getData()
  .then((data) => {
    data.forEach((dataInfo) => {
      const newPhoto = createPicture(dataInfo, handleClickImage);
      picturesFragment.append(newPhoto);
    });
    listPictures.append(picturesFragment);
  });

uploadFileInput.addEventListener('change', openForm);
