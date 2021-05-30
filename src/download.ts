//save with canvas
const canvas = document.createElement('canvas');
const download = document.querySelector('.form__button_disabled');
const imageContainer: any = document.querySelector('img');
const cancel = document.querySelector('form__button_disabled')

const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
const image = imageContainer as HTMLImageElement;

fileInput.addEventListener('change', function(e) {
  //const fileInputa = fileInput as HTMLInputElement
 // const file = fileInput.files[0];
  if (fileInput) {
    //const file = fileInput.files[0];
    console.log(fileInput.files)
}
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    imageContainer.src = reader.result;
    imageContainer.innerHTML = '';
    imageContainer.append(img);
  }
 // reader.readAsDataURL(file);
});

/*
function drawImage() {
  const image = imageContainer as HTMLImageElement | null;
  const img: any = new Image();
  img.setAttribute('crossOrigin', 'anonymouse')
  let src:string =  img.src as string;
  img.src = image?.src;

  img.onload = function() {
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
      let link = document.createElement('a');
      link.download = 'download.png';
      link.href = canvas.toDataURL();
      link.click();
      link.delete;
  };
}
cancel?.addEventListener('click', drawImage)
 */
