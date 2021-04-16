import { breedImage, imagesArray } from "./renderFirstImageOfBreed";
import { pageNumber } from "./underlineCurrentBreed";

export function renderImageOfLastBreed(response) {
    imagesArray = response.message;
    const index = parseInt(localStorage.getItem("index"));
    breedImage.src = imagesArray[index];
    pageNumber.innerHTML = index + 1;
}