import ImageItem from "./classes/imageItem";
const imageEl = document.querySelector("#movingPicture");
const imageCaptionEl = document.querySelector("#imageCaption");
const imagesSelectorEl = document.querySelector("#picturesSelector");
const images = [
    new ImageItem("./assets/img/image.jpg", "Dog Face A", "Photo of a Cute Dog"),
    new ImageItem("./assets/img/image1.jpg", "Dog Face B", "Photo of a Another Dog"),
];
let selectedPicture = images[0];
const renderSelector = () => {
    imagesSelectorEl.innerHTML = "";
    images.forEach((image) => {
        const newButton = document.createElement('button');
        newButton.className = selectedPicture === image ? "btn btn-info w-100 p-2 px-4 my-1" : "btn btn-outline-info w-100 p-2 px-4 my-1";
        newButton.textContent = image.imageAlt;
        newButton.addEventListener('click', () => {
            selectedPicture = image;
            renderSelector();
        });
        imagesSelectorEl.appendChild(newButton);
    });
    imageEl.src = selectedPicture.imageSrc;
    imageEl.alt = selectedPicture.imageAlt;
    imageCaptionEl.textContent = selectedPicture.imageCaption;
};
document.querySelector("#prevButton").addEventListener('click', () => {
    if (selectedPicture === images[0]) {
        selectedPicture = images[images.length - 1];
    }
    else {
        selectedPicture = images[images.indexOf(selectedPicture) - 1];
    }
    renderSelector();
});
document.querySelector("#nextButton").addEventListener('click', () => {
    if (selectedPicture === images[images.length - 1]) {
        selectedPicture = images[0];
    }
    else {
        selectedPicture = images[images.indexOf(selectedPicture) + 1];
    }
    renderSelector();
});
renderSelector();
