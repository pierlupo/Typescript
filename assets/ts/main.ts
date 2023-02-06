import ImageItem from "./classes/ImageItem.js";

const imageEl = document.querySelector("#movingPicture") as HTMLImageElement;
const imageCaptionEl = document.querySelector("#imageCaption") as HTMLParagraphElement;
const imagesSelectorEl = document.querySelector("#picturesSelector") as HTMLDivElement;
const btn1 = document.querySelector("#prevButton") as HTMLButtonElement;
const btn2 = document.querySelector("#nextButton") as HTMLButtonElement;

const images: ImageItem[] = [
  new ImageItem(
    "./assets/img/image.jpg",
    "Ugly Dog Face A",
    "Photo of sort of a dog ... "
  ),
  new ImageItem(
    "./assets/img/image1.jpg",
    "Ugly Dog Face B",
    "Photo of sort of another Dog ... "
  ),
  new ImageItem(
    "./assets/img/image2.jpeg",
    "Ugly Dog Face C",
    "Photo of sort of another Dog again ... "
  ),
  new ImageItem(
    "./assets/img/image3.webp",
    "Ugly Dog Face C",
    "Photo of sort of another Dog again ... "
  ),
];

let selectedPicture: ImageItem = images[0];

const renderSelector = () => {
  imagesSelectorEl.innerHTML = "";
  images.forEach((image) => {
    const newButton = document.createElement('button')
    newButton.className = selectedPicture === image ? "btn btn-info w-100 p-2 px-4 my-1" : "btn btn-outline-info w-100 p-2 px-4 my-1";
    newButton.textContent = image.imageAlt
    newButton.addEventListener('click', () => {
      selectedPicture = image;
      renderSelector();
    })

    imagesSelectorEl.appendChild(newButton);
  });

  imageEl.src = selectedPicture.imageSrc;
  imageEl.alt = selectedPicture.imageAlt;
  imageCaptionEl.textContent = selectedPicture.imageCaption;
};

btn1.addEventListener('click', () => {
  if (selectedPicture === images[0]) {
    selectedPicture = images[images.length - 1]
  } else {
    selectedPicture = images[images.indexOf(selectedPicture) - 1]
  }

  renderSelector();
})

btn2.addEventListener('click', () => {
  if (selectedPicture === images[images.length - 1]) {
    selectedPicture = images[0]
  } else {
    selectedPicture = images[images.indexOf(selectedPicture) + 1]
  }

  renderSelector();
})

renderSelector();