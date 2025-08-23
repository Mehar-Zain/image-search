const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const moreBtn = document.getElementById("more-btn");


let keyWord = "";
let page = 1;

async function searchImages() {
    keyWord = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=_-rtXRs7rJq4hFkbOxmOnl8O6RiGe-l64hQw9Zn3hHE&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if (page === 1) {
        searchResult.innerHTML = "";
    }

    const results = data.results;

    results.map((result) => {
        const img = document.createElement("img");
        img.src = result.urls.small;

        const imgLink = document.createElement("a");
        imgLink.href = result.links.html;
        imgLink.target = "_blank";

        imgLink.appendChild(img);
        searchResult.appendChild(imgLink);
    })
    moreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault()
    page = 1;
    searchImages();
})

moreBtn.addEventListener("click", () => {
    page += 1;
    searchImages();
})