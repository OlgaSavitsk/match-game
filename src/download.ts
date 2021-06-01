// save with canvas
const canvas = document.createElement('canvas');
const download = document.querySelector('.form__button_disabled');
const imageContainer = document.querySelector('img') as HTMLImageElement;
const cancel = document.querySelector('form__button_disabled');

const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
const image = imageContainer;

fileInput.addEventListener('change', e => {
  // const fileInputa = fileInput as HTMLInputElement
  // const file = fileInput.files[0];
  if (fileInput) {
    // const file = fileInput.files[0];
    console.log(fileInput.files);
  }
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    // imageContainer.src = reader.result;
    imageContainer.innerHTML = '';
    imageContainer?.append(img);
  };
  // reader.readAsDataURL(file);
});
