import { descriptionPhotoAll } from './description-photo.js';
import { createPicture } from './picture.js';
import { bigPictureOpen } from './rendering-full-photo.js';

const picturesFragment = document.createDocumentFragment();

export const listPictures = document.querySelector('.pictures');

const handleClickImage = (dataPhoto) => {
  bigPictureOpen(dataPhoto);
};

descriptionPhotoAll.forEach((data) => {
  const newPhoto = createPicture(data, handleClickImage);
  picturesFragment.appendChild(newPhoto);
});

listPictures.appendChild(picturesFragment);
