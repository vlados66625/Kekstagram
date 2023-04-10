const errorBlockTime = 5000;

const isEscapeKey = (evt) => evt.key === 'Escape';

export { isEscapeKey };

export const errorBlock = (errorText) => {
  const errorFragment = document.createElement('div');
  errorFragment.style.zIndex = '100';
  errorFragment.style.position = 'absolute';
  errorFragment.style.left = '0';
  errorFragment.style.top = '0';
  errorFragment.style.right = '0';
  errorFragment.style.padding = '10px 3px';
  errorFragment.style.fontSize = '30px';
  errorFragment.style.lineHeight = '35px';
  errorFragment.style.textAlign = 'center';
  errorFragment.style.backgroundColor = 'red';

  errorFragment.textContent = errorText;

  document.body.append(errorFragment);

  setTimeout(() => {
    errorFragment.remove();
  }, errorBlockTime);
};

