export function renderBreeds(response) {
    const listOfBreeds = response.message;
    for(const breed in listOfBreeds) {
        const breedName = document.createElement("p");
        breedName.classList.add("breed");
        const breedsDiv = document.getElementById("breeds");
        breedsDiv.appendChild(breedName);
        breedName.innerHTML = breed;
    }
}