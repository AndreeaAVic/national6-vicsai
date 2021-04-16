import { getAPIData } from "./getAPIData";
import { renderFirstImageOfBreed } from "./renderFirstImageOfBreed";

export function getBreedImages(chosenBreed) {
    getAPIData(`https://dog.ceo/api/breed/${chosenBreed}/images`, renderFirstImageOfBreed);
}