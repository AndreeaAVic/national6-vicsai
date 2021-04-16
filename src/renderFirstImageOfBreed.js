export const breedImage = document.getElementById("breed-image");
export let imagesArray;

export function renderFirstImageOfBreed(response) {
    imagesArray = response.message;
    breedImage.src = imagesArray[0];  
}