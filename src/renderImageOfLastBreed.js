import { breedImage, imagesArray } from "./renderFirstImageOfBreed";
import { pageNumber } from "./underlineCurrentBreed";

export function renderImageOfLastBreed(response) {
    imagesArray = response.message;
    const index = parseInt(localStorage.getItem("index"));
    breedImage.src = imagesArray[index];
    pageNumber.innerHTML = index + 1;
    underlineLastBreed();
}

function underlineLastBreed() {
    const breedFromLocalStorage = localStorage.getItem("breed");
    const breedList = document.getElementsByClassName("breed");
    for(const breedElement of breedList) {
        if(breedElement.innerHTML === breedFromLocalStorage) {
            breedElement.classList.add("breed--selected");
        }
    }
}