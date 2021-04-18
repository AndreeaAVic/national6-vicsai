import _ from "lodash";

export const pageNumber = document.getElementById("page-number");

export function underlineCurrentBreed(currentBreed) {
    pageNumber.innerHTML = 1;
    const breedParagraphs = document.getElementsByClassName("breed");
    _.forEach(breedParagraphs, (element) => {
        element.classList.remove("breed--selected");
    });
    currentBreed.classList.add("breed--selected");
}