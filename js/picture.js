const pictureHtml = document.querySelector('#picture')
  .content
  .querySelector('.picture');


export function createPicture({ id, url, likes, comments, description }, handleClickImage) {
  const pictureElement = pictureHtml.cloneNode(true);
  const pictureImage = pictureElement.querySelector('.picture__img');
  pictureImage.src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;

  pictureImage.addEventListener('click', () => handleClickImage({ id, url, likes, comments, description }));

  return pictureElement;
}


