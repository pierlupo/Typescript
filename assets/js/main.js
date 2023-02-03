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
let images = [];
let selectedImage;
let btnA = document.querySelector("#DogFaceBtnA");
let btnB = document.querySelector("#DogFaceBtnB");
let ArrowL = document.querySelector("#ArrowLeft");
let ArrowR = document.querySelector("#ArrowRight");
const descript = document.querySelector("resultOutPut");

btnA.addEventListener("click", ()=>{
    console.log("clic");
})