let query = document.querySelector("input");
let button = document.querySelector("button");
const addData = (data) => {
};
button.addEventListener('click', () => {
    fetch(`https://api.pexels.com/v1/search?query=${query.value}&per_page=1`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: 'aSEL3NLSEokQ7MDCl2ohl0HnvIRb1GN2khZzGWQ26h3eGs3vRGnimcfu'
        }
    })
        .then(res => res.json())
        .then(data => console.log(data));
    console.log(`you searched for ${query.value} pics at https://api.pexels.com/v1/search?query=${query.value}&per_page=1`);
});
export {};
//# sourceMappingURL=fetch.js.map