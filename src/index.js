import { getAPIData } from "./getAPIData";
import { getBreedImages } from "./getBreedImages";
import { decreasePageAndImageNumber, increasePageAndImageNumber } from "./changePageAndImageNumber";
import { renderBreeds } from "./renderBreeds";
import { underlineCurrentBreed } from "./underlineCurrentBreed";
import { pageNumber } from "./underlineCurrentBreed"
import { renderImageOfLastBreed } from "./renderImageOfLastBreed";

console.log("JavaScript - Dogs App");

if (!localStorage.getItem("name") || !localStorage.getItem("password")) {
  window.location = "/login.html";
}

window.addEventListener("load", () => {
    getAPIData('https://dog.ceo/api/breeds/list/all', renderBreeds);

    if(localStorage.getItem("breed") && localStorage.getItem("index")) {
        const localStorageBreed = localStorage.getItem("breed");
        getAPIData(`https://dog.ceo/api/breed/${localStorageBreed}/images`, renderImageOfLastBreed);
    }
});

document.addEventListener("click", (event) => {
    const target = event.target;
    if(!target.classList.contains("breed")) {
        return;
    }
    underlineCurrentBreed(target);
    getBreedImages(target.innerHTML);

    localStorage.setItem("breed", target.innerHTML);
    localStorage.setItem("index", pageNumber.innerHTML - 1);
});

document.getElementById("forward").addEventListener("click", () => {
    if(localStorage.getItem("breed") && localStorage.getItem("index")) {
        increasePageAndImageNumber();
    }
});

document.getElementById("backward").addEventListener("click", () => {
    if(localStorage.getItem("breed") && localStorage.getItem("index")) {
        decreasePageAndImageNumber();
    }
});

document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem("name");
    localStorage.removeItem("password");
    localStorage.removeItem("breed");
    localStorage.removeItem("index");
    window.location = "/";
});

