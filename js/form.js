import { body } from './rendering-full-photo.js';
import { isEscapeKey } from './util.js';
export const uploadFileInput = document.querySelector('#upload-file');
export const editFormPopup = document.querySelector('.img-upload__overlay');
const closeFormButton = editFormPopup.querySelector('#upload-cancel');
const imgForm = document.querySelector('.img-upload__form');
const hashtag = imgForm.querySelector('.text__hashtags');
const commentPhoto = imgForm.querySelector('.text__description');

const hashtagValid = /^#[a-zа-яё0-9]{1,19}$/i;

const closesPressingEsc = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeForm();
  }
};

function closeForm() {
  editFormPopup.classList.add('hidden');
  body.classList.remove('modal-open');
  imgForm.reset();
  closeFormButton.removeEventListener('click', closeForm);
  document.removeEventListener('keydown', closesPressingEsc);
}

export const openForm = () => {
  editFormPopup.classList.remove('hidden');
  body.classList.add('modal-open');
  closeFormButton.addEventListener('click', closeForm);
  document.addEventListener('keydown', closesPressingEsc);

  const canselsHandlerEsc = (element) => {
    const stopAscentEsc = (evt) => {
      evt.stopPropagation();
    };

    const stopAscentEscFocus = () => {
      element.addEventListener('keydown', stopAscentEsc);
    };

    element.addEventListener('focus', stopAscentEscFocus);
    element.addEventListener('blur', element.removeEventListener('keydown', stopAscentEsc));
    element.removeEventListener('blur', stopAscentEscFocus);
    element.removeEventListener('focus', element.removeEventListener('keydown', stopAscentEsc));
  };

  canselsHandlerEsc(hashtag);
  canselsHandlerEsc(commentPhoto);
};

uploadFileInput.addEventListener('change', openForm);

const checksValidFormText = () => {
  let valid = true;
  const arrayHashtag = hashtag.value.trim().split(' ');
  arrayHashtag.forEach((hash) => {
    if (!hashtagValid.test(hash)) {
      valid = false;
    }
  });
  return valid;
};

const checksValidRepeat = () => {
  const arrayHashtag = hashtag.value.trim().split(' ');
  let valid = true;
  arrayHashtag.forEach((hash, index) => {
    for (let j = index; j < arrayHashtag.length - 1; j++) {
      if (hash === arrayHashtag[j + 1]) {
        valid = false;
        return;
      }
    }
  });
  return valid;
};

const checksValidQuantity = () => {
  const arrayHashtag = hashtag.value.trim().split(' ');
  if (arrayHashtag.length <= 5) {
    return true;
  }
  return false;
};

const pristine = new Pristine(imgForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

pristine.addValidator(
  hashtag,
  checksValidFormText,
  'Формат хэштега неверный'
);

pristine.addValidator(
  hashtag,
  checksValidRepeat,
  'Хэштеги не должны повторяться'
);

pristine.addValidator(
  hashtag,
  checksValidQuantity,
  'Хэштегов не должно быть больше 5'
);

pristine.addValidator(
  commentPhoto,
  'Максимальная длина комментария - 140 символов'
);

