import { breedImage, imagesArray } from "./renderFirstImageOfBreed";
import { pageNumber } from "./underlineCurrentBreed";

export function increasePageAndImageNumber() {
    pageNumber.innerHTML++;
    if(pageNumber.innerHTML > imagesArray.length) {
        pageNumber.innerHTML = imagesArray.length;
        return;
    } else {
        breedImage.src = imagesArray[pageNumber.innerHTML - 1];
        localStorage["index"] = pageNumber.innerHTML - 1;
    }
}

export function decreasePageAndImageNumber() {
    pageNumber.innerHTML--;
    if(pageNumber.innerHTML <= 0) {
        pageNumber.innerHTML = 1;
        return;
    } else {
        breedImage.src = imagesArray[pageNumber.innerHTML - 1];
        localStorage["index"] = pageNumber.innerHTML - 1;
    }
}