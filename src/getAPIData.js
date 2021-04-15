export function getAPIData(url, callback) {
    fetch(url)
    .then((r) => r.json())
    .then(callback)
    .catch((error) => {
        console.log(error);
    });
}
