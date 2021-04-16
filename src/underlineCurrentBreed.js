export const pageNumber = document.getElementById("page-number");

export function underlineCurrentBreed(currentBreed) {
    pageNumber.innerHTML = 1;
    const breedParagraphs = document.getElementsByClassName("breed");
    for(const breed of breedParagraphs) {
        breed.classList.remove("breed--selected"); 
    }
    currentBreed.classList.add("breed--selected");
}