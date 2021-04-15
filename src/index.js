import { getAPIData } from "./getAPIData";

console.log("JavaScript - Dogs App");

if (!localStorage.getItem("name") || !localStorage.getItem("password")) {
  window.location = "/login.html";
}

const pageNumber = document.getElementById("page-number");
const breedImage = document.getElementById("breed-image");
let imagesArray;

window.addEventListener("load", () => {
    getAPIData('https://dog.ceo/api/breeds/list/all', renderBreeds);
});

// function getAPIData(url, callback) {
//     fetch(url)
//     .then((r) => r.json())
//     .then(callback)
//     .catch((error) => {
//         console.log(error);
//     });
// }

function renderBreeds(response) {
    const listOfBreeds = response.message;
    for(const breed in listOfBreeds) {
        const breedName = document.createElement("p");
        breedName.classList.add("breed");
        const breedsDiv = document.getElementById("breeds");
        breedsDiv.appendChild(breedName);
        breedName.innerHTML = breed;

        breedName.addEventListener("click", () => {
            pageNumber.innerHTML = 1;
            underlineCurrentBreed(breedName);
            getBreedImages(breedName.innerHTML);
            localStorage.setItem("breed", breedName.innerHTML);
            localStorage.setItem("index", pageNumber.innerHTML - 1);
        });
    }

    if(window.location.reload) {
        reloadLastSelectedBreed();
    }
}

function underlineCurrentBreed(currentBreed) {
    const breedParagraphs = document.getElementsByClassName("breed");
    for(const breed of breedParagraphs) {
        breed.classList.remove("breed--selected"); 
    }
    currentBreed.classList.add("breed--selected");
}

function getBreedImages(chosenBreed) {
    getAPIData(`https://dog.ceo/api/breed/${chosenBreed}/images`, renderFirstImageOfBreed);
}

function renderFirstImageOfBreed(response) {
    imagesArray = response.message;
    breedImage.src = imagesArray[0];  
}

function reloadLastSelectedBreed() {
    if(localStorage.getItem("breed") && localStorage.getItem("index")) {
        const localStorageBreed = localStorage.getItem("breed");
        const breedParagraphs = document.getElementsByClassName("breed");
        for(const breed of breedParagraphs) {
            if(breed.innerHTML === localStorageBreed) {
                breed.classList.add("breed--selected");
                const name = breed.innerHTML;
                getAPIData(`https://dog.ceo/api/breed/${name}/images`, renderImagesOfLastBreed);
            }
        }
    }
}

function renderImagesOfLastBreed(response) {
    imagesArray = response.message;
    const index = localStorage.getItem("index");
    breedImage.src = imagesArray[index];
    const number = parseInt(index) + 1;
    pageNumber.innerHTML = number;
}

document.getElementById("forward").addEventListener("click", increasePageAndImageNumber);

document.getElementById("backward").addEventListener("click", decreasePageAndImageNumber);

function increasePageAndImageNumber() {
    pageNumber.innerHTML++;
    if(pageNumber.innerHTML > imagesArray.length) {
        pageNumber.innerHTML = imagesArray.length;
        return;
    } else {
        breedImage.src = imagesArray[pageNumber.innerHTML - 1];
        localStorage["index"] = pageNumber.innerHTML - 1;
    }
}

function decreasePageAndImageNumber() {
    pageNumber.innerHTML--;
    if(pageNumber.innerHTML <= 0) {
        pageNumber.innerHTML = 1;
        return;
    } else {
        breedImage.src = imagesArray[pageNumber.innerHTML - 1];
        localStorage["index"] = pageNumber.innerHTML - 1;
    }
}

document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem("name");
    localStorage.removeItem("password");
    localStorage.removeItem("breed");
    localStorage.removeItem("index");
    window.location = "/";
});

