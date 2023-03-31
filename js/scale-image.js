import { editFormPopup } from './form.js';
const scaleSmaller = editFormPopup.querySelector('.scale__control--smaller');
const scaleBigger = editFormPopup.querySelector('.scale__control--bigger');
let scaleValue = editFormPopup.querySelector('.scale__control--value');

let scale = 100;



scaleSmaller.addEventListener('click', () => {
  if ((scale >= 25) && (scale <= 100)) {
    scale -= 25;
  }
  scaleValue.value = `${scale}%`;
});

scaleBigger.addEventListener('click', () => {
  if ((scale >= 0) && (scale <= 75)) {
    scale += 25;
  }
  scaleValue.value = `${scale}%`;
});
