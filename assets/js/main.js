"use strict";
class ImageItem {
    constructor(imageUrl, imageTitle, imageDescription) {
        this.imageUrl = imageUrl;
        this.imageTitle = imageTitle;
        this.imageDescription = imageDescription;
        this._id = ++ImageItem._count;
    }
}

ImageItem._count = 0;
let images = ["image.jpg", "image1.jpg"];
let selectedImage;
let btnA = document.querySelector("#DogFaceBtnA");
let btnB = document.querySelector("#DogFaceBtnB");
let ArrowL = document.querySelector("#ArrowLeft");
let ArrowR = document.querySelector("#ArrowRight");
let img = document.querySelector("#avatar");
const descript = document.querySelector("#resultOutPut");

function AfficherDescription() {
    descript.innerHTML = `<h5>isn't it a cute dog?</h5>`
}

function Afficherimg() {
    images.forEach(selectedImage => {
        //console.log(eleve.nom);
        img.innerHTML = images.indexOf(selectedImage);
    });

}

btnA.addEventListener("click", ()=>{
    AfficherDescription()
    Afficherimg()
})

btnB.addEventListener("click", ()=>{
    AfficherDescription()

})

